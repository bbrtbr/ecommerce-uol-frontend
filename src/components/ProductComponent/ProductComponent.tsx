import React, { useState } from "react";
import Product from "../../models/Product";
import "./ProductStyle.css";
import { FaHeart } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { MdCompareArrows } from "react-icons/md";
interface ProductComponentProps {
  product: Product;
}

const ProductComponent = ({ product }: ProductComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
 
  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="img2" src={product.image_link} alt="" />
      {product.discount_percent && (
    <div className="discount-badge">-{product.discount_percent}%</div>
  )}
      <div className="text-container">
        <h4 className="title">{product.name}</h4>
        <p className="desc">{product.description}</p>
        {product.discount_price ? (
          <>
            <p className="price">
              Rp {product.discount_price}{" "}
              <del className="del">Rp {product.price}</del>
            </p>
          </>
        ) : (
          <p className="price">Rp {product.price}</p>
        )}
        {isHovered && (
          <div className="overlay">
            <button className="see-details">
              <span>See details</span>
            </button>
            <div className="icon-group">
              <span>
                <FiShare2 />
                Share
              </span>
              <span>
                <MdCompareArrows />
                Compare
              </span>
              <span>
                <FaHeart />
                Like
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComponent;
