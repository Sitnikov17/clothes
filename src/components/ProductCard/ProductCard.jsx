import "./ProductCard.css";

import products from "../../products";

import Goods from "../Goods/Goods";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Router/Router";

export default function ProductCard() {
  const context = useContext(Context);

  const [active, setActive] = useState(null);
  const [activeColor, setActiveColor] = useState("black");
  let temporaryObj = 0;

  let params = useParams();

  let obj = products.find((item) => params.number == item.number);
  let productsFilter = products.filter((item) => item.number !== obj.number);

  function handleActive(item, fn) {
    fn(item);
  }

  return (
    <>
      <section className="productCardContainer">
        <div className="productCardMain">
          <div className="productCardLeft">
            <img src={require("../../imgProduct/" + obj.way)} alt="" />
          </div>
          <div className="productCardRight">
            <h2>
              {obj.name.charAt(0).toUpperCase() +
                obj.name.slice(1) +
                " " +
                obj.specifications.toLowerCase()}
            </h2>
            <div className="productPrice">
              <h1>{obj.price + " руб."}</h1>
            </div>
            <div>
              <h3>Цвет: </h3>
              <div className="productColor">
                {obj.colors.map((item) => (
                  <div
                    className={`colors ${activeColor === item ? "colorsActive " : ""}`}
                    style={{ background: item }}
                    onClick={() => handleActive(item, setActiveColor)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="productSize">
              <h3>Размер:</h3>
              {obj.sizes.map((item) => (
                <div
                  className={`sizes ${active === item ? "sizesActive " : ""}`}
                  onClick={() => {
                    handleActive(item, setActive);
                    console.log();
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <button
              className="productButton"
              onClick={() => {
                if (active === null) {
                  alert("Выберите размер");
                  console.log(obj);
                } else {
                  console.log(obj);
                  temporaryObj = Object.assign({}, obj);
                  temporaryObj.sizes = active;
                  temporaryObj.colors = activeColor;
                  localStorage.setItem(
                    temporaryObj.number +
                      temporaryObj.sizes +
                      temporaryObj.colors,
                    JSON.stringify(temporaryObj)
                  );
                }
              }}
            >
              Добавить в корзину
            </button>
            <div className="description">
              <h3>Описание</h3>
              <p>-описание</p>
              <p>-описание</p>
              <p>-описание</p>
              <p>-описание</p>
              <p>-описание</p>
            </div>
          </div>
        </div>
        <div className="productCardReviews"> Отзывы(?????)</div>
        <h1 style={{ margin: "4vh 0 0 2vh" }}>Похожие товары</h1>
      </section>
      <Goods data={productsFilter} product={obj.category} gender={obj.gender} />
    </>
  );
}
