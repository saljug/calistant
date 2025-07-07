import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import HowWeCalculate from "./pages/HowWeCalculate";
import About from "./pages/About";
import Team from "./pages/Team";
import Features from "./pages/Features";
import PressKit from "./pages/PressKit";
import HelpCenter from "./pages/HelpCenter";
import CookieNotice from "./pages/CookieNotice";
import HealthDisclaimer from "./pages/HealthDisclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/how-we-calculate" element={<HowWeCalculate />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/features" element={<Features />} />
          <Route path="/press-kit" element={<PressKit />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/cookie-notice" element={<CookieNotice />} />
          <Route path="/health-disclaimer" element={<HealthDisclaimer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
