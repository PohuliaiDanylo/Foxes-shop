function Footer() {
  return (
    <footer className="footer-container w-screen flex flex-col p-8 gap-8">
      <div className="footer-container__about-us text-center flex flex-col items-center gap-3 font-light">
        <h1 className="footer-container__about-us__logo text-xl font-bold">
          foxmind<span>ed</span>
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur consectetur</p>
        <p>Call us : 8956 3254 7887</p>

        <ul className="footer-container__about-us__social-media flex gap-3">
          <li className="footer-container__about-us__social-media__link">
            <img src="/assets/footer/instagram.png" alt="" />
          </li>
          <li className="footer-container__about-us__social-media__link">
            <img src="/assets/footer/telegram.png" alt="" />
          </li>
          <li className="footer-container__about-us__social-media__link">
            <img src="/assets/footer/twitter.png" alt="" />
          </li>
        </ul>
      </div>

      <div className="footer-container__links grid grid-cols-2 gap-6 mx-auto">
        <div className="footer-container__links__link">
          <h1>Shop</h1>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-container__links__link">
          <h1>Products</h1>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-container__links__link">
          <h1>Collection</h1>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-container__links__link">
          <h1>Weekly updates</h1>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="footer-container__links__link">
          <h1>About us</h1>
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>

      <p className="footer-container__rights self-center text-sm font-bold">
        Storelogo, 2023 All rights reserved
      </p>
    </footer>
  );
}

export { Footer };
