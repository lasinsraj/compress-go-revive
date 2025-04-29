
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompressPDF from "./pages/CompressPDF";
import CompressImage from "./pages/CompressImage";
import CompressVideo from "./pages/CompressVideo";
import CompressPNG from "./pages/CompressPNG";
import CompressJPG from "./pages/CompressJPG";
import CreateZip from "./pages/CreateZip";
import CreateZipFile from "./pages/CreateZipFile";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="compress-pdf" element={<CompressPDF />} />
            <Route path="compress-image" element={<CompressImage />} />
            <Route path="compress-video" element={<CompressVideo />} />
            <Route path="compress-png" element={<CompressPNG />} />
            <Route path="compress-jpg" element={<CompressJPG />} />
            <Route path="create-zip" element={<CreateZip />} />
            <Route path="create-zip-file" element={<CreateZipFile />} />
            <Route path="about" element={<About />} />
            <Route path="privacy-policy" element={<Privacy />} />
            <Route path="terms-of-service" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
