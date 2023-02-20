import React from "react";

type CategoriesProps= {
  value: number;
  onSelectCategory: any;

}
export const Categories: React.FC<CategoriesProps> = ({ value, onSelectCategory }) => {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => {
              onSelectCategory(index);
            }}
            className={value === index ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};
