import Layout from "@/components/Layout";
import AffiliateWidget from "@/components/AffiliateWidget";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import ImageDivider from "@/components/ImageDivider";
import DataTable from "@/components/DataTable";
import { InfoBox, WarningBox } from "@/components/InfoBox";
import CompanyCard from "@/components/CompanyCard";
import { Car, Plane, Shield } from "lucide-react";

const AirportPage = () => {
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
        "name": "Airport",
        "item": "https://cefalu-car-rental.com/cefalu-airport-car-rental/"
      }
    ]
  };

  const articleSchema =
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Your Step-by-Step Guide: Palermo Airport Car Rental & the Drive to Cefalù",
    "description": "Landing at Palermo Airport PMO — Falcone-Borsellino Airport, also called **Punta Raisi** — and driving directly to Cefalù is the fastest way to start a",
    "url": "https://cefalu-car-rental.com/cefalu-airport-car-rental",
    "datePublished": "2026-05-02",
    "dateModified": "2026-05-02",
    "publisher": {
      "@type": "Organization",
      "name": "Cefalu Car Rental",
      "url": "https://cefalu-car-rental.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cefalu-car-rental.com/favicon-512.png"
      }
    },
    "mainEntityOfPage": "https://cefalu-car-rental.com/cefalu-airport-car-rental",
    "inLanguage": "en"
  };

  return (
    <Layout>
      <SEOHead
        title="PMO Airport Pickup to Cefalù | Cefalù Car Rental"
        description="Landing at Palermo Airport PMO — Falcone-Borsellino Airport, also called Punta Raisi — and driving directly to Cefalù is the fastest way to start a"
        canonical="https://cefalu-car-rental.com/cefalu-airport-car-rental/"
      />

      <Breadcrumbs items={[{ label: "Airport" }]} />

      <HeroSection
        title="Your Step-by-Step Guide: Palermo Airport Car Rental & the Drive to Cefalù"
        subtitle={<><p>Landing at Palermo Airport PMO — Falcone-Borsellino Airport, also called <strong>Punta Raisi</strong> — and driving directly to Cefalù is the fastest way to start a Sicilian trip, with the A20 Buonfornello–Messina motorway usually taking about 60–70 minutes in normal traffic.</p></>}
        image="/3.webp"
        imageAlt="Car rental in Cefalu"
        ctaText="Compare Car Rental Deals"
        ctaHref="#compare-cars"
      />
    <AffiliateWidget />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="Finding the Car Rental Desks at Palermo Airport (PMO)"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Palermo Airport PMO has two pickup patterns: in-terminal desks in the Arrivals Hall or off-site depots using a shuttle from the terminal.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">In-Terminal Rental Desks</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Most major operators — such as Hertz Italiana, Avis Budget Italia, Europcar, Locauto, Maggiore, and Drivalia — keep desks inside the Arrivals Hall at PMO, while local brands such as Bringo, Safe Car Rental Cefalù, Karym Rent, Kefatur, Sc Rental Car, NGA Cefalù, and Rent Me Now! may use nearby depots or a counter-service model.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>After passport control and baggage claim, enter the Arrivals Hall at PMO.</li>
            <li>Follow the overhead signs for *Autonoleggio / Car Rental* toward the rental desk cluster.</li>
            <li>Expect the rental desks to sit in one dedicated area, with the parking bays a 2–5 minute walk from the terminal.</li>
            <li>If you are collecting a Drivalia vehicle, the kiosk is typically on Arrival Hall Level 0 at PMO; the usual switchboard number is +39 091 6511393.</li>
          </ul>
          <InfoBox><p>💡 <strong>Tip:</strong> If you are comparing airport pickup versus city pickup, Auto Europe as a broker can show PMO, Cefalù town, and Madonie options side by side, which helps when you want a Fiat Panda or Fiat 500 rather than a larger MPV.</p></InfoBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Off-Site Rental Shuttles</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Some budget operators — including Goldcar at PMO, Centauro, Green Motion, Noleggiare, Smile Rent, Joyrent, Italy Car Rent, and Stress Free Car Rental — may ask you to use a shuttle after landing.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Exit the Arrivals terminal and look for the “Navetta Autonoleggio” signs.</li>
            <li>Walk to the designated pickup point just outside the terminal, often on the right-hand side after exit.</li>
            <li>Expect a shuttle interval of about 10–15 minutes for most depot-based suppliers.</li>
            <li>Plan 5 minutes for the transfer, then another 5–10 minutes for check-in and key handover at the depot.</li>
          </ul>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If your voucher says “off-airport”, the counter may be at Carini PA, not inside PMO, and the rental agreement can include a vessatory clause under Codice del Consumo art. 33 c.1 if the damage policy or fuel rule is unclear.</p></WarningBox>
      </Section>

      <Section
        icon={<Car className="w-6 h-6" />}
        title="The Pickup Process: What to Expect at the Counter"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">A fast pickup at PMO depends on documents, the deposit preauthorisation, and a clear acceptance or rejection of add-on coverage, especially if you plan to drive toward the A20 or A19 later in the trip.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Required Documents</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Have these items ready for the lead driver before the contract is printed or signed.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Driving licence:</strong> A valid licence from your country of residence, with the Roman alphabet if possible.</li>
            <li><strong>Passport or ID:</strong> A valid passport or national identity card.</li>
            <li><strong>Credit card:</strong> A physical card in the lead driver’s name for the security deposit preauthorisation.</li>
            <li><strong>Booking voucher:</strong> A printed or digital confirmation matching the driver name and dates.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-3">Insurance and Extras</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">At the counter, the agent may offer CDW, SCDW, FDW, or a zero excess package to reduce the excess/deductible on the rental contract.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Ask for the exact amount of the excess/franchise in euros before you sign, because a compact like a Fiat Panda, Toyota Aygo, Fiat 500, or Lancia Ypsilon can still carry a €900–€2,000 deductible even on a short rental.</p></InfoBox>
          <p className="text-gray-700 mb-4 leading-relaxed">If you want full coverage, request the final wording in writing and confirm whether windscreen, tyres, underbody, and roof damage are included.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Vehicle Inspection</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Before you leave the parking bay, inspect the vehicle and record any damage with photos or video.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Exterior check:</strong> Walk around the car and inspect scratches, dents, wheel rims, mirrors, and bumpers.</li>
            <li><strong>Interior check:</strong> Confirm the cabin is clean, the fuel level matches the contract, and the warning lights are off.</li>
            <li><strong>Damage record:</strong> Photograph every pre-existing mark and ensure the rental agent signs or timestamps the form.</li>
          </ul>
          <WarningBox><p>⚠️ <strong>Warning:</strong> If you accept the car without a signed damage sheet, later claims can become harder to challenge under AGCM consumer-practice guidance, especially when the contract relies on broad exclusions or a hidden franchise clause.</p></WarningBox>
      </Section>

      <ImageDivider src="/2.webp" alt="Cefalu car rental" />

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="The Drive from Palermo Airport (PMO) to Cefalù"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">The Palermo Airport to Cefalù drive is direct, with the E90 feeding into the A20 and then the SS113 coastal road or local exits depending on your hotel and parking plan.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Route Overview and Motorway Choice</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Leave PMO following signs for Palermo and Autostrada, then merge onto the E90 ring road.</li>
            <li>Continue past Palermo on the Palermo–Catania A19 if your plan includes inland Madonie stops, because the A19 is ANAS-operated and toll-free.</li>
            <li>For a direct sea-coast transfer, stay on the route toward Messina and join the A20 Buonfornello–Messina, which is CAS-operated and uses a paper-ticket toll system.</li>
          </ul>
          <p className="text-gray-700 mb-4 leading-relaxed">If you are arriving from Catania CTA, Trapani TPS, or Comiso CIY, the road choice changes, but PMO still gives the shortest airport-to-Cefalù transfer for most travellers.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">Navigating the A20 Toll System</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The A20 is a toll motorway, and the process is based on a ticket at entry and payment at exit.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Entering:</strong> At the Buonfornello gate, avoid the Telepass lane, stop at a lane marked with the hand-and-ticket symbol, press the red button, and take the paper ticket.</li>
            <li><strong>Exiting:</strong> At the Cefalù exit, follow the slip road to the toll booth and hand over the ticket or insert it into the machine.</li>
            <li><strong>Paying:</strong> The toll is usually about €1.20 for the short Cefalù stretch, and you can pay by cash or card.</li>
          </ul>
          <InfoBox><p>💡 <strong>Tip:</strong> Keep the A20 ticket with your passport and rental voucher, because a lost ticket can trigger a maximum-charge calculation at the booth.</p></InfoBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Exiting for Cefalù</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">After the toll booth, follow signs toward Cefalù town centre, the sea, and the “lungomare”; most drivers reach Piazza Garibaldi or the seafront first, then continue on foot into the old town.</p>
      </Section>

      <Section
        icon={<Shield className="w-6 h-6" />}
        title="Essential Driving and Parking Tips for Cefalù"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Once you are in Cefalù, the rental car becomes useful for hotel access, beach transfers, and day trips to Madonie National Park, Castelbuono, Pollina, Tusa, or the Aeolian Islands ferry point at Milazzo port.</p>
          <h3 className="text-xl font-bold mt-6 mb-3">The ZTL and Local Traffic Rules</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">The Cefalù historic centre has a ZTL, and the Comune di Cefalù and Polizia Municipale Cefalù enforce access rules with fines and camera checks.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Do not enter the ZTL:</strong> Unauthorized entry can create an automatic penalty that the rental company may pass on with a handling fee.</li>
            <li><strong>Read the signs carefully:</strong> ZTL signs use a red-bordered circle and may show whether the zone is active or inactive.</li>
            <li><strong>Know the legal basis:</strong> Restrictions are tied to Codice della Strada art. 7, and daytime traffic controls can interact with art. 135 notice procedures and art. 173 phone-use rules if you are stopped locally.</li>
          </ul>
          <h3 className="text-xl font-bold mt-6 mb-3">Parking Your Car</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">Park outside the ZTL and walk into Cefalù old town along Corso Ruggero, Via Vittorio Emanuele, Piazza Duomo, or the lanes around the UNESCO-listed Cefalù Cathedral.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li><strong>Blue lines:</strong> Paid parking on the seafront and near the town approach roads.</li>
            <li><strong>White lines:</strong> Usually free, but limited and often full in high season.</li>
            <li><strong>Yellow lines:</strong> Residents only, so do not use them.</li>
          </ul>
          <InfoBox><p>💡 <strong>Tip:</strong> If you want the simplest parking plan, leave the car near the <a href="/parking-in-cefalu/" className="text-primary underline hover:text-accent">Lungomare</a> Giuseppe Giardina or Piazza Marina, then walk to the Mandralisca museum, the Rocca di Cefalù trail, and the old town core.</p></InfoBox>
          <WarningBox><p>⚠️ <strong>Warning:</strong> Parking enforcement can apply Codice della Strada art. 170, 171, and 186 sanctions for unsafe riding, seat-belt issues, or drink-driving, so keep the car parked if you plan to explore the centre on foot or by Yamaha Xenter 125 scooter rental.</p></WarningBox>
          <h3 className="text-xl font-bold mt-6 mb-3">Suggested Vehicle Choices for Cefalù and the Madonie</h3>
          <DataTable headers={["Use case", "Model", "Best for"]} rows={[["City parking and short trips", "Fiat Panda, Fiat 500, Toyota Aygo, Lancia Ypsilon", "Tight streets, lower rental cost, easier parking"], ["Beach and family comfort", "Fiat 500 Cabrio, VW T-Cross, Audi Q3, Peugeot SW", "Seafront drives, luggage space, better comfort"], ["Group travel", "Renault Trafic, Ford Transit Connect", "Families or small groups heading to Madonie or the airport"], ["Two-wheeler access", "Yamaha Xenter 125", "Short urban hops where parking is the main concern"]]} />
          <p className="text-gray-700 mb-4 leading-relaxed">For day trips, the SP9 mountain road is useful for Madonie villages such as Petralia Soprana, Petralia Sottana, Polizzi Generosa, Geraci Siculo, Gangi, Caltavuturo, Sclafani Bagni, Collesano, and the higher routes toward Madonie National Park.</p>
      </Section>

      <ImageDivider src="/3.webp" alt="Cefalu car rental" />

      <Section
        icon={<Car className="w-6 h-6" />}
        title="Local Rental Options and Contact Points"
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù has a compact local rental market, and several operators can be useful if you prefer town collection over PMO pickup.</p>
          <CompanyCard><p><strong>Safe Car Rental Cefalù:</strong> Cortile O 1, with contacts +39 380 787 1992, +39 345 820 1316, and booking@screntalcar.com, is positioned for old-town access and short-stay handovers.</p></CompanyCard>
          <CompanyCard><p><strong>AFFITTULA:</strong> Via Roma 109, with phone +39 0921 820124, is convenient for travellers staying near Corso Ruggero or Piazza Duomo.</p></CompanyCard>
          <CompanyCard><p><strong>Rent Me Now! (G.F.C. Noleggio):</strong> Via Giubileo Magno 15, phone +39 388 775 5781, is a practical option for visitors arriving from Termini Imerese, Trabia, San Nicola l'Arena, or Palermo.</p></CompanyCard>
          <CompanyCard><p><strong>Bringo:</strong> P.IVA 07307610829, based in Carini PA, is a regional operator that may suit travellers comparing airport and town-based pickup points.</p></CompanyCard>
          <CompanyCard><p><strong>MyGuideSicily:</strong> A useful planning partner for mixed transport itineraries, especially if your day plan combines Cefalù with the Madonie or a return to PMO.</p></CompanyCard>
      </Section>

      <Section
        icon={<Plane className="w-6 h-6" />}
        title="When Cefalù Airport Car Rental Makes Sense"
        alt
      >
          <p className="text-gray-700 mb-4 leading-relaxed">Cefalù airport car rental makes the most sense when you want to combine the historic centre, the beach, and inland day trips without relying on trains or buses.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">A rental car is especially useful if your trip includes the Madonie, Castelbuono, the coastal stretch toward Tusa and Pollina, or ferry connections for the Aeolian Islands via Milazzo port.</p>
          <p className="text-gray-700 mb-4 leading-relaxed">If you are staying only in Cefalù old town, walking may be enough, but a car helps when your hotel is outside the centre, your flight arrives late at PMO, or you want to move between the SS113 coastal road and mountain villages on the same day.</p>
          <InfoBox><p>💡 <strong>Tip:</strong> Compare pickup at PMO, a town office near Piazza Marina or Via Vittorio Emanuele, and a broker quote from Auto Europe before booking, because the cheapest daily rate is not always the lowest total once deposit, tolls, and parking are included.</p></InfoBox>
      </Section>
      <div className="flex justify-center py-16 mt-8">
        <a href="/#compare" className="cta-button">Compare Car Rental Deals</a>
      </div>
    </Layout>
  );
};

export default AirportPage;
