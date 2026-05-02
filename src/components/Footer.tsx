import { Link } from "react-router-dom";

const footerLinks = [
  { label: "PMO Pickup", path: "/cefalu-airport-car-rental" },
  { label: "ZTL & Driving", path: "/driving-in-cefalu" },
  { label: "Parking", path: "/parking-in-cefalu" },
  { label: "Day Trips", path: "/day-trips-from-cefalu" },
  { label: "FAQ", path: "/cefalu-car-rental-faq" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "About", path: "/about" },
];

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container-wide py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="text-lg font-bold text-primary-foreground">
            Cefalu Car Rental
          </Link>
          <p className="mt-3 text-primary-foreground/70 text-sm">
            Compare car rental deals and find the best rate for your trip.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <a
            href="mailto:info@cefalu-car-rental.com"
            className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
          >
            info@cefalu-car-rental.com
          </a>
          <h3 className="font-semibold mb-3 mt-6">Useful Resources</h3>
          <ul className="space-y-2">
                        <li>
              <a href="https://comune.cefalu.pa.it/argomento/ztl/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Visit Cefalù (Comune)
              </a>
            </li>
            <li>
              <a href="https://www.visitsicily.info/en/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Visit Sicily (official)
              </a>
            </li>
            <li>
              <a href="https://www.aci.it/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                ACI Soccorso Stradale (803.116)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-primary-foreground/60">
        <p className="text-sm mb-2">
          This site contains affiliate links. We may earn a commission when you book through our partners at no extra cost to you.
        </p>
        <p className="text-muted-foreground mb-2" style={{ fontSize: '12px' }}>
          Last updated: May 2026
        </p>
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <span>&copy; {new Date().getFullYear()} cefalu-car-rental.com</span>
          <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
