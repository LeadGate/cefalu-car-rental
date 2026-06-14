import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import { Car } from "lucide-react";

const About = () => {
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://cefalu-car-rental.com/about"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "About Cefalù-Car-Rental.com",
    "description": "Cefalù-Car-Rental.com is a comparison site for car hire in Cefalù, with a practical focus on pricing, insurance, and pickup logistics for travellers",
    "url": "https://cefalu-car-rental.com/about",
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
    "publisher": {
      "@type": "Organization",
      "name": "Cefalu Car Rental",
      "url": "https://cefalu-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cefalu-car-rental.com/favicon-512x512.png"
      }
    },
    "mainEntityOfPage": "https://cefalu-car-rental.com/about",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="About Cefalù-Car-Rental.com | Cefalu Car Rental"
        description="Cefalù-Car-Rental.com is a comparison site for car hire in Cefalù, with a practical focus on pricing, insurance, and pickup logistics for travellers"
        canonical="https://cefalu-car-rental.com/about/"
      />

      <Breadcrumbs items={[{ label: "About" }]} />

      <HeroSection
        title="About Cefalù-Car-Rental.com"
        subtitle={<><p>Cefalù-Car-Rental.com is a comparison site for car hire in Cefalù, with a practical focus on pricing, insurance, and pickup logistics for travellers arriving via PMO (Falcone-Borsellino), Catania CTA, Trapani TPS, or Comiso CIY. The site also helps drivers plan routes on the A20 (Buonfornello–Messina, CAS-operated, paper-ticket toll), the A19 (Palermo–Catania, ANAS, free), and the SS113 coastal road toward the Madonie and the Tirreno coast.</p></>}
        image="/8.webp"
        imageAlt="Car rental in Cefalu"
      />
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>cefalu-car-rental.com is an independent car rental booking guide</strong> for Cefalu. <strong>cefalu-car-rental.com does not own vehicles, operate a rental office, hold deposits, or issue rental contracts.</strong> All bookings, supplier conditions, deposits, insurance terms and final prices are handled by the booking partner or rental supplier shown in the booking widget.
        </p>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why Cefalù-Car-Rental.com exists"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù-Car-Rental.com exists to make rental comparison in Cefalù clearer, faster, and easier to verify, especially for visitors who want a compact car for the UNESCO Cefalù Cathedral area or a larger vehicle for day trips into the Madonie National Park. The site is not a rental company; it is a comparison and affiliate resource that helps users compare offers from operators such as Bringo (P.IVA 07307610829, Carini PA), Drivalia (ex-Leasys, kiosk at Arrival Hall Level 0 PMO, +39 091 6511393), Goldcar at PMO, Hertz Italiana, Avis Budget Italia, Europcar, Locauto, Noleggiare, Centauro, Green Motion, Maggiore, Smile Rent, Joyrent, Italy Car Rent, Karym Rent, Kefatur, Sc Rental Car, NGA Cefalù, Rent Me Now! (G.F.C. Noleggio, Via Giubileo Magno 15, +39 388 775 5781), AFFITTULA (Via Roma 109, +39 0921 820124), MyGuideSicily, Stress Free Car Rental, and Auto Europe as a broker.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù-Car-Rental.com also highlights where each pickup model fits best: a Fiat Panda or Fiat 500 for the old town lanes, a Lancia Ypsilon or Fiat 500 Cabrio for short coastal runs, a VW T-Cross or Audi Q3 for hill roads toward Castelbuono, and a Renault Trafic or Ford Transit Connect for larger groups.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> On narrow streets such as Via Vittorio Emanuele, Corso Ruggero, and the lanes around Piazza Duomo, a Fiat Panda or Toyota Aygo is usually easier to park than a larger Peugeot SW or SUV.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="How the site helps drivers compare value"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù-Car-Rental.com structures offers so that each result can be checked against a concrete figure, a contract term, or a location detail. A compact car may appear at €31–€48/day in low season, while airport collections at PMO can rise to €55–€90/day when SCDW, zero excess, and one-way return fees are included; those differences are easier to judge when the page lists the excess/deductible, the franchise, the fuel policy, and any preauthorisation amount.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The comparison is also useful for airport-to-town drivers who want to use the A20 from PMO, the A19 from Palermo, or the SS113 coastal road from Termini Imerese, Trabia, San Nicola l'Arena, Pollina, and Tusa. A route via the A20 can be quicker but may include a paper-ticket toll, while the A19 is free and often better for travellers who prefer predictable costs.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If an agency advertises zero excess or full coverage, verify whether the policy excludes windscreen, tyres, underbody, or roadside assistance, because a vessatory clause under Codice del Consumo art. 33 c.1 can make a one-sided exclusion hard to notice at checkout.</p></WarningBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Why local knowledge matters in Cefalù"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù is not just a beach stop; it is a compact historic town where parking rules, <a href="/driving-in-cefalu/" className="text-primary underline hover:text-accent">ZTL</a> access, and road gradients affect the rental experience. The Cefalù old town around Piazza Marina, Piazza Garibaldi, Piazza Duomo, and the Mandralisca museum is best explored on foot, while the Rocca di Cefalù and the coastal stretch on Lungomare Giuseppe Giardina are easier to access with a small car and a clear parking plan.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The site also points readers toward day trips in the Madonie, including Castelbuono, Petralia Soprana, Petralia Sottana, Polizzi Generosa, Geraci Siculo, Gangi, Caltavuturo, Sclafani Bagni, Collesano, and the Sant'Ambrogio frazione. For longer stays, it also helps travellers compare routes to the Aeolian Islands via Milazzo port when they plan a multi-modal Sicilian itinerary.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> If you want a day trip that combines mountain roads and village stops, a small SUV like a VW T-Cross or an Audi Q3 is usually more comfortable on the SP9 mountain road than a city microcar.</p></InfoBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Our approach to trust and compliance"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù-Car-Rental.com checks supplier details against publicly available business information, published rental terms, and consumer-protection rules so travellers can compare offers with fewer surprises. In Italy, AGCM guidance and Codice del Consumo art. 33 c.1 matter because non-transparent clauses can be challenged, while road rules under Codice della Strada art. 7, 135, 170, 171, 173, and 186 set practical limits for parking, licences, helmets, seat belts, phones, and alcohol.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">For local driving context, the Comune di Cefalù and the Polizia Municipale Cefalù, under Comandante Giuseppe Casalicchio, are the relevant authorities for parking enforcement and municipal road rules in the town area. The site also tracks policy language that can affect claims handling, such as insurance preauthorisation and the distinction between CDW, SCDW, and FDW.</p>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If you rent a scooter or motorcycle for coastal travel, check helmet, licence, and passenger rules under Codice della Strada art. 171 and 173 before booking, because fines can apply even when the vehicle itself is available.</p></WarningBox>
      </Section>

      <ImageDivider src="/3.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="What you can compare here"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù-Car-Rental.com helps visitors compare vehicle groups, insurance levels, pickup points, and supplier reputations in one place, using a format that is easier to scan than a standard booking engine. Typical options include a Fiat 500 or Lancia Ypsilon for couples, a Fiat Panda for budget trips, a Toyota Aygo for short urban hops, a Fiat 500 Cabrio for coastal drives, a Ford Transit Connect for families, and a Yamaha Xenter 125 for local mobility where two-wheel rental is permitted.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">The site also surfaces practical details such as whether a supplier offers a Zero Excess add-on, what the excess/deductible is, whether a credit-card preauthorisation is required, and whether pickup is available at PMO, Catania CTA, Trapani TPS, or Comiso CIY. If a supplier has a city office in Cefalù, the listing should show the address, opening hours, and any airport transfer fee.</p>
      </Section>

      
    </Layout>
  );
};

export default About;
