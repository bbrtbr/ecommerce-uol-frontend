import React, { FC, useEffect, useState } from "react";
import "./Home.css";
import Heading from "../../components/Heading/Heading";
import ImageCart1 from "../../components/ImageCarts/ImageCart1";
import ProductService from "../../hooks/ProductService";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import Image1 from "../../assets/imageCart1.png";
import Image2 from "../../assets/imageCart2.png";
import Image3 from "../../assets/imageCart3.png";
import { Link } from "react-router-dom";

const Home: FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productService = new ProductService();
        const productsData = await productService.getProducts({
          orderBy: "name",
          orderDirection: "ASC",
          pageSize: "5",
          page: '1'
        });
        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao obter os produtos:", error);
      }
    };

    fetchProducts();
  }, []);

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
          <ImageCart1 src={Image1} text={"Dining"} />
          <ImageCart1 src={Image2} text={"Living"} />
          <ImageCart1 src={Image3} text={"Bedroom"} />
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
          <Link to="/shop">
            <button className="btn2">Show More</button>
          </Link>
        </div>
      </div>

      <hr className="hr" />
    </>
  );
};

export default Home;
