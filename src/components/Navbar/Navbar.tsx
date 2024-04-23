import React, { useState } from "react";
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { FiMenu, FiUser } from "react-icons/fi";
const Navbar = () => {

    let [showIcons, setShowIcons] = useState(false);

    function showMenuHandler() {
        setShowIcons(!showIcons)
    }


    return <>
        <nav>
            <div className="logo flex">
                <img src={logo} className="img" alt="logo" />
                <p className="logo-text">Furniro</p>

            </div>

            <div className="links">
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </div>

            <div className="icons">
                <FiUser/>
                <CiSearch />
                <IoIosHeartEmpty />
                <BsCart2 />
            </div>

            <div className="menu" onClick={() => showMenuHandler()}>
                <FiMenu />
            </div>
        </nav>

        {showIcons && <div className="links-SmallScreen">
            <div className="link"><a href="/">Home</a></div>
            <div className="link"><a href="/">Shop</a></div>
            <div className="link"><a href="/">About</a></div>
            <div className="link"><a href="/">Contact</a></div>
        </div>
        }

    </>;
};

export default Navbar;
