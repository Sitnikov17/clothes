import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Main from "../../Main";
import ProductCard from "../ProductCard/ProductCard";
import Category from "../Category/Category";
import Basket from "../Basket/Basket";
import Layout from "./Layout";

import React from "react";
import { useState } from "react";

export const Context = React.createContext();

let genderStorage = localStorage.getItem("gender") || "women";

export default function Router() {
  const [gender, setGender] = useState(genderStorage);

  const toggle = () => {
    localStorage.getItem("gender") === "men"
      ? localStorage.setItem("gender", "women")
      : localStorage.setItem("gender", "men");
    setGender(localStorage.getItem("gender"));
  };

  return (
    <Context.Provider value={{ gender, toggle }}>
      <BrowserRouter basename="/clothes">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/category/:gender/:type" element={<Category />} />
            <Route
              path="/category/:gender/:type/card/:number"
              element={<ProductCard />}
            />
            <Route path="/basket" element={<Basket />} />

            <Route
              path="/*"
              element={
                <p
                  style={{
                    marginTop: "90px",
                    marginBottom: "380px",
                    fontSize: "25px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Not found
                </p>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}
