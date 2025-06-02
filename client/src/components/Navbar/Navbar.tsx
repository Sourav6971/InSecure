import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";
import Wallet from "../Wallet/Wallet";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["Home", "Docs", "Pricing", "Profile"];
  const navigate = useNavigate();

  const handleNavigate = (value: string) => {
    if (value === "Home") {
      navigate("/");
    } else if (value === "Pricing") {
      navigate("/");
      window.scrollTo({
        top: 730,
        behavior: "auto",
      });
    } else {
      navigate(`/${value}`);
    }
    setMenuOpen(false); // close dropdown on navigation
  };

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Large Screen Navbar */}
      <div className="large">
        <div className="Navbar">
          <div className="logo">InSecure</div>
          <ul className="menuItems">
            {menuItems.map((value, index) => (
              <li key={index} onClick={() => handleNavigate(value)}>
                {value}
              </li>
            ))}
          </ul>
          <div className="wallet-container">
            <Wallet />
          </div>
        </div>
      </div>

      {/* Small Screen Navbar */}
      <div className="small-screen">
        <div className="medium">
          <div className="logo">InSecure</div>
          <div className="menu">
            <div onClick={handleOpenMenu}>
              {!menuOpen && (
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
              <ul className="dropdown-menu">
                {menuItems.map((value, index) => (
                  <li key={index} onClick={() => handleNavigate(value)}>
                    {value}
                  </li>
                ))}
                <li>
                  <Wallet />
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
