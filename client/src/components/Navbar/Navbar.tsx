import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Wallet from "../Wallet/Wallet";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["About", "Login", "Home"];
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    if (value === "Home") navigate("/");
    else {
      navigate(`/${value}`);
    }
  };

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
              <ul
                style={{ cursor: "pointer", fontSize: "large" }}
                key={index}
                onClick={() => handleNavigate(value)}
              >
                {value}
              </ul>
            ))}
          </div>
          <Wallet />
        </div>
      </div>

      <div className="small-screen">
        <div className="medium">
          <div className="logo">Luna</div>
          <div className="menu">
            <div
              className="wallet-container"
              style={{
                visibility: menuOpen ? "hidden" : "visible",
                margin: "4px 15px",
              }}
            >
              <Wallet />
            </div>
            <div onClick={handleOpenMenu}>
              {menuOpen || (
                <GiHamburgerMenu
                  style={{ color: "white", marginLeft: "20px" }}
                  size={20}
                />
              )}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="dropdown"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="icon">
                <RxCross2 onClick={handleOpenMenu} size={25} />
              </div>
              <div className="dropdown-menu">
                {menuItems.map((value, index) => (
                  <ul key={index}>{value}</ul>
                ))}
                <ul>
                  <Wallet />
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
