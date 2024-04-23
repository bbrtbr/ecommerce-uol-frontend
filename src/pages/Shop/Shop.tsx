import "./Shop.css";
import bannerShop from "../../assets/bannerShop.svg";
import React, { useState, useEffect } from "react";
import ProductService from "../../hooks/ProductService";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import { CiFilter } from "react-icons/ci";

const Shop = () => {
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(16);
  const [inputProductsPerPage, setInputProductsPerPage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductService();
      try {
        const products = await productService.getProducts();
        const count = products.length;
        setProductCount(count);
        setProducts(products);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  const handlePerPageInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setInputProductsPerPage(e.target.value);
  };

  const handlePerPageInputSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setProductsPerPage(parseInt(inputProductsPerPage));
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      <div className="banner-container">
        <img className="imgbanner" src={bannerShop} alt="Banner" />
        <div className="banner-text">
          <h1 className="hshop">Shop</h1>
          <p className="phome">Home &gt; Shop</p>
        </div>
      </div>
      <div className="filters">
        <CiFilter />
        <p>Filter</p>
        <img src={icon1} alt="Icon 1" />
        <img src={icon2} alt="Icon 2" />
        <p>Showing {currentProducts.length} of {productCount} results</p>
        <form onSubmit={handlePerPageInputSubmit}>
          <input
            type="number"
            placeholder="Products per page"
            value={inputProductsPerPage}
            onChange={handlePerPageInputChange}
          />
          <button type="submit">Set</button>
        </form>
      </div>
      <div className="cartsItems">
        <div className="carts">
          {currentProducts.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={handleNextPage} disabled={indexOfLastProduct >= productCount}>Next</button>
      </div>
    </>
  );
};

export default Shop;
