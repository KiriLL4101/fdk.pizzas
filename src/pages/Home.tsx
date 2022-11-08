import React, { useEffect, useState } from "react";
import PizzaCard, { PizzaCardProps } from "../components/PizzaCard/PizzaCard";
import { SkeletonPizzaCard } from "../components/PizzaCard";
import Sort from "../components/Sort";
import Categories from "../components/Categories";

const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://636a17a7c07d8f936d92d6a5.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
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
