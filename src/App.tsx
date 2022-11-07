import React from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaCard from "./components/PizzaCard";
import Sort from "./components/Sort";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
