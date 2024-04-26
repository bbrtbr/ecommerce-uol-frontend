import React, { FC, useEffect, useState } from "react";
import "./Home.css";
import CategoryService from "../../hooks/CategoryService";
import Heading from "../../components/Heading/Heading";
import CategoryCart from "../../components/CategoryCarts/CategoryCart";
import ProductService from "../../hooks/ProductService";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [pageSize, setPageSize] = useState("8");
  const [showMoreClicked, setShowMoreClicked] = useState(false);
  const [category, setCategory] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryService = new CategoryService();
        setCategory(await categoryService.getCategory());
        const productService = new ProductService();
        const productsData = await productService.getProducts({
          orderBy: "default",
          orderDirection: "ASC",
          pageSize: pageSize,
          page: "1",
        });
        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    fetchProducts();
  }, [pageSize]);

  const handleShowMoreClick = () => {
    if (!showMoreClicked) {
      setPageSize("16");
    } else {
    }
    setShowMoreClicked(true);
  };

  return (
    <>
      <div className="homepage-img">
        <div className="texts">
          <div className="contents">
            <p className="text1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              molestie scelerisque metus. Nulla rutrum vitae tortor ac maximus.
              Curabitur odio dolor, hendrerit non tristique ac, scelerisque sit
              amet dui.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Heading text={"Browse The Range"} />
        <div className="Carts">
          {category.map((category: any) => (
            <Link to={`/shop?categoryId=${category.id}`}>
              <div key={category.id}>
                <CategoryCart category={category} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="ourProducts">
        <Heading text={"Our Products"} />
        <div className="cartsItems">
          <div className="carts">
            {products.map((product: any) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="center">
          {!showMoreClicked ? (
            <button className="btn2" onClick={handleShowMoreClick}>
              Show More
            </button>
          ) : (
            <Link to="/shop">
              <button className="btn2">Go to shop</button>
            </Link>
          )}
        </div>
      </div>

      <hr className="hr" />
    </>
  );
};

export default Home;
