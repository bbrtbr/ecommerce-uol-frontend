import { SetStateAction, useEffect, useState } from "react";
import "./ProductPage.css";
import { Link, useLocation } from "react-router-dom";
import ProductService from "../../hooks/ProductService";
import Product from "../../models/Product";
import ArrowRight from "../../assets/ArrowRight.svg";
import Star from "../../assets/Star.svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const ProductPage = () => {
  const location = useLocation();
  const [product, setProduct] = useState<Product | null>(null);
  const queryParams = new URLSearchParams(location.search);
  const [size, setSize] = useState("L");
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const [color, setColor] = useState("purple");
  const productId = queryParams.get("productId");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productService = new ProductService();
        const productData = await productService.getProductsId({
          productId: Number(productId),
        });
        if (typeof productData.other_images_link === "string") {
          productData.other_images_link = JSON.parse(
            productData.other_images_link
          );
        }
        setProduct(productData);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    fetchProducts();
  }, [productId]);

  const handleThumbnailClick = (index: number) => {
    setActiveThumbnailIndex(index);
  };
  return (
    <section>
      <div className="pathProduct">
        <p className="container">
          <Link to={"/home"}>Home</Link> <img src={ArrowRight} alt=">" />{" "}
          <Link to={"/shop"}>Shop</Link> <img src={ArrowRight} alt=">" /> |{" "}
          <h3>{product?.name}</h3>
        </p>
      </div>
      <div className="productPageContainer">
        <div className="productInfo">
          <div className="imgThumbnail">
            {product &&
              Array.isArray(product.other_images_link) &&
              product.other_images_link.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  className={index === activeThumbnailIndex ? "active" : ""}
                />
              ))}
          </div>
          <div className="imgProduct">
            {product &&
              product.other_images_link &&
              product.other_images_link[activeThumbnailIndex] && (
                <img
                  src={product.other_images_link[activeThumbnailIndex]}
                  alt={product.name}
                />
              )}
          </div>
          <div className="contentProduct">
            <h1>{product?.name}</h1>
            <span>Rs. {product?.price}</span>
            <div className="star">
              <img className="stars" src={Star} alt="stars" />
              <img className="stars" src={Star} alt="stars" />
              <img className="stars" src={Star} alt="stars" />
            </div>
            <p>{product?.description}</p>
            <h2 className="sizes">Size</h2>
            <ul className="size">
              <li
                className={size === "L" ? "sizeActive" : ""}
                onClick={() => setSize("L")}
              >
                L
              </li>
              <li
                className={size === "XL" ? "sizeActive" : ""}
                onClick={() => setSize("XL")}
              >
                XL
              </li>
              <li
                className={size === "XS" ? "sizeActive" : ""}
                onClick={() => setSize("XS")}
              >
                XS
              </li>
            </ul>
            <h2 className={"colors"}>Color</h2>
            <ul className={"color"}>
              <li
                onClick={() => setColor("purple")}
                className={`"colorOne" ${
                  color === "purple" ? "colorActive" : ""
                }`}
              ></li>
              <li
                onClick={() => setColor("black")}
                className={`"colorTwo"  ${
                  color === "black" ? "colorActive" : ""
                }`}
              ></li>
              <li
                onClick={() => setColor("golden")}
                className={`"colorThree"  ${
                  color === "golden" ? "colorActive" : ""
                }`}
              ></li>
            </ul>
            <div className={"buy"}>
              <button className={"quantity"}>
                <span>-</span> 2 <span>+</span>
              </button>
              <button className={"addCart"}>Add To Cart</button>
            </div>
            <div className={"inStock"}>Stock: 2</div>
            <div className="details">
              <p>SKU: {product?.sku}</p>
              <p>Category: {product?.is_new}</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
              <p className="shareIcons">
                Share: <FaFacebook className="icon" />{" "}
                <FaLinkedin className="icon" /> <FaTwitter className="icon" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
