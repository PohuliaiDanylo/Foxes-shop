import { useEffect } from "react";
import { CustomLink } from "./customLink";

let header: HTMLElement | null = null;

function responsiveness() {
  const screenWidth = window.innerWidth;
  const currentpage = window.location.pathname;
  if (
    screenWidth >= 768 &&
    (currentpage === "/history" ||
      currentpage === "/items" ||
      currentpage === "/shop")
  ) {
    header?.classList.add("header-container-responsive");
  } else {
    header?.classList.remove("header-container-responsive");
  }
}

window.addEventListener("load", () => {
  header = document.querySelector(".header-container");
  responsiveness();
});

window.addEventListener("click", responsiveness);

window.addEventListener("resize", responsiveness);

function Header() {
  function resposiveness() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
      closeMenu();
    }
  }

  function getNavGetMenu() {
    const navBar = document.querySelector(
      ".header-container__mobile-responsive"
    );
    const menu = document.querySelector(".header-container__navigation-menu");
    return { navBar, menu };
  }

  function openMenu() {
    const { navBar, menu } = getNavGetMenu();
    menu?.classList.add("header-container__navigation-menu-active");
    navBar?.classList.add("header-container__mobile-responsive-active");
  }

  function closeMenu() {
    const { navBar, menu } = getNavGetMenu();
    menu?.classList.remove("header-container__navigation-menu-active");
    navBar?.classList.remove("header-container__mobile-responsive-active");
  }

  function openCartListMenu() {
    const cartListMenu = document.querySelector(
      ".header-container__cart-list-menu"
    );
    cartListMenu?.classList.add("header-container__cart-list-menu-active");
  }

  function closeCartListMenu() {
    const cartListMenu = document.querySelector(
      ".header-container__cart-list-menu"
    );
    cartListMenu?.classList.remove("header-container__cart-list-menu-active");
  }

  const loadInCartProducts = async () => {
    try {
      const response = await fetch("/json/items.json");
      const data = await response.json();

      const itemsContainer = document.querySelector(
        ".header-container__cart-list-menu__menu__items"
      );
      if (itemsContainer) {
        itemsContainer.innerHTML = "";
      }
      for (let i = 0; i < data.Foxes.length; i++) {
        if (localStorage.getItem(data.Foxes[i].id)) {
          itemsContainer?.insertAdjacentHTML(
            "beforeend",
            `
            <div class="header-container__cart-list-menu__menu__items__item grid grid-cols-2 gap-2">
              <div class="header-container__cart-list-menu_menu__items__item__fox-info">
                <img src="${data.Foxes[i].img}"></img>
                <div class="header-container__cart-list-menu_menu__items__item__fox-info__text flex justify-between gap-2">
                  <h1 class=" font-bold">${data.Foxes[i].name}</h1>
                  <p class=" font-bold">${data.Foxes[i].price}</p>
                </div>
              </div>

              <div class="header-container__cart-list-menu_menu__items__item__control-menu flex flex-col items-center justify-center gap-6">
                <div class="header-container__cart-list-menu_menu__items__item__control-menu__controls flex gap-4">
                  <button class="header-container__cart-list-menu_menu__items__item__control-menu__controls__minus-btn"><p>-</p></button>
                  <p class="header-container__cart-list-menu_menu__items__item__control-menu__controls__count flex items-center">${localStorage.getItem(
                    data.Foxes[i].id
                  )}</p>
                  <button class="header-container__cart-list-menu_menu__items__item__control-menu__controls__plus-btn"><p>+</p></button>
                </div>
                
                <button class="header-container__cart-list-menu_menu__items__item__control-menu__remove flex gap-2">
                  <p>Remove</p>
                  <img src="/assets/header/close-in-circle.png"></img>
                </button>
              </div>
            </div>`
          );
        }
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    const cartButton = document.querySelector(".header-container__cart-button");
    cartButton?.addEventListener("click", loadInCartProducts);
  }, []);

  window.addEventListener("resize", () => {
    resposiveness();
  });

  return (
    <header className="header-container">
      <div className="header-container__mobile-responsive flex justify-between py-2 px-6">
        <button
          className="header-container__button header-container__menu-button"
          onClick={openMenu}
        >
          <img src="/assets/header/dots.png" alt="open menu" />
        </button>
        <h1 className="header-container__mobile-responsive__company-name header-container__company-name text-xl font-bold absolute left-1/2">
          foxmind<span>ed</span>
        </h1>
        <div className="header-container__cart-and-fox-buttons flex gap-2">
          <button
            className="header-container__button header-container__cart-button w-7"
            onClick={openCartListMenu}
          >
            <img src="/assets/header/cart.png" alt="shoping cart" />
          </button>
          <CustomLink to={"/"}>
            <button className="header-container__button header-container__fox-button w-7">
              <img src="/assets/header/fox.png" alt="mainpage button" />
            </button>
          </CustomLink>
        </div>
      </div>

      <div className="header-container__cart-list-menu">
        <div className="wrapper py-10 px-4">
          <div className="header-container__cart-list-menu__menu w-full flex flex-col items-center">
            <button className=" mb-10" onClick={closeCartListMenu}>
              <img src="/assets/header/close-gray.png" alt="" />
            </button>
            <h1 className="box">box</h1>
            <h2 className=" mb-10 font-serif text-4xl font-bold">Your Bag</h2>
            <div className="header-container__cart-list-menu__menu__items flex flex-col gap-8 mb-16"></div>
          </div>

          <div className="header-container__cart-list-menu__checkout w-full flex flex-col items-center">
            <h1 className=" font-serif text-4xl font-bold">Total:</h1>
            <p className="price font-serif text-4xl font-bold mb-10">400$</p>
            <button className=" text-lg">Checkout</button>
          </div>
        </div>
      </div>

      <nav className="header-container__navigation-menu absolute flex flex-col items-center text-center gap-6">
        <h1 className="header-container__company-name text-xl font-bold">
          foxmind<span>ed</span>
        </h1>
        <ul className="header-container__navigation-menu__list">
          <li className="header-container__navigation-menu__list__element">
            <CustomLink to="/shop">Shop</CustomLink>
          </li>
          <li className="header-container__navigation-menu__list__element">
            <CustomLink to="/">MainPage</CustomLink>
          </li>
          <li className="header-container__navigation-menu__list__element">
            <CustomLink to="/history">Our History</CustomLink>
          </li>
          <li className="header-container__navigation-menu__list__element">
            <CustomLink to="/items">All Items</CustomLink>
          </li>
        </ul>
        <button
          className="header-container__navigation-menu__close-button header-container__button"
          onClick={closeMenu}
        >
          <img
            className="w-4"
            src="/assets/header/close.png"
            alt="close navigation menu"
          />
        </button>
      </nav>
    </header>
  );
}

export { Header };
