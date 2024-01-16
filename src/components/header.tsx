import ReactDOM from "react-dom/client";
import { useEffect, useRef } from "react";
import { CustomLink } from "./customLink";

function Header() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const navBarRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const cartListMenuRef = useRef<HTMLDivElement | null>(null);
  const itemsContainerRef = useRef<HTMLDivElement | null>(null);
  const priceRef = useRef<HTMLParagraphElement | null>(null);
  const cartButtonRef = useRef<HTMLButtonElement | null>(null);

  function responsiveness() {
    const screenWidth = window.innerWidth;
    const currentpage = window.location.pathname;
    if (screenWidth >= 768) {
      closeMenu();
      if (
        currentpage === "/history" ||
        currentpage === "/items" ||
        currentpage === "/shop"
      ) {
        headerRef.current?.classList.add("header-container-responsive");
      } else {
        headerRef.current?.classList.remove("header-container-responsive");
      }
    }
  }

  window.addEventListener("load", () => {
    responsiveness();
  });

  window.addEventListener("click", responsiveness);

  window.addEventListener("resize", responsiveness);

  function openMenu() {
    menuRef.current?.classList.add("header-container__navigation-menu-active");
    navBarRef.current?.classList.add(
      "header-container__mobile-responsive-active"
    );
  }

  function closeMenu() {
    menuRef.current?.classList.remove(
      "header-container__navigation-menu-active"
    );
    navBarRef.current?.classList.remove(
      "header-container__mobile-responsive-active"
    );
  }

  function openCartListMenu() {
    cartListMenuRef.current?.classList.add(
      "header-container__cart-list-menu-active"
    );
  }

  function closeCartListMenu() {
    cartListMenuRef.current?.classList.remove(
      "header-container__cart-list-menu-active"
    );
  }

  const loadInCartProducts = async () => {
    const minusFunc = (e: any) => {
      const itemID = e.target.parentElement?.parentElement?.parentElement?.id;
      if (Number(localStorage.getItem(String(itemID))) > 1) {
        localStorage.setItem(
          String(itemID),
          String(Number(localStorage.getItem(String(itemID))) - 1)
        );
      } else {
        localStorage.removeItem(String(itemID));
      }
      loadInCartProducts();
    };

    const plusFunc = (e: any) => {
      const itemID = e.target.parentElement?.parentElement?.parentElement?.id;
      localStorage.setItem(
        String(itemID),
        String(Number(localStorage.getItem(String(itemID))) + 1)
      );
      loadInCartProducts();
    };

    const removeFunc = (e: any) => {
      const itemID = e.target.parentElement?.parentElement?.id;
      localStorage.removeItem(String(itemID));
      loadInCartProducts();
    };

    try {
      const response = await fetch("/json/items.json");
      const data = await response.json();

      let totalPrice = 0;

      if (itemsContainerRef.current) {
        itemsContainerRef.current.innerHTML = "";
      }

      const items = [];
      for (let i = 0; i < data.Foxes.length; i++) {
        if (localStorage.getItem(data.Foxes[i].id)) {
          totalPrice +=
            Number(localStorage.getItem(data.Foxes[i].id)) *
            Number(data.Foxes[i].price.replace("$", ""));

          const newItem = (
            <div
              key={i}
              id={data.Foxes[i].id}
              className="header-container__cart-list-menu__menu__items__item grid grid-cols-2 gap-2"
            >
              <div className="header-container__cart-list-menu_menu__items__item__fox-info">
                <img src={data.Foxes[i].img} alt={data.Foxes[i].name} />
                <div className="header-container__cart-list-menu_menu__items__item__fox-info__text flex justify-between gap-2">
                  <h1 className="font-bold">{data.Foxes[i].name}</h1>
                  <p className="font-bold">{data.Foxes[i].price}</p>
                </div>
              </div>

              <div className="header-container__cart-list-menu_menu__items__item__control-menu flex flex-col items-center justify-center gap-6">
                <div className="header-container__cart-list-menu_menu__items__item__control-menu__controls flex gap-4">
                  <button
                    onClick={minusFunc}
                    className="header-container__cart-list-menu_menu__items__item__control-menu__controls__minus-btn"
                  >
                    <p className=" pointer-events-none">-</p>
                  </button>
                  <p className="header-container__cart-list-menu_menu__items__item__control-menu__controls__count flex items-center">
                    {localStorage.getItem(data.Foxes[i].id)}
                  </p>
                  <button
                    onClick={plusFunc}
                    className="header-container__cart-list-menu_menu__items__item__control-menu__controls__plus-btn"
                  >
                    <p className=" pointer-events-none">+</p>
                  </button>
                </div>

                <button
                  onClick={removeFunc}
                  className="header-container__cart-list-menu_menu__items__item__control-menu__remove flex gap-2"
                >
                  <p className=" pointer-events-none">Remove</p>
                  <img
                    className=" pointer-events-none"
                    src="/assets/header/close-in-circle.png"
                    alt="Close"
                  />
                </button>
              </div>
            </div>
          );
          items.push(newItem);
        }
      }

      const root = ReactDOM.createRoot(itemsContainerRef.current!);
      root.render(items);

      if (priceRef.current) {
        priceRef.current.textContent = `${totalPrice}$`;
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    cartButtonRef.current?.addEventListener("click", loadInCartProducts);
  }, []);

  window.addEventListener("resize", () => {
    responsiveness();
  });

  return (
    <header ref={headerRef} className="header-container">
      <div
        ref={navBarRef}
        className="header-container__mobile-responsive flex justify-between py-2 px-6"
      >
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
            ref={cartButtonRef}
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

      <div ref={cartListMenuRef} className="header-container__cart-list-menu">
        <div className="wrapper py-10 px-4">
          <div className="header-container__cart-list-menu__menu w-full flex flex-col items-center">
            <button className=" mb-10" onClick={closeCartListMenu}>
              <img src="/assets/header/close-gray.png" alt="" />
            </button>
            <h1 className="box">box</h1>
            <h2 className=" mb-10 font-serif text-4xl font-bold">Your Bag</h2>
            <div
              ref={itemsContainerRef}
              className="header-container__cart-list-menu__menu__items flex flex-col gap-8 mb-16"
            ></div>
          </div>

          <div className="header-container__cart-list-menu__checkout w-full flex flex-col items-center">
            <h1 className=" font-serif text-4xl font-bold">Total:</h1>
            <p
              ref={priceRef}
              className="price font-serif text-4xl font-bold mb-10"
            >
              400$
            </p>
            <button className=" text-lg">Checkout</button>
          </div>
        </div>
      </div>

      <nav
        ref={menuRef}
        className="header-container__navigation-menu absolute flex flex-col items-center text-center gap-6"
      >
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
