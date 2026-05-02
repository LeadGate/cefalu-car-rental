"""Careful About.tsx cleanup — preserve all content, strip only trailing CTAs."""
import re
from pathlib import Path

p = Path("D:/CLAUDE/mentat/cefalu-build/src/pages/About.tsx")
s = p.read_text(encoding="utf-8")
orig = s

# Step 1: re-apply earlier post-md_to_tsx fixes (those were lost when we restored)
# Strip Related guides blocks
s = re.sub(
    r'\s*<section[^>]*>\s*<h\d[^>]*>Related [Gg]uides[^<]*</h\d>[\s\S]*?</section>\s*',
    '\n      ', s
)

# Slug fixes
slug_map = {
    "/parking-in-cefal-where-how-much-how-long": "/parking-in-cefalu",
    "/about-who-we-are": "/about",
    "/cefal-car-rental-faq": "/cefalu-car-rental-faq",
    "/about-page": "/about",
    "/privacy": "/privacy-policy",
}
for old, new in slug_map.items():
    s = s.replace(old, new)

# Strip *italic* + **bold** outside JSON-LD lines
new_lines = []
for line in s.split("\n"):
    if re.search(r'"(text|name|description|headline|item|url|@id|answer|acceptedAnswer)"\s*:', line):
        new_lines.append(line); continue
    prev = None; cur = line
    while prev != cur:
        prev = cur
        cur = re.sub(
            r'(?<![*\w])\*([a-zA-Z][a-zA-Z\s\'\-àèéìòùÀÈÉÌÒÙ]{1,40}?)\*(?![*\w])',
            lambda m: '“' + m.group(1) + '”', cur
        )
    cur = re.sub(r'\*\*([^*]+?)\*\*', r'\1', cur)
    new_lines.append(cur)
s = "\n".join(new_lines)

# Step 2: subtitle blockquote + <a> strip
def fix_subtitle(m):
    inner = m.group(1)
    inner = re.sub(r'\s>\s*(?:\U0001f4a1|⚠️|\U0001f697|⚠|\U0001f4a1)[\s\S]*?(?=</p>)', '', inner)
    inner = re.sub(r'<a\s+href="[^"]*"[^>]*>([^<]+)</a>', r'\1', inner)
    parts = re.split(r'(<[^>]+>)', inner)
    inner = "".join(
        part if (part.startswith("<") and part.endswith(">"))
        else re.sub(r'(?<!&gt;)(?<!&lt;)\s>\s', ' &gt; ', part)
        for part in parts
    )
    return f'subtitle={{<>{inner}</>}}'

s = re.sub(r'subtitle=\{<>([\s\S]*?)</>\}', fix_subtitle, s)

# Step 3: ZTL link injection (only first occurrence)
if 'href="/driving-in-cefalu"' not in s:
    s = re.sub(
        r'\bZTL\b',
        '<a href="/driving-in-cefalu" className="text-primary underline hover:text-accent">ZTL</a>',
        s, count=1
    )

# Step 4: UTILITY PAGE — drop ALL CTAs
# 4a. Strip Hero CTA props
s = re.sub(r'\s*ctaText="[^"]*"', '', s)
s = re.sub(r'\s*ctaHref="[^"]*"', '', s)

# 4b. Strip the two trailing CTA divs (very specific patterns from the actual file)
# Blue button div (py-6 + bg-primary)
s = re.sub(
    r'\n?\s*<div className="flex justify-center py-6">\s*<a[^>]*bg-primary[^>]*>[\s\S]*?</a>\s*</div>',
    '', s
)
# Yellow cta-button div (pb-12 OR py-16 mt-8)
s = re.sub(
    r'\n?\s*<div className="flex justify-center (?:pb-12|py-16 mt-8|py-12)">\s*<a[^>]*cta-button[^>]*>[\s\S]*?</a>\s*</div>',
    '', s
)

# 4c. Strip the entire "Ready to compare cars for Cefalù?" Section using balanced matching
def strip_ready_section(text):
    out = []
    i = 0
    while True:
        m = re.search(r'<Section\b', text[i:])
        if not m:
            out.append(text[i:]); break
        start = i + m.start()
        out.append(text[i:start])
        # walk forward counting Section depth
        depth = 1
        j = start + len('<Section')
        while j < len(text) and depth > 0:
            nm = re.search(r'<Section\b|</Section>', text[j:])
            if not nm: break
            tag = nm.group(0)
            j_local = j + nm.end()
            if tag == '<Section':
                depth += 1
            else:
                depth -= 1
            j = j_local
        block = text[start:j]
        if 'Ready to compare cars for Cefalù' in block or 'Ready to compare cars for Cefal' in block:
            pass  # drop the block entirely
        else:
            out.append(block)
        i = j
    return "".join(out)

s = strip_ready_section(s)

# Step 5: rename component AboutWhoWeAre → About
s = re.sub(r'\bAboutWhoWeAre\b', 'About', s)

# Save
if s != orig:
    p.write_text(s, encoding="utf-8")
    print(f"Patched About.tsx ({len(s)} chars)")

# Verify
content = p.read_text(encoding="utf-8")
print(f"\nAbout.tsx final state:")
print(f"  size: {len(content)} chars / {len(content.splitlines())} lines")
print(f"  Hero CTA: {'ctaText=' in content}")
print(f"  yellow cta-button: {bool(re.search(r'cta-button', content))}")
print(f"  bg-primary trailing: {bool(re.search(r'flex justify-center[^>]*\">\\s*<a[^>]*bg-primary', content))}")
print(f"  Ready to compare Section: {'Ready to compare cars' in content}")
print(f"  Section count: {len(re.findall(r'<Section\\b', content))}")
print(f"  Internal links: {len(re.findall(r'<a href=\"/[a-z]', content))}")
print(f"  Export name: {'export default About' in content and 'AboutWhoWeAre' not in content}")
