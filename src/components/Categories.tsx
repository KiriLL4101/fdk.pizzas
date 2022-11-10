import React from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

interface CategoriesProps {
  categoryId: number;
  onChangeCategories: React.Dispatch<React.SetStateAction<number>>;
}

const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  onChangeCategories,
}) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((value, idx) => (
          <li
            key={idx}
            onClick={() => onChangeCategories(idx)}
            className={categoryId === idx ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
