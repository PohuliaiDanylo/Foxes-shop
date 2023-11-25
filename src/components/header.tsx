import { CustomLink } from "./customLink";

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
          <button className="header-container__button header-container__cart-button w-7">
            <img src="/assets/header/cart.png" alt="shoping cart" />
          </button>
          <button className="header-container__button header-container__fox-button w-7">
            <img src="/assets/header/fox.png" alt="mainpage button" />
          </button>
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
