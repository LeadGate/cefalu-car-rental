"""prerender_patch.py — Cefalù-specific post-build patcher.

Run after `npm run build`, before `wrangler pages deploy`:
    python prerender_patch.py
"""
import json
import re
from pathlib import Path

SITE = 'https://cefalu-car-rental.com'

ROUTES = {
    '/': (
        'Cefalù Car Rental — Compare Sicily Deals 2026 | Cefalù',
        'Compare Cefalù car rental deals from €47/day. PMO airport pickup, ZTL guide, parking tariffs, and Madonie day-trip routes — independent local guide.',
    ),
    '/cefalu-airport-car-rental': (
        'PMO Airport Pickup to Cefalù | Cefalù Car Rental',
        'Step-by-step guide to picking up your rental at Palermo Airport (PMO) and driving to Cefalù — 98 km, 1h20 via A20 toll, counter scams to refuse.',
    ),
    '/driving-in-cefalu': (
        'Cefalù ZTL & Driving Guide 2026 | Cefalù Car Rental',
        '3 ZTL perimeters, 5 ANPR camera gates, 24/7 enforcement. Avoid the €83 fine + €30–50 admin and learn how to challenge a ZTL ticket via Cassazione 27175/2025.',
    ),
    '/parking-in-cefalu': (
        'Cefalù Parking 2026: Tariffs & Free Lots | Cefalù',
        'Lungomare Giardina €2/h, €15/day; Cefalù Beach Parking €5/2h; Sant\'Ambrogio frazione free 50 spaces. 2025–2026 tariffs, capacity, GPS coordinates.',
    ),
    '/day-trips-from-cefalu': (
        'Cefalù Day Trips by Car | Cefalù Car Rental',
        'Castelbuono (22 km), full Madonie circuit (160 km), Palermo (70 km), Aeolian ferries from Milazzo. Distances, drive times, road conditions for 2026.',
    ),
    '/cefalu-car-rental-faq': (
        'Cefalù Car Rental FAQ — 12 Questions | Car Rental',
        'Pricing, IDP rules, ZTL fines, no-credit-card options, Sunday refuelling, and emergency contacts — 12 real questions for renters in Cefalù, Sicily.',
    ),
    '/about': (
        'About Cefalù Car Rental | Independent Comparison',
        'How we research Cefalù rental rates, ZTL ordinances, and AGCM consumer rulings — independent, transparent affiliate methodology and editorial standards.',
    ),
    '/contact': (
        'Contact Cefalù Car Rental | Editorial & Listings',
        'Send a message for press, listings, or data corrections. Local emergency numbers: NUE 112, ACI 803.116, G. Giglio Hospital ER +39 0921 920 680.',
    ),
    '/privacy-policy': (
        'Privacy Policy | Cefalù Car Rental',
        'GDPR-compliant privacy policy for cefalu-car-rental.com — what we collect, why, retention, your rights under EU 2016/679 and Italian Codice Privacy.',
    ),
}

FAQ_ROUTE = '/cefalu-car-rental-faq'
FAQ_TSX_PATH = 'src/pages/FAQ.tsx'

DIST = Path(__file__).parent / 'dist'


