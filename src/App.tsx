import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop"; // <--- ייבוא הרכיב החדש
import Index from "./pages/Index";
import Platform from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Leadership from "./pages/Leadership";
import Assessment from "./pages/Assessment";
import Methodology from "./pages/Methodology";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieBanner from "./components/CookieBanner";

ReactGA.initialize("G-CQX9JVSDVY");

const queryClient = new QueryClient();

/** Must render inside `<BrowserRouter>` so `useLocation` works. */
function AppRoutes() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <>
      <ScrollToTop /> {/* <--- כאן הקסם קורה: זה מאפס את הגלילה בכל מעבר דף */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/network-development" element={<Platform />} />
            <Route path="/platform" element={<Navigate to="/network-development" replace />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/network-leadership" element={<Leadership />} />
            <Route path="/academy" element={<Navigate to="/network-leadership" replace />} />
            <Route path="/talent-assessment" element={<Assessment />} />
            <Route path="/assessment" element={<Navigate to="/talent-assessment" replace />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </div>
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
