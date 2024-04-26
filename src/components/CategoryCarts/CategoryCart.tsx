import React, { FC } from "react";
import "./CategoryCart.css";
import Category from '../../models/Category'
interface CategoryCartProps {
    category: Category;
}

const CategoryCart: FC<CategoryCartProps> = ({ category }) => {
    return (
        <div className="imagecontainer">
            <img src={category.image_link} className="image" alt="Imagem" />
            <p className="text">{category.name}</p>
        </div>
    );
};


export default CategoryCart;