def patch(html: str, route: str, title: str, desc: str) -> str:
    canonical = SITE + (route if route != '/' else '/')

    # boss-prerender marker (Council 2026-05-04 Phase 1) — tells SEOHead.tsx prerender is
    # authoritative for head; Helmet skips canonical/meta-desc/og:url/JSON-LD. Idempotent.
    html = re.sub(r'\s*<meta\s+name="boss-prerender"[^>]*/?>\s*', '\n    ', html)
    html = html.replace('</title>', '</title>\n    <meta name="boss-prerender" content="head-authoritative" />', 1)

    html = re.sub(r'<title>[^<]*</title>', f'<title>{title}</title>', html, count=1)

    if re.search(r'<meta\s+name="description"', html):
        html = re.sub(
            r'<meta\s+name="description"\s+content="[^"]*"\s*/?>',
            f'<meta name="description" content="{desc}" />',
            html, count=1,
        )
    else:
        html = html.replace('</title>', f'</title>\n    <meta name="description" content="{desc}" />', 1)

    if re.search(r'<link\s+rel="canonical"', html):
        html = re.sub(
            r'<link\s+rel="canonical"\s+href="[^"]*"\s*/?>',
            f'<link rel="canonical" href="{canonical}" />',
            html, count=1,
        )
    else:
        html = html.replace('</title>', f'</title>\n    <link rel="canonical" href="{canonical}" />', 1)

    html = re.sub(r'\s*<meta\s+property="og:(?:title|description|url|type|image)"[^>]*/?>\s*', '\n    ', html)
    html = re.sub(r'\s*<meta\s+name="twitter:(?:title|description|card|image)"[^>]*/?>\s*', '\n    ', html)
    og_block = f"""
    <meta property="og:title" content="{title}" />
    <meta property="og:description" content="{desc}" />
    <meta property="og:url" content="{canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="{SITE}/og-image.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{title}" />
    <meta name="twitter:description" content="{desc}" />
    <meta name="twitter:image" content="{SITE}/og-image.png" />"""
    html = html.replace('<link rel="canonical"', og_block + '\n    <link rel="canonical"', 1)
    return html


def inject_faq_schema():
    if not FAQ_ROUTE or not FAQ_TSX_PATH:
        return
    sub = '' if FAQ_ROUTE == '/' else FAQ_ROUTE.lstrip('/')
    faq_html = DIST / sub / 'index.html'
    faq_tsx = Path(__file__).parent / FAQ_TSX_PATH
    if not faq_html.exists() or not faq_tsx.exists():
        print(f'  SKIP FAQPage schema — files missing ({faq_html.exists()=}, {faq_tsx.exists()=})')
        return

    tsx = faq_tsx.read_text(encoding='utf-8')
    items = re.findall(
        r'\{\s*question:\s*"([^"]+)",\s*answer:\s*"((?:\\"|[^"])*)"\s*\}',
        tsx,
    )
    if not items:
        print(f'  SKIP FAQPage schema — no question/answer items found')
        return

    main_entity = []
    for q, a in items:
        a_clean = re.sub(r'<[^>]+>', '', a.replace('\\"', '"'))[:500]
        main_entity.append({
            '@type': 'Question',
            'name': q,
            'acceptedAnswer': {'@type': 'Answer', 'text': a_clean},
        })

    schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': main_entity,
    }
    s = faq_html.read_text(encoding='utf-8')
    s = re.sub(r'<script type="application/ld\+json">[^<]*"@type":\s*"FAQPage"[^<]*</script>\s*', '', s)
    injection = f'\n    <script type="application/ld+json">{json.dumps(schema, ensure_ascii=False)}</script>'
    s = s.replace('</head>', injection + '\n  </head>', 1)
    faq_html.write_text(s, encoding='utf-8')
    print(f'  injected FAQPage JSON-LD ({len(main_entity)} questions)')


def main():
    if not DIST.exists():
        print(f'ERROR: {DIST} does not exist — run `npm run build` first')
        raise SystemExit(1)

    for route, (title, desc) in ROUTES.items():
        sub = '' if route == '/' else route.lstrip('/')
        target = DIST / sub / 'index.html' if sub else DIST / 'index.html'
        if not target.exists():
            print(f'  SKIP {route} — {target.relative_to(DIST.parent)} not found')
            continue
        s = target.read_text(encoding='utf-8')
        s = patch(s, route, title, desc)
        target.write_text(s, encoding='utf-8')
        print(f'  patched {route}: title={len(title)}ch desc={len(desc)}ch')

    inject_faq_schema()
    print('done')


if __name__ == '__main__':
    main()
