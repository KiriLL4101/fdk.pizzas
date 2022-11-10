import React, { useEffect, useState } from "react";
import PizzaCard, { PizzaCardProps } from "../components/PizzaCard/PizzaCard";
import { SkeletonPizzaCard } from "../components/PizzaCard";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categoryId, setCategoryId] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("rating");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://636a17a7c07d8f936d92d6a5.mockapi.io/items?sortBy=${sortBy}&order=desc${
        categoryId ? `&category=${categoryId}` : ""
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortBy]);

  return (
    <>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onChangeCategories={setCategoryId}
        />
        <Sort sortBy={sortBy} onChangeSort={setSortBy} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, idx) => <SkeletonPizzaCard key={idx} />)
          : pizzas.map((pizza: PizzaCardProps & { id: number }) => (
              <PizzaCard key={pizza.id} {...pizza} />
            ))}
      </div>
    </>
  );
};

export default Home;
