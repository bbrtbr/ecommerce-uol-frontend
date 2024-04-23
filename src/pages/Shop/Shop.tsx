import "./Shop.css";
import bannerShop from "../../assets/bannerShop.svg";
const Shop = () => {
  return (
    <>
      <div className="banner-container">
        <img className="imgbanner" src={bannerShop} alt="Banner" />
        <div className="banner-text">
          <h1 className="hshop">Shop</h1>
          <p className="phome">Home &gt; Shop</p>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Shop;
