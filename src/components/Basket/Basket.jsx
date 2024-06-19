import "./Basket.css";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Goods from "../Goods/Goods";

import products from "../../products";

import { useContext, useState } from "react";
import { Context } from "../Router/Router";

let arrProducts = [
  "hits",
  "trousers",
  "sweatshirts",
  "tShirts",
  "shorts",
  "jackets",
];

export default function Basket() {
  const context = useContext(Context);

  let local = Object.keys(localStorage).filter((item) => item !== "gender");
  let arr = [];
  let sumProducts = 0;
  let sum = 0;

  const [bask, setBask] = useState();

  function randomGoods(max, min = 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  for (const key of local) {
    if (key !== "gender") {
      arr.push(JSON.parse(localStorage.getItem(key)));
      sumProducts += JSON.parse(localStorage.getItem(key)).quantity;
      sum +=
        JSON.parse(localStorage.getItem(key)).price *
        JSON.parse(localStorage.getItem(key)).quantity;
    } else {
      continue;
    }
  }

  return (
    <section className="sectionBasket">
      {local.length !== 0 || (
        <>
          <h1>Корзина пуста</h1>
          <div className="basket">
            <p>В корзину еще ничего не добавлено</p>
            <a href="/clothes">
              <button>НАЧАТЬ ПОКУПКИ</button>
            </a>
          </div>

          <h1>Вам может понравиться</h1>
          <Goods
            data={products}
            product={arrProducts[randomGoods(arrProducts.length - 1)]}
            gender={context.gender}
          ></Goods>
        </>
      )}

      {local.length === 0 || (
        <>
          <h1>Корзина</h1>

          <div className="basketActive">
            {arr.map((item) => (
              <div className="basketContainer" key={item.number}>
                <img src={require("../../imgProduct/" + item.way)} alt="" />
                <div className="basketRight">
                  <div className="basketTop">
                    <div className="basketTopLeft">
                      <p>{item.name[0].toUpperCase() + item.name.slice(1)}</p>
                      <p style={{ color: "#bbb4b4" }}>{item.number}</p>
                    </div>
                    <div className="basketTopRight">
                      <DeleteForeverIcon
                        fontSize="large"
                        onClick={() => {
                          localStorage.removeItem(
                            item.number + item.sizes + item.colors
                          );
                          setBask(arr);
                        }}
                      />
                    </div>
                  </div>
                  <div className="basketCenter">
                    <p>
                      {item.sizes} | {item.colors}
                    </p>
                    <p>{item.price + " р."}</p>
                  </div>
                  <div className="basketBottom">
                    <RemoveIcon
                      onClick={() => {
                        if (item.quantity <= 1) {
                        } else {
                          item.quantity -= 1;
                          localStorage.setItem(
                            item.number + item.sizes + item.colors,
                            JSON.stringify(item)
                          );
                          setBask(arr);
                        }
                      }}
                    />
                    <p>{item.quantity}</p>
                    <AddIcon
                      onClick={() => {
                        if (item.quantity >= 10) {
                        } else {
                          item.quantity += 1;

                          localStorage.setItem(
                            item.number + item.sizes + item.colors,
                            JSON.stringify(item)
                          );
                          setBask(arr);
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="basketActiveSum">
              <h2>Сумма заказа</h2>
              <div className="basketSum">
                <p>
                  {sumProducts}
                  {sumProducts > 1 && sumProducts < 5
                    ? " товара"
                    : sumProducts >= 5
                      ? " товаров"
                      : " товар"}{" "}
                  на сумму
                </p>
                <p>{sum}</p>
              </div>
              <div className="basketSum">
                <h2>Итого</h2>
                <h2>{sum}</h2>
              </div>

              <button>ВЫБРАТЬ СПОСОБ ПОЛУЧЕНИЯ</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
