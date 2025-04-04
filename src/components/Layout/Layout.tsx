
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen relative">
        {/* Background overlay */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('https://image.tmdb.org/t/p/original/lMWKrlqOIVUzwUCWiXDshEYhscg.jpg')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
