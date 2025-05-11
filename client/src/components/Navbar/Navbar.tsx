import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["About", "Login", "Home"];

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="large">
        <div className="Navbar">
          <div className="logo">Luna</div>

          <div className="menuItems">
            {menuItems.map((value, index) => (
              <ul key={index}>{value}</ul>
            ))}
          </div>

          <button className="wallet">
            Connect
            <img src="phantom.svg" alt="" />
          </button>
        </div>
      </div>

      <div className="medium">
        <div className="logo">Luna</div>
        <div className="menu">
          {menuOpen || (
            <button className="wallet">
              Connect
              <img src="phantom.svg" alt="" />
            </button>
          )}
          <div onClick={handleOpenMenu}>{menuOpen || <GiHamburgerMenu />}</div>
        </div>
      </div>

      {menuOpen && (
        <div className="dropdown">
          <div className="icon">
            <RxCross2 onClick={handleOpenMenu} />
          </div>
          <div className="dropdown-menu">
            {menuItems.map((value, index) => (
              <ul key={index}>{value}</ul>
            ))}
            <ul>
              <button className="wallet">
                Connect
                <img src="phantom.svg" alt="" />
              </button>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
