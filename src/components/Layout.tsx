
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useToast } from "@/components/ui/use-toast";

const Layout = () => {
  const { toast } = useToast();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <div className="mt-6">
        {/* AdSense placeholder */}
        <div className="bg-gray-100 p-3 text-center text-sm text-gray-500">
          Advertisement
          <div className="h-20 bg-gray-200 flex items-center justify-center">
            Google AdSense (Add your AdSense code here)
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
