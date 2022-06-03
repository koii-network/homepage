import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SubscribeBar } from "@/components/subscribe/subscribe-bar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <SubscribeBar />
    </>
  );
};

export default Layout;
