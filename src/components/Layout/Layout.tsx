
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
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
