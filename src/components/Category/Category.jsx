import "./Category.css";
import imgCategory from "../../imgCategory";
import products from "../../products";
import Cards from "../Cards/Cards";

import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Router/Router";

export default function Category() {
  let params = useParams();

  let arr = products.filter((item) => {
    return item.category === params.type && item.gender === params.gender;
  });

  const context = useContext(Context);

  console.log(params);

  return (
    <>
      <section className="sectionContainer">
        <Cards img={imgCategory} gender={context.gender} />
        <h2>{params.type}</h2>
        <div className="category">
          {arr.map((item) => (
            <a
              key={item.number}
              href={
                "/clothes/category/" +
                context.gender +
                "/" +
                params.type +
                "/card/" +
                item.number
              }
              className="categoryLink"
            >
              <img
                src={require("../../imgProduct/" + item.way)}
                alt={item.name}
              />
              <p>{item.price}</p>
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
