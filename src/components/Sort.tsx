import React, { useState } from "react";
import ArrowTopIcon from "icon:../assets/img/arrow-top.svg";

const list = ["популярности", "цене", "алфавиту"];

const Sort: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(0);

  const onSelectSort = (id) => {
    setSelected(id);
    setIsOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowTopIcon className={`sort__arrow ${isOpen ? "open" : ""}`} />
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpen((prev) => !prev)}>{list[selected]}</span>
      </div>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {list.map((name, idx) => (
              <li
                key={idx}
                className={selected === idx ? "active" : ""}
                onClick={() => onSelectSort(idx)}
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
