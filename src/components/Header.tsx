import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "PMO Pickup", path: "/cefalu-airport-car-rental" },
  { label: "ZTL & Driving", path: "/driving-in-cefalu" },
  { label: "Parking", path: "/parking-in-cefalu" },
  { label: "Day Trips", path: "/day-trips-from-cefalu" },
  { label: "FAQ", path: "/cefalu-car-rental-faq" },
  { label: "Contact", path: "/contact" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          Cefalu Car Rental
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-secondary ${
                  location.pathname === item.path
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background">
          <ul className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors hover:bg-secondary ${
                    location.pathname === item.path
                      ? "text-primary bg-secondary"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
