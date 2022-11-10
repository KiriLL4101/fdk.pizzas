import React, { useState } from "react";
import ArrowTopIcon from "icon:../assets/img/arrow-top.svg";

// const list = ["популярности", "цене", "алфавиту"];

const list = {
  rating: "популярности",
  price: "цене",
  title: "алфавиту",
};

interface SortProps {
  sortBy: string;
  onChangeSort: React.Dispatch<React.SetStateAction<string>>;
}

const Sort: React.FC<SortProps> = ({ sortBy, onChangeSort }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSelectSort = (key: string) => {
    onChangeSort(key);
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowTopIcon className={`sort__arrow ${isOpen ? "open" : ""}`} />
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen((prev) => !prev)}>{list[sortBy]}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {Object.entries(list).map(([key, name], idx) => (
              <li
                key={idx}
                className={sortBy === key ? "active" : ""}
                onClick={() => onSelectSort(key)}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
