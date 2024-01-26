import Header from "@/layout.tsx/Header";
import Home from "@/pages";
import Footer from "./Footer ";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
