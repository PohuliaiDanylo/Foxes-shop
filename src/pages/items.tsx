import { useState, useEffect } from "react";

interface Item {
  id: string;
  img: string;
}

function Items() {
  const [items, setItems] = useState<Item[]>([]);

  const loadFoxData = async () => {
    try {
      const response = await fetch("/json/items.json");
      const data = await response.json();
      return data.Foxes;
    } catch (error) {
      console.error("Error loading items data:", error);
    }
  };

  useEffect(() => {
    loadFoxData().then((data) => setItems(data));
  }, []);

  return (
    <div className="shop__container flex flex-col gap-6 mb-6">
      <div className="shop__container__title p-2 flex flex-col items-center justify-center gap-2">
        <h2 className="text-sm">Home/All Items</h2>
        <h1 className="text-5xl font-serif">All Items</h1>
      </div>
      <div className="shop__container__data flex flex-col w-full gap-4 px-4">
        {items.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt=""
            className="shop__container__data__item w-full"
          />
        ))}
      </div>
    </div>
  );
}

export { Items };
