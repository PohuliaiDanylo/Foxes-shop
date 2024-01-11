import { CustomLink } from "../components/customLink";

function Main() {
  return (
    <div className="main__container">
      <div className="main__container__discover">
        <img
          className="main__container__discover__img"
          src="/assets/mainPage/background.png"
          alt=""
        />
        <div className="main__container__discover__text">
          <h1 className="font-serif text-4xl font-bold">Discover foxlife</h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur. Phar eget turpis sem
            ultricies dolor sit amet consectetur.
          </p>
        </div>
      </div>

      <div className="main__container__foods">
        <div className="main__container__foods__food">
          <div className="main__container__foods__food__text">
            <h1>#Food</h1>
            <p>Lorem ipsum dolor sit amet ipsum</p>
          </div>
          <img
            className="main__container__foods__food__img"
            src="/assets/mainPage/img1.png"
            alt=""
          />
        </div>

        <div className="main__container__foods__food">
          <div className="main__container__foods__food__text">
            <h1>#Food</h1>
            <p>Lorem ipsum dolor sit amet ipsum</p>
          </div>
          <img
            className="main__container__foods__food__img"
            src="/assets/mainPage/img3.png"
            alt=""
          />
        </div>

        <div className="main__container__foods__food">
          <div className="main__container__foods__food__text">
            <h1>#Food</h1>
            <p>Lorem ipsum dolor sit amet ipsum</p>
          </div>
          <img
            className="main__container__foods__food__img"
            src="/assets/mainPage/img2.png"
            alt=""
          />
        </div>
      </div>

      <CustomLink to="/items">
        <div className="main__container__all-foxes-button">All foxes</div>
      </CustomLink>

      <div className="main__container__subscribe flex flex-col items-center p-5 gap-3 pb-3 mb-8">
        <h1 className="text-xl font-bold font-mono">Join our newsletter</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur. Molestie turpis quis turpis
          fermentum egestas bibendum.Lorem ipsum dolor sit amet consectetur.{" "}
        </p>
        <div className="main__container__subscribe__input">
          <form className="flex flex-col gap-3" action="">
            <input
              className="text-xl"
              type="email"
              placeholder="Enter email"
              required
            />
            <button className="text-xl">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export { Main };
