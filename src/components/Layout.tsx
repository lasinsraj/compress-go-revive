
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useToast } from "@/components/ui/use-toast";
import AdPlaceholder, { AdPlaceholderWide } from "@/components/shared/AdPlaceholder";

const Layout = () => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <div className="mt-6">
        <AdPlaceholder />
      </div>
      <div className="mt-4">
        <AdPlaceholderWide />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
