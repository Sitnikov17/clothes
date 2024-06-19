import "./Banner.css";

import { useContext } from "react";
import { Context } from "../Router/Router";

export default function Banner(props) {
  const gender = useContext(Context).gender;

  return (
    <>
      <a href={"/clothes/category/" + gender + "/" + props.product}>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${require("../../img/" + props.backgroundImage)}) `,
            padding: props.padding,
          }}
        >
          <p>{props.text}</p>
        </div>
      </a>
    </>
  );
}
