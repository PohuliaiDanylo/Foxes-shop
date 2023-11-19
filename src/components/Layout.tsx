import { Header } from "./header";
import { Footer } from "./footer";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export { Layout };
