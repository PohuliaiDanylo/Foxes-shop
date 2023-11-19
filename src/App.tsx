import { Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";

import { Shop } from "./pages/shop";
import { Main } from "./pages/main";
import { History } from "./pages/history";
import { Items } from "./pages/items";
import { NotFound } from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="shop" element={<Shop />} />
          <Route path="history" element={<History />} />
          <Route path="items" element={<Items />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export { App };
