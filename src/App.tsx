
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GreatPatrioticWar from "./pages/GreatPatrioticWar";
import DonbassSVO from "./pages/DonbassSVO";
import Euromaidan from "./pages/Euromaidan";
import Crimea from "./pages/Crimea";
import Heroes from "./pages/Heroes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/great-patriotic-war" element={<GreatPatrioticWar />} />
          <Route path="/donbass-svo" element={<DonbassSVO />} />
          <Route path="/euromaidan" element={<Euromaidan />} />
          <Route path="/crimea" element={<Crimea />} />
          <Route path="/heroes" element={<Heroes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
