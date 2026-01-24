import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";

// Components
import Navbar from "./components/layout/Navbar";
import Index from "./pages/Index"; // דף הבית
// אנחנו ניצור את העמודים האלה תכף, בינתיים הם יטענו את התוכן הקיים
import ProductsSection from "./components/ProductsSection"; 
import SolutionsSection from "./components/SolutionsSection";
import PhilosophySection from "./components/PhilosophySection";

const queryClient = new QueryClient();

// רכיב שגולל למעלה בכל מעבר עמוד
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// מעטפת קבועה (Header + Footer)
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
    <Navbar />
    <main className="flex-grow pt-20"> {/* pt-20 כדי לפצות על ההדר הקבוע */}
      {children}
    </main>
    {/* כאן יבוא הפוטר בעתיד */}
    <footer className="bg-[#1B365D] text-white py-12 text-center text-sm opacity-80">
      © 2024 StepAhead - Network Leadership Platform
    </footer>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              
              {/* דפים חדשים - כרגע נשתמש בקומפוננטות הקיימות כדפים */}
              <Route path="/platform" element={<ProductsSection />} />
              <Route path="/solutions" element={<SolutionsSection />} />
              <Route path="/about" element={<PhilosophySection />} />
              
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;