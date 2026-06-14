import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import AffiliateWidget from "@/components/AffiliateWidget";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, Plane, Shield } from "lucide-react";

const Index = () => {
  const breadcrumbSchema =
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cefalu-car-rental.com"
      }
    ]
  };

  const websiteSchema =
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Cefalu Car Rental",
    "url": "https://cefalu-car-rental.com"
  };

  const organizationSchema =
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cefalu Car Rental",
    "url": "https://cefalu-car-rental.com",
    "logo": "https://cefalu-car-rental.com/favicon-512x512.png",
    "description": "Independent car rental comparison guide for Cefalu. Compare deals from local and international providers.",
    "areaServed": {
      "@type": "Place",
      "name": "Cefalu"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@cefalu-car-rental.com",
      "url": "https://cefalu-car-rental.com/contact"
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Cefalu Car Rental — Compare Deals | Cefalu Car Rental"
        description="Welcome to Cefalù, where a car turns a beach break into a real Sicily road trip. A Cefalù car rental lets you reach the Madonie, the SS113 coastal road,"
        canonical="https://cefalu-car-rental.com/"
        jsonLd={[breadcrumbSchema, websiteSchema, organizationSchema]}
      />

      <HeroSection
        title="Cefalù Car Rental: Smarter, Clearer, Better Value"
        subtitle={<><p>Welcome to Cefalù, where a car turns a beach break into a real Sicily road trip. A Cefalù car rental lets you reach the Madonie, the SS113 coastal road, and the villages above the coast on your own timetable.</p></>}
        image="/1.webp"
        imageAlt="Car rental in Cefalu"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare"
      />

      <AffiliateWidget id="compare" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why a car matters in Cefalù and the Madonie"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù old town is walkable, but the best day trips from Cefalù need road access, not bus timetables. A rental car gives you direct access to the UNESCO Cefalù Cathedral, the Rocca di Cefalù, Mandralisca museum, and inland routes toward Castelbuono, Petralia Soprana, Petralia Sottana, Polizzi Generosa, Geraci Siculo, Gangi, Caltavuturo, Sclafani Bagni, and Collesano.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">A car also opens the Madonie National Park and the SP9 mountain road, which are useful when the SS113 coastal road is busy. For beach-hopping, the Tirreno coast between Cefalù, Pollina, Tusa, Trabia, San Nicola l'Arena, and Termini Imerese is far easier with your own vehicle.</p>
          <WarningBox><p>💡 <strong>Tip:</strong> If your plan includes Lipari, Vulcano, or Salina in the Aeolian Islands, drive to Milazzo port with a rental car only if your supplier allows ferry travel and the contract explicitly covers it.  ⚠️ <strong>Warning:</strong> The A20 Buonfornello–Messina motorway is CAS-operated and often uses paper-ticket tolling, while the A19 Palermo–Catania is ANAS-managed and free; check the route before you rely on sat-nav estimates.</p></WarningBox>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Where to collect a car: PMO, Cefalù, and nearby airports"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">For most travelers, PMO is the best-value collection point because Palermo Airport has the broadest supply of rental desks, including Drivalia at Arrival Hall Level 0, Goldcar at PMO, Hertz Italiana, Avis Budget Italia, Europcar, Locauto, Noleggiare, Centauro, Green Motion, Maggiore, and others. Drivalia’s public PMO kiosk and phone number (+39 091 6511393) make it a practical airport counter when you want immediate pickup after landing.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù town pickup can work if you want to start in the old town, but the choice is smaller and the vehicle mix is tighter. Local operators in the Cefalù area include Safe Car Rental Cefalù in Cortile O 1 with +39 380 787 1992 / +39 345 820 1316 and booking@screntalcar.com, AFFITTULA on Via Roma 109 with +39 0921 820124, Rent Me Now! / G.F.C. Noleggio on Via Giubileo Magno 15 with +39 388 775 5781, and Bringo in Carini PA (P.IVA 07307610829).</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If PMO is not convenient, Catania CTA, Trapani TPS, and Comiso CIY may fit a wider island itinerary, but Cefalù arrivals usually save time by booking in Palermo and driving north on the A20 or A19. For step-by-step airport guidance, see <a href="/cefalu-airport-car-rental/" className="text-primary underline hover:text-accent">Palermo Airport pickup to Cefalù</a>.</p>
      </Section>

      <ImageDivider src="/2.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Which car class fits Cefalù roads"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A compact or economy model is usually the best match for Cefalù’s narrow streets, tighter parking bays, and short coastal drives. Common choices include Fiat Panda, Fiat 500, Fiat 500 Cabrio, Lancia Ypsilon, and Toyota Aygo for solo travelers or couples; VW T-Cross, Audi Q3, and Peugeot SW for families or luggage-heavy trips; and Renault Trafic or Ford Transit Connect for larger groups.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For scooters and light urban mobility, Yamaha Xenter 125 can be a practical option where available, but most visitors still choose four wheels because of luggage, supermarket stops, and hill routes into the Madonie.</p>
          <WarningBox><p>💡 <strong>Tip:</strong> If your base is Piazza Duomo, Corso Ruggero, Via Vittorio Emanuele, Piazza Garibaldi, or Piazza Marina, a smaller car reduces the chance of an awkward maneuver near a tight corner or a ZTL camera.  ⚠️ <strong>Warning:</strong> The Polizia Municipale Cefalù, under Comandante Giuseppe Casalicchio, enforces local traffic rules and access limits, and fines can be issued under Codice della Strada articles 7, 135, 170, 171, 173, and 186.</p></WarningBox>
      </Section>

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="Insurance, deposit, and excess: what to check before you book"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The real price of car rental in Cefalù is not the daily rate alone; it is the rate plus the deposit, the franchise, the excess/deductible, and the insurance structure. Many suppliers block a preauthorisation on the main driver’s card, and the amount can be several hundred euros depending on vehicle class.</p>
          <InfoBox><p>CDW usually reduces damage liability, SCDW lowers the remaining excess, and FDW or full coverage can reduce exposure further; zero excess is the clearest wording when you want the deductible to be as close to €0 as possible. Read the contract carefully because a vessatory clause under Codice del Consumo art. 33 c.1 can shift risk in a way that looks cheap at booking time but becomes expensive at return.</p></InfoBox>
          <WarningBox><p>💡 <strong>Tip:</strong> If you want an all-in quote, compare the final price per day with the insurance line items, because a €38/day compact with CDW can become a €61/day booking once SCDW and a young-driver surcharge are added.  ⚠️ <strong>Warning:</strong> Italian consumer groups such as Federconsumatori and market monitors such as AGCM have repeatedly highlighted disputed add-ons and deposit practices, and Cassazione ord. 27175/2025 is a reminder that unfair terms can be challenged when they are not clearly disclosed.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="How to find the cheapest honest deal"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The lowest published price is not always the cheapest total cost. To keep the final bill under control, book early, compare town and airport pickup, and read the fuel and mileage rules before you pay.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Book ahead:</strong> In July and August, the same category can cost far more at the desk than it does 30–60 days before arrival.</li>
            <li><strong>Choose full-to-full fuel:</strong> A full tank in, full tank out policy is usually the simplest way to avoid refuelling markups.</li>
            <li><strong>Avoid unnecessary one-way routing:</strong> Returning the car where you picked it up is often cheaper than separate drop-off handling.</li>
            <li><strong>Use one main driver:</strong> Every extra driver can add a daily charge, so add a second driver only if the trip really needs it.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">For a broader savings guide, compare live rates with <a href="/parking-in-cefalu/" className="text-primary underline hover:text-accent">parking in Cefalù</a> and the practical route advice in <a href="/day-trips-from-cefalu/" className="text-primary underline hover:text-accent">Madonie day trips from Cefalù</a>.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Local operators and brokers you may see in search results"
        alt
      >
          <CompanyCard><p><strong>Safe Car Rental Cefalù:</strong> Cortile O 1, booking@screntalcar.com, and +39 380 787 1992 / +39 345 820 1316 make this a local Cefalù option for short-notice pickups and town-based handovers.</p></CompanyCard>
          <CompanyCard><p><strong>AFFITTULA:</strong> Via Roma 109, +39 0921 820124, is a Cefalù town presence that can suit travelers staying near the historic center.</p></CompanyCard>
          <CompanyCard><p><strong>Rent Me Now! / G.F.C. Noleggio:</strong> Via Giubileo Magno 15, +39 388 775 5781, is another local contact point for Cefalù pickup requests and small-car bookings.</p></CompanyCard>
          <CompanyCard><p><strong>Bringo:</strong> P.IVA 07307610829 in Carini PA is a local operator name that may appear in comparison flows, especially for Palermo-area collections.</p></CompanyCard>
          <CompanyCard><p><strong>Auto Europe:</strong> As a broker, Auto Europe is useful for comparing inventory across multiple suppliers, but Auto Europe is not the same brand as Autoeuropa / Sicily by Car group.</p></CompanyCard>
          <WarningBox><p>💡 <strong>Tip:</strong> If you need airport arrival support, ask whether the supplier has an on-airport desk, a shuttle, or a meet-and-greet service before you confirm the booking.  ⚠️ <strong>Warning:</strong> Some brokers show an attractive base rate but hide the real cost in deposits, fuel rules, and excess terms, so the cheapest card charge is not always the cheapest trip.</p></WarningBox>
      </Section>

      <ImageDivider src="/4.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Cefalù rental FAQ"
      >
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Q: Is it better to rent in PMO or in Cefalù town?</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">A: PMO is usually better for price and choice, while Cefalù town is better only if you want to skip airport pickup logistics. Palermo Airport often has more categories, more competition, and easier same-day collection, whereas town offices can have fewer cars and narrower hours. If your flight lands late, verify the desk closing time first.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Q: Do I need a credit card for car rental in Cefalù?</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">A: A credit card in the main driver’s name is still the most widely accepted form of preauthorisation. Some suppliers accept debit cards, but they often require full coverage, a larger deposit, or stricter paperwork. If you only have a debit card, confirm the policy in writing before you travel.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Q: What insurance should I choose for Sicily?</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">A: For most visitors, SCDW or full coverage with zero excess is the simplest option. That structure lowers the excess/deductible and reduces the risk of a surprise charge at return, especially when parking near the old town or driving through busy coastal roads. The caveat is that glass, tyres, underbody, and roof damage may still have exclusions unless FDW is explicitly included.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Q: Is parking difficult in Cefalù?</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">A: Parking is tight near Cefalù old town, Piazza Duomo, Corso Ruggero, and the Rocca, so waterfront or private parking is usually easier. The Lungomare Giuseppe Giardina is the common public option, but rates and rules change by zone and season. If you are staying in a central hotel, ask whether the property has reserved spaces.</p>
          <p className="text-gray-700 mb-4 leading-relaxed"><strong>Q: Can I drive to the Madonie and the coast in one trip?</strong></p>
          <p className="text-gray-700 mb-4 leading-relaxed">A: Yes, and a compact car is often enough for both routes. The SS113 coastal road works well for beach stops, while the SP9 mountain road is better for the Madonie villages and scenic inland drives. Check fuel and mileage limits if you plan a full day route.</p>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="About Cefalù Car Rental"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù Car Rental is a niche affiliate guide built for travelers who want local road advice, not generic booking fluff. The site focuses on real route decisions, contract details, and practical comparisons for PMO, Cefalù town, and the wider north Sicilian network.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">We use live comparison logic to help readers assess operator choice, deposit size, and insurance terms, and we may earn a commission at no extra cost when a booking is completed through our links. For official local context, travelers can also check Comune di Cefalù notices, ACI guidance, and current traffic rules before driving into the historic center.</p>
      </Section>
    </Layout>
  );
};

export default Index;
