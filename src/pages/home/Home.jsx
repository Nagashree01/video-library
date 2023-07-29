import React from "react";
import { categories } from "../../data/categories";
import { CategoryCard } from "../../components/categoryCard/CategoryCard";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-section">
      <h1>Categories</h1>
      <div className="categories-section">
        {categories.map((categoryType) => {
          return (
            <CategoryCard categoryType={categoryType} key={categoryType._id} />
          );
        })}
      </div>
    </div>
  );
};
