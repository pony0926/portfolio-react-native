import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import { useLoading } from "./hooks/useLoading";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = useLoading(3000); // 3 second loading time

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full font-sans relative">
      {/* Clean Professional Background */}
      <div className="fixed inset-0 z-0 professional-bg"></div>
      <div className="relative z-10">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* <Route path="/blog" element={<BlogList />} /> */}
            {/* <Route path="/blog/:id" element={<BlogPost />} /> */}
            {/* <Route path="/micro-projects" element={<MicroProjects />} /> */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
