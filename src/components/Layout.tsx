import { Header } from "./header";
import { Footer } from "./footer";

function Layout() {
  return (
    <div className="wrapper h-screen bg-fuchsia-400">
      <Header />
      <Footer />
    </div>
  );
}

export { Layout };
