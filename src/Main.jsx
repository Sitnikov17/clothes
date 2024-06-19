import "./Main.css";
import { Context } from "./components/Router/Router";

import products from "./products";
import img from "./img";

import { useContext } from "react";

import Cards from "./components/Cards/Cards";
import Banner from "./components/Banner/Banner";
import Goods from "./components/Goods/Goods";

function Main() {
  const context = useContext(Context);

  return (
    <>
      <div
        className="image"
        style={{
          backgroundImage: `url(${require(context.gender === "men" ? "./img/banner1.jpg" : "./img/banner11.jpg")})`,
        }}
      >
        <p>НОВАЯ КОЛЛЕКЦИЯ</p>
      </div>
      <img src="" alt="" />

      <Cards img={img} gender={context.gender} />

      <Banner
        text="2000 БОНУСОВ за 1000 РУБЛЕЙ"
        backgroundImage={
          context.gender === "men" ? "banner2.jpg" : "banner22.jpg"
        }
        gender={context.gender}
      />

      <Goods data={products} product={"shorts"} gender={context.gender} />

      <Banner
        text="ФУТБОЛКИ"
        backgroundImage={
          context.gender === "men" ? "banner3.jpg" : "banner33.jpg"
        }
        padding="200px"
        background="orange"
        gender={context.gender}
        product={"tShirts"}
      />

      <Goods data={products} product={"tShirts"} gender={context.gender} />

      <Banner
        text="КУРТКИ"
        backgroundImage={
          context.gender === "men" ? "banner4.jpg" : "banner44.jpg"
        }
        padding="160px"
        gender={context.gender}
        product={"jackets"}
      />

      <Goods data={products} product={"jackets"} gender={context.gender} />

      <Banner
        text="ДЖИНСЫ"
        backgroundImage={
          context.gender === "men" ? "banner5.jpg" : "banner55.jpg"
        }
        padding="160px"
        gender={context.gender}
        product={"hits"}
      />

      <Goods data={products} product={"hits"} gender={context.gender} />
    </>
  );
}

export default Main;
