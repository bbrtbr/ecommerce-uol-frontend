import "./Shop.css";
import bannerShop from "../../assets/bannerShop.svg";
import { useState, useEffect } from "react";
import ProductService from "../../hooks/ProductService";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import { useLocation } from "react-router-dom";
import { ReactComponent as Icons1 } from "../../assets/icons1.svg";
import { ReactComponent as Icons2 } from "../../assets/icons2.svg";
import { ReactComponent as Icons3 } from "../../assets/icons3.svg";

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const [orderBy, setOrderBy] = useState("default");
  const [orderDirection, setOrderDirection] = useState("ASC");
  const [pageSize, setPageSize] = useState(16);
  const [currentPage, setCurrentPage] = useState(1);
  const categoryId = queryParams.get("categoryId");
  useEffect(() => {
    const fetchProducts = async () => {
      const productService = new ProductService();
      try {
        const productsData = await productService.getProducts({
          orderBy,
          orderDirection,
          pageSize: pageSize.toString(),
          page: currentPage.toString(),
          categoryId: categoryId ? parseInt(categoryId, 10) : undefined,
        });
        const length = await productService.getLength();
        setProductCount(length.length);
        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao obter produtos:", error);
      }
    };

    fetchProducts();
  }, [orderBy, orderDirection, pageSize, currentPage, categoryId]);

  const handleOrderByChange = (e: { target: { value: string } }) => {
    setOrderBy(e.target.value);
  };
  const totalPages = Math.ceil(productCount / pageSize);
  const handleChangePageSize = (e: { target: { value: string } }) => {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  };

  const handleOrderDirectionChange = (e: { target: { value: string } }) => {
    setOrderDirection(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? "btnPageSelected" : "btnPage"}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

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
        <div className="filter1">
          <Icons1 />
          <p>Filter</p>
          <Icons2 />
          <Icons3 />
          <p>
            Showing {products.length} of {productCount} results
          </p>
        </div>
        <div>
          <div className="filter2">
            <p>Show</p>
            <input
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value > 0) {
                  handleChangePageSize(e);
                }
              }}
              value={pageSize}
              type="number"
              min="1"
              placeholder="16"
            />
            <p>Short by</p>
            <select value={orderBy} onChange={handleOrderByChange}>
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
            <select
              value={orderDirection}
              onChange={handleOrderDirectionChange}
            >
              <option value="ASC">Ascending</option>
              <option value="DESC">Descending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cartsItems">
        <div className="carts">
          {products.map((product: any) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button className="btnPage" onClick={handlePrevPage}>
            Prev
          </button>
        )}

        {renderPageNumbers()}

        {currentPage < totalPages && (
          <button className="btnPage" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default Shop;
