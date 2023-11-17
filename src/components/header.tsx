function Header() {
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

  return (
    <header className="header-container">
      <div className="header-container__mobile-responsive flex justify-between py-2 px-6">
        <button
          className="header-container__button header-container__menu-button"
          onClick={openMenu}
        >
          <img src="../../src/assets/header/dots.png" alt="open menu" />
        </button>
        <h1 className="header-container__company-name text-xl font-bold">
          foxmind<span>ed</span>
        </h1>
        <div className="header-container__cart-and-fox-buttons flex gap-2">
          <button className="header-container__button header-container__cart-button">
            <img src="../../src/assets/header/cart.png" alt="shoping cart" />
          </button>
          <button className="header-container__button header-container__fox-button">
            <img src="../../src/assets/header/fox.png" alt="mainpage button" />
          </button>
        </div>
      </div>

      <nav className="header-container__navigation-menu absolute flex flex-col items-center text-center gap-6">
        <h1 className="header-container__company-name text-xl font-bold">
          foxmind<span>ed</span>
        </h1>
        <ul className="header-container__navigation-menu__list">
          <li className="header-container__navigation-menu__list__element">
            Shop
          </li>
          <li className="header-container__navigation-menu__list__element">
            MainPage
          </li>
          <li className="header-container__navigation-menu__list__element">
            Our History
          </li>
          <li className="header-container__navigation-menu__list__element">
            All Items
          </li>
        </ul>
        <button
          className="header-container__navigation-menu__close-button header-container__button"
          onClick={closeMenu}
        >
          <img
            className="w-4"
            src="../../src/assets/header/close.png"
            alt="close navigation menu"
          />
        </button>
      </nav>
    </header>
  );
}

export { Header };
