"""Apply 4 GEO audit fixes for cefalu-car-rental.com."""
import re
from pathlib import Path

ROOT = Path("D:/CLAUDE/mentat/cefalu-build")
CONTENT = Path("D:/CLAUDE/mentat/vault/inbox/niches/Italy/Cefalu/Copywriting")

# === FIX 1: robots.txt — explicit AI bot allows ===
ai_bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "anthropic-ai",
           "PerplexityBot", "Google-Extended", "Applebot-Extended", "CCBot",
           "cohere-ai", "Bytespider", "Diffbot"]
robots_content = "User-agent: *\nAllow: /\n\n"
for bot in ai_bots:
    robots_content += f"User-agent: {bot}\nAllow: /\n\n"
robots_content += "Sitemap: https://cefalu-car-rental.com/sitemap.xml\n"
(ROOT / "public/robots.txt").write_text(robots_content, encoding="utf-8")
print(f"[robots.txt] {len(ai_bots)} explicit AI bot allows + sitemap")

# === FIX 2: llms-full.txt — concat gpt-edit content ===
page_meta = [
    ("01-home", "Home — Cefalu Car Rental", "https://cefalu-car-rental.com/"),
    ("02-palermo-airport", "PMO Airport Pickup to Cefalu", "https://cefalu-car-rental.com/cefalu-airport-car-rental"),
    ("03-driving-and-ztl-in-cefal", "Cefalu ZTL & Driving Guide 2026", "https://cefalu-car-rental.com/driving-in-cefalu"),
    ("04-parking-in-cefal-where-how-much-how-long", "Cefalu Parking Map & Tariffs 2026", "https://cefalu-car-rental.com/parking-in-cefalu"),
    ("05-madonie-day-trips-from-cefal", "Madonie Day Trips from Cefalu", "https://cefalu-car-rental.com/day-trips-from-cefalu"),
    ("06-cefal-car-rental-faq", "Cefalu Car Rental — 12 FAQ", "https://cefalu-car-rental.com/cefalu-car-rental-faq"),
    ("07-about-who-we-are", "About Cefalu Car Rental", "https://cefalu-car-rental.com/about"),
    ("08-contact", "Contact", "https://cefalu-car-rental.com/contact"),
    ("09-privacy-policy", "Privacy Policy", "https://cefalu-car-rental.com/privacy-policy"),
]

full_parts = ["# Cefalu Car Rental — Full Content\n",
              "\n> Independent comparison guide for car rentals in Cefalu, Sicily. Updated May 2026.\n"]

for prefix, title, url in page_meta:
    matches = list(CONTENT.glob(f"{prefix}*-gpt-edit.md.txt"))
    if not matches:
        print(f"  WARN: no gpt-edit file for {prefix}")
        continue
    body = matches[0].read_text(encoding="utf-8")
    body = re.sub(r'\n#+\s*Change Log[\s\S]*$', '', body, flags=re.IGNORECASE)
    body = re.sub(r'\n#+\s*Coverage Report[\s\S]*$', '', body, flags=re.IGNORECASE)
    body = re.sub(r'\*\*E-E-A-T signal:\*\*[^-]*?---', '', body)
    body = re.sub(r':contentReference\[oaicite:\d+\]\{[^}]*\}', '', body)
    body = re.sub(r'<!-- editor notes -->[\s\S]*$', '', body)
    body = body.strip()
    full_parts.append(f"\n---\n\n# {title}\n\n**URL:** {url}\n\n{body}\n")

full_text = "".join(full_parts)
(ROOT / "public/llms-full.txt").write_text(full_text, encoding="utf-8")
print(f"[llms-full.txt] {len(full_text.split())} words, {len(full_text)} chars")

