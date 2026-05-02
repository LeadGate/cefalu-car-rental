import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Index from "./pages/Index";

const AirportPage = lazy(() => import("./pages/AirportPage"));
const DrivingGuide = lazy(() => import("./pages/DrivingGuide"));
const ParkingPage = lazy(() => import("./pages/ParkingPage"));
const DayTrips = lazy(() => import("./pages/DayTrips"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><div className="text-muted-foreground">Loading...</div></div>}>
      <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cefalu-airport-car-rental" element={<AirportPage />} />
            <Route path="/driving-in-cefalu" element={<DrivingGuide />} />
            <Route path="/parking-in-cefalu" element={<ParkingPage />} />
            <Route path="/day-trips-from-cefalu" element={<DayTrips />} />
            <Route path="/cefalu-car-rental-faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
