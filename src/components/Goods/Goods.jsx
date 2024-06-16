import "./Goods.css";

import { useState, useContext, useEffect, useRef } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function Goods(props) {
  const [translate, setTranslate] = useState(0);
  let size = useRef(0);

  useEffect(() => {
    if (document.documentElement.scrollWidth > size.current) {
      size.current = document.documentElement.scrollWidth;
    }
  });

  let arr = props.data.filter((item) => {
    if (item.category === props.product && item.gender === props.gender) {
      return item;
    }
  });

  const handlePrevious = () => {
    const trans = translate + (window.innerWidth / 3) * 2;
    if (trans + window.innerWidth >= window.innerWidth) {
      setTranslate(0);
    } else {
      setTranslate(trans);
    }
  };

  const handleNext = () => {
    const trans = translate - (window.innerWidth / 3) * 2;
    const transLast = -size.current - 80 + window.innerWidth;
    if (trans <= -size.current + window.innerWidth) {
      setTranslate(transLast);
    } else {
      setTranslate(trans);
    }
  };

  return (
    <>
      <div className="carousel">
        <div
          className="containerCard"
          style={{ transform: "translateX(" + translate + "px)" }}
        >
          {arr.map((item) => (
            <a
              href={`/category/${props.gender}/${props.product}/card/${item.number}`}
              key={item.number}
            >
              <img
                src={require("../../imgProduct/" + item.way)}
                alt={item.name}
                className="cardProduct"
              />
              <p>{item.price + " руб."}</p>
              <p>{item.specifications}</p>
            </a>
          ))}
        </div>

        <ChevronLeftIcon
          onClick={handlePrevious}
          className="handlePrevious"
          style={{ fontSize: "60px" }}
        />
        <ChevronRightIcon
          onClick={handleNext}
          className="handleNext"
          style={{ fontSize: "60px" }}
        />
      </div>
    </>
  );
}