# === FIX 3: llms.txt with descriptions + Usage Policy ===
llms = """# Cefalu Car Rental

> Independent comparison guide for car rentals in Cefalu, Sicily. Compare local and international suppliers at Palermo Airport (PMO) and in Cefalu town. Covers ZTL rules, parking tariffs, Madonie day trips, and Italian rental consumer-protection law.

- Website: https://cefalu-car-rental.com
- Email: editorial@cefalu-car-rental.com
- Updated: May 2026

## Pages

- [Home](https://cefalu-car-rental.com/): Compare Cefalu car rental deals from EUR 47/day. Pickup hubs (PMO airport, Cefalu town), category prices for 2026, and a quick orientation map of Sicily north coast for renters.
- [PMO Airport Pickup to Cefalu](https://cefalu-car-rental.com/cefalu-airport-car-rental): Step-by-step guide to picking up your rental at Palermo Falcone-Borsellino airport (PMO) and driving 98 km / 1h20 to Cefalu via the A20 toll motorway. Counter scams to refuse and queue-time data.
- [ZTL & Driving Guide](https://cefalu-car-rental.com/driving-in-cefalu): Cefalu 3 ZTL perimeters, 5 ANPR camera gates, 24/7 enforcement, fines (EUR 83 base + EUR 30-50 admin), and how to challenge a ZTL ticket via Cassazione 27175/2025 and AGCM CV242-CV248.
- [Parking Map & Tariffs](https://cefalu-car-rental.com/parking-in-cefalu): All Cefalu parking facilities with capacity, GPS coordinates, and 2025-2026 tariffs. Lungomare Giardina EUR 2/h, Cefalu Beach Parking EUR 5/2h, Sant'Ambrogio frazione free 50 spaces.
- [Madonie Day Trips](https://cefalu-car-rental.com/day-trips-from-cefalu): Castelbuono (22 km), Petralia Soprana, Polizzi Generosa, Gangi, full Madonie 160 km circuit, Palermo (70 km), Aeolian Islands ferry from Milazzo. Distances, drive times, road conditions.
- [Car Rental FAQ](https://cefalu-car-rental.com/cefalu-car-rental-faq): 12 questions on pricing, IDP rules, no-credit-card options, ZTL fines, Sunday refuelling, A20 tolls, and emergency contacts.
- [About](https://cefalu-car-rental.com/about): Who we are, how we research (ANIASA, AGCM, ISTAT, Comune di Cefalu sources), and editorial standards.
- [Contact](https://cefalu-car-rental.com/contact): Editorial email and local emergency numbers (NUE 112, ACI 803.116, G. Giglio Hospital ER +39 0921 920 680, Polizia Municipale Cefalu 0921 420704).
- [Privacy Policy](https://cefalu-car-rental.com/privacy-policy): GDPR (EU 2016/679) + Italian Codice Privacy (D.Lgs. 196/2003) compliance, cookie categories, data subject rights.

## Full content

- [llms-full.txt](https://cefalu-car-rental.com/llms-full.txt): Complete markdown of all pages — about 14,000 words covering every fact, table, and source citation.

## Key Data Points

- Distance Palermo Airport (PMO) to Cefalu: 98 km / 1h20 via A20
- A20 full Messina-Buonfornello toll: EUR 13.64 (Class A, 2025)
- ZTL fine in Cefalu: EUR 83 base + EUR 30-50 rental admin (AGCM CV242-CV248 ruled vessatory)
- Lungomare Giardina parking: 540 spaces, EUR 2/h, EUR 15/day from 1 May 2024
- Sant'Ambrogio frazione: 50 free spaces, 6 km east, opened 2023
- Cefalu Beach Parking suspends online bookings 14-16 August (Ferragosto)
- Italy rental price increase 2024-2025: +23% (Federconsumatori, August 2025)
- Sicily 2024 road deaths: 240 (ISTAT); rural mortality index 5.4
- Cassazione ord. 27175/2025: ZTL Sindaco-issued ordinances are legally vulnerable
- Italian motorway 2026 toll inflation adjustment: +1.5% (national)

## Usage Policy

Content on cefalu-car-rental.com may be cited and quoted with attribution to the source URL. Pricing and regulatory data are updated as official sources publish revisions; for time-sensitive bookings, verify against the operator live offer. The site is an independent affiliate publisher, not a rental company.
"""
(ROOT / "public/llms.txt").write_text(llms, encoding="utf-8")
print(f"[llms.txt] {len(llms)} chars, with Usage Policy + per-page descriptions + Key Data Points")

# === FIX 4: Organization schema — add areaServed in source index.html ===
idx = ROOT / "index.html"
s = idx.read_text(encoding="utf-8")

def add_areaServed(match):
    block = match.group(0)
    if '"areaServed"' in block:
        return block
    area_block = (
        ',\n      "areaServed": {\n'
        '        "@type": "City",\n'
        '        "name": "Cefalu",\n'
        '        "containedInPlace": {\n'
        '          "@type": "AdministrativeArea",\n'
        '          "name": "Sicily",\n'
        '          "containedInPlace": {\n'
        '            "@type": "Country",\n'
        '            "name": "Italy"\n'
        '          }\n'
        '        }\n'
        '      }'
    )
    new_block = re.sub(
        r'(\n\s*)(\}\s*</script>)',
        lambda m: area_block + m.group(1) + m.group(2),
        block, count=1
    )
    return new_block

s2 = re.sub(
    r'<script[^>]*type="application/ld\+json"[^>]*>\s*\{[^{]*"@type"\s*:\s*"Organization"[\s\S]*?\}\s*</script>',
    add_areaServed, s, count=1
)
if s2 != s:
    idx.write_text(s2, encoding="utf-8")
    print("[index.html] areaServed (Cefalu, Sicily, Italy) added to Organization schema")
else:
    print("[index.html] WARN: Organization schema not matched")

print("\nAll GEO fixes ready.")
