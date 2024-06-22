import "./Cards.css";

import { useContext } from "react";
import { Context } from "../Router/Router";
// import { useState, useContext, useEffect, useRef } from "react";

export default function Cards(props) {
  let arr = props.img.filter((item) => {
    return item.gender === props.gender;
  });

  const gender = useContext(Context).gender;

  console.log(arr);

  return (
    <>
      <div className="cards">
        {arr.map((item, index) => (
          <a
            key={index}
            href={"/clothes/category/" + gender + "/" + item.category}
          >
            <img
              src={require("../../img/" + item.way)}
              className="card"
              alt="Разделы магазина"
            />
            <p>{item.name}</p>
          </a>
        ))}
      </div>
    </>
  );
}
