import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ categoryType }) => {
  const { thumbnail, category } = categoryType;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${category}`);
      }}
    >
      <div>
        <img src={thumbnail} alt={category} />
      </div>
      <h3>{category}</h3>
    </div>
  );
};
