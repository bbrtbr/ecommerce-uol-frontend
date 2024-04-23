import "./Footer.css";
import banner from "../../assets/banner.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <img className="imgbanner" src={banner} alt="Banner" />
        <hr className="hr" />
        <div className="parent">
          <div className="div1 flex2">
            <p
              className="text1"
              style={{ color: "#00000", fontSize: "24px", fontWeight: "700" }}
            >
              Funiro.
            </p>
            <p className="address">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          <div className="div2 flex2">
            <p className="optionscabe">Links</p>
            <p className="options">Home</p>
            <p className="options">Shop</p>
            <p className="options">About</p>
            <p className="options">Contact</p>
          </div>
          <div className="div3 flex2">
            <p className="optionscabe">Help</p>
            <p className="options">Payment Options</p>
            <p className="options">Returns</p>
            <p className="options">Privacy Policy</p>
          </div>
          <div className="div4 flex2">
            <p className="optionscabe">Newsletter</p>
            <input
              type="text"
              className="input"
              placeholder="Enter your Email Address"
            />
            <button className="btn3">SUBSCRIBE</button>
          </div>
          <hr />
          <p>2023 furino. All rights reverved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
