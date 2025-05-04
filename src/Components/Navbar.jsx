import { useContext, useState } from "react";
import Logo from "../Assets/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const NavItems = ["Home", "Menu", "Mobile App", "Contact Us"];
  const [Active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const {getCartItemsCount} = useContext(StoreContext);
  return (
    <nav className="relative container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Tomato Logo Icon"
            className="w-[130px] md:w-[160px] h-[30px] cursor-pointer"
            loading="lazy"
          />
        </Link>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {NavItems.map((item, index) =>
            item === "Home" ? (
              <Link
                to="/"
                key={index}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && setActive(item)}
                aria-current={Active === item ? "page" : undefined}
                onClick={() => setActive(item)}
                className={`text-[20px] ${
                  Active === item ? "text-[#ff6347]" : "text-[#49557e]"
                } cursor-pointer`}
              >
                {item}
              </Link>
            ) : (
              <a
                href={`#${item}`}
                key={index}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && setActive(item)}
                aria-current={Active === item ? "page" : undefined}
                onClick={() => setActive(item)}
                className={`text-[20px] ${
                  Active === item ? "text-[#ff6347]" : "text-[#49557e]"
                } cursor-pointer`}
              >
                {item}
              </a>
            )
          )}
        </ul>
        <div className="hidden md:flex items-center gap-8">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-[35px] cursor-pointer text-[#49557e]" />
          </Link>
          <div className="bg-[#ff6347] h-[20px] w-[20px] rounded-full -ml-[40px] -mt-[20px] flex justify-center items-center text-white text-[14px]">
            {getCartItemsCount()}
          </div>
          <button
            onClick={() => setShowLogin(true)}
            className="text-white bg-[#ff6347] rounded-full px-5 py-2 text-[19px] border-2 border-[#ff6347] hover:bg-white hover:text-[#ff6347] transition duration-300 ease-in-out cursor-pointer"
          >
            Sign Up
          </button>
        </div>
        <div className="flex md:hidden items-center gap-5">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-[35px] cursor-pointer text-[#49557e]" />
          </Link>
          <div className="bg-[#ff6347] h-[20px] w-[20px] rounded-full -ml-[30px] -mt-[20px] flex justify-center items-center text-white text-[14px]">
            5
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={`block md:hidden text-[30px] rounded-xl text-[#ff6347] cursor-pointer transition-all duration-500 ease-in-out ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul
          className={`md:hidden flex flex-col items-center gap-8 bg-[#ff6347] rounded p-10 transition-transform duration-500 ease-in-out transform absolute h-[50vh] w-[90vw] top-20 left-1/2 -translate-x-1/2 z-50 ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 pointer-events-none"
          }`}
        >
          {NavItems.map((item, index) =>
            item === "Home" ? (
              <Link
                to="/"
                key={index}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && setActive(item)}
                aria-current={Active === item ? "page" : undefined}
                onClick={() => setActive(item)}
                className={`text-[20px] ${
                  Active === item ? "text-[#fff]" : "text-[#6e7591]"
                } cursor-pointer`}
              >
                {item}
              </Link>
            ) : (
              <a
                href={`#${item}`}
                key={index}
                role="button"
                tabIndex="0"
                onKeyDown={(e) => e.key === "Enter" && setActive(item)}
                aria-current={Active === item ? "page" : undefined}
                onClick={() => setActive(item)}
                className={`text-[20px] ${
                  Active === item ? "text-[#fff]" : "text-[#6e7591]"
                } cursor-pointer`}
              >
                {item}
              </a>
            )
          )}
          <button
            onClick={() => setShowLogin(true)}
            className="text-[#ff6347] bg-[#FFF] rounded-full px-5 py-2 text-[19px] border-2 border-[#fff] hover:bg-transparent hover:text-[#fff] transition duration-300 ease-in-out cursor-pointer"
          >
            Sign Up
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
