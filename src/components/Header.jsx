import { useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping, FaFaceGrinHearts } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bag = useSelector((store) => store.bag);
  const [value, setValue] = useState("");
  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="https://www.myntra.com/shop/men#" target="_self">
          Men
        </a>
        <a href="https://www.myntra.com/shop/women" target="_self">
          Women
        </a>
        <a href="https://www.myntra.com/shop/kids" target="_self">
          Kids
        </a>
        <a href="https://www.myntra.com/shop/home-living" target="_self">
          Home & Living
        </a>
        <a href="https://www.myntra.com/personal-care" target="_self">
          Beauty
        </a>
        <a href="https://www.myntra.com/studio/home" target="_self">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <span className="search_icon">
          <FaSearch />
        </span>

        <input
          className="search_input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        {value === "" && (
          <div className="placeholder_wrapper">
            <span className="moving_text">
              products, brands and more | By Λnmol.
            </span>
          </div>
        )}
      </div>

      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
