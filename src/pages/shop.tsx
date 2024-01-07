import { useState, useEffect } from "react";
import { CustomLink } from "../components/customLink";

function Shop() {
  document.addEventListener("click", (e) => {
    const targetElement = e.target as HTMLElement;

    if (
      targetElement?.classList.contains(
        "items__container__data__wrapper__data__item__add-button"
      )
    ) {
      addToCart(targetElement.parentElement);
    }
  });

  useEffect(() => {
    loadFoxData();
    btncontainer = document.querySelector(
      ".items__container__data__wrapper__properties__topic__buttons-container"
    );
    foxTypeButtons();
  }, []);

  const [price, setPrice] = useState(120);
  let btncontainer: HTMLUListElement | null = null;

  const addToCart = (el: any) => {
    if (localStorage.getItem(el.id) == null) {
      localStorage.setItem(el.id, "1");
    } else {
      localStorage.setItem(
        el.id,
        String(Number(localStorage.getItem(el.id)) + 1)
      );
    }
  };

  const handleChange = (event: any) => {
    loadFoxData();
    setPrice(event.target.value);
    const inputAfter = document.querySelector(
      ".items__container__data__wrapper__properties__price__input"
    ) as HTMLInputElement;
    inputAfter.style.setProperty(
      "--width-after",
      "calc(" + (event.target.value / event.target.max) * 100 + "%"
    );
  };

  const foxTypeButtons = () => {
    btncontainer?.addEventListener("click", (e) => {
      if (e.target != null && e.target instanceof HTMLButtonElement) {
        const buttons = document.querySelectorAll(
          ".items__container__data__wrapper__properties__topic__buttons-container button"
        );
        buttons.forEach((el) => {
          el.classList.remove("active");
        });
        e.target.classList.add("active");
      }
    });
  };

  const loadFoxData = async () => {
    const tohtmlfunc = (el: any) => {
      html += `
      <div class="items__container__data__wrapper__data__item relative" id="${el.id}">
        <img class=" w-full" src=${el.img}>
        <button class="items__container__data__wrapper__data__item__add-button absolute flex flex-col items-center justify-center">
          <img class="plus pointer-events-none" src="/assets/itemsPage/plus.png" alt="add button img">
          <p class="add font-thin pointer-events-none">Add</p>
        </button>
        <div class="items__container__data__wrapper__data__item__info flex justify-between items-center mt-2">
          <p class="name font-bold text-xl">${el.name}</p>
          <p class="price font-bold text-xl">${el.price}</p>
          <p class="stars">${el.stars} stars</p>
          <p class="location text-xl font-thin">${el.location}</p>
        </div>
      </div>
      `;
    };

    const container = document.querySelector(
      ".items__container__data__wrapper__data"
    );
    const topic = document.querySelector(
      ".items__container__data__wrapper__properties__topic__buttons-container button.active"
    )?.textContent;
    let html = "";
    const response = await fetch("/json/items.json");
    const data = await response.json();
    const value = Number(document.querySelector(".value span")?.textContent);

    for (let i = 0; i < data.Foxes.length; i++) {
      const el = data.Foxes[i];
      if (el.price.slice(1) <= value) {
        if (topic == "All") {
          tohtmlfunc(el);
        } else if (el.location == (topic == "Fox kids" ? "Foxkid" : topic)) {
          tohtmlfunc(el);
        }
      }
    }

    container?.innerHTML != null ? (container.innerHTML = "") : null;
    container?.insertAdjacentHTML("afterbegin", html);
  };

  return (
    <div className="items__container flex flex-col gap-4">
      <div className="items__container__title p-2 flex flex-col items-center justify-center gap-2">
        <h2 className=" text-sm">Home/Shop</h2>
        <h1 className=" text-5xl font-serif">Shop</h1>
      </div>

      <div className="items__container__data__wrapper m-2">
        <div className="items__container__data__wrapper__properties flex flex-col">
          <div className="items__container__data__wrapper__properties__search relative bg-fuchsia-300 flex justify-center mb-6 mt-0">
            <input
              className="w-full py-2 px-5 pr-20"
              type="text"
              placeholder="Search"
            />
            <button className="absolute h-full p-3 mr-5">
              <img
                className=" h-full"
                src="/assets/itemsPage/search.png"
                alt=""
              />
            </button>
          </div>

          <div className="items__container__data__wrapper__properties__topic">
            <h1>Topic</h1>
            <ul className="items__container__data__wrapper__properties__topic__buttons-container relative grid grid-cols-2 gap-2 mt-3 mb-6">
              <li>
                <button className="active" onClick={loadFoxData}>
                  All
                </button>
              </li>
              <li>
                <button onClick={loadFoxData}>Forest</button>
              </li>
              <li>
                <button onClick={loadFoxData}>Fox kids</button>
              </li>
              <li>
                <button onClick={loadFoxData}>Other</button>
              </li>
            </ul>
          </div>
          <div className="items__container__data__wrapper__properties__price flex flex-col">
            <h1>Price</h1>
            <input
              className="items__container__data__wrapper__properties__price__input mt-3"
              type="range"
              min="0"
              max="120"
              value={price}
              onChange={handleChange}
            />
            <p className="value mt-3 mb-6 self-center font-bold text-lg">
              Value: $<span>{price}</span>
            </p>
          </div>
        </div>

        <div className="items__container__data__wrapper__data flex flex-col gap-10 mb-10"></div>

        <CustomLink to={"/items"} className="w-full flex justify-center">
          <div className="items__container__data__wrapper__button py-4 text-center mb-2">
            All Foxes
          </div>
        </CustomLink>
      </div>
    </div>
  );
}

export { Shop };
