import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { ACCOUNT_TYPE } from "../../utils/constants";
import ProfileDropdown from "../core/Auth/ProfileDropDown";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const [subLinks, setSubLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await apiConnector("GET", categories.CATEGORIES_API);
        setSubLinks(res.data.data);
      } catch (error) {
        console.log("Could not fetch Categories.", error);
      }
      setLoading(false);
    };

    fetchCategories();
  }, []);

  const matchRoute = (route) => {
    return location.pathname === route;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="navbarContainer">
      <div className="flex items-center justify-center bg-black border-b-[1px] border-b-richblack-800" >
        <div className="flex flex-col md:flex-row w-full max-w-maxContent items-center justify-between px-4 py-2">
          <div className="flex items-center justify-between w-full md:w-auto px-1 py-1">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="Logo" width={170} height={32} loading="lazy" />
            </Link>
            <button
              className="block md:hidden text-2xl text-richblack-25 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? "✖" : <AiOutlineMenu />}
            </button>
          </div>
          <nav className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row w-full max-w-maxContent items-center justify-between px-4 py-2 gap-y-4 md:gap-y-0 md:gap-x-6">
              {NavbarLinks.map(({ title, path }, index) => (
                <li key={index} className="mb-2 md:mb-0"> {/* Add margin bottom for vertical spacing on mobile */}
                  {title === "Catalog" ? (
                    <>
                      <div className={`group relative flex cursor-pointer items-center gap-1 ${matchRoute("/catalog/:catalogName") ? "text-yellow-100" : "text-richblack-25"}`}>
                        <p>{title}</p>
                        <BsChevronDown />
                        <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]">
                          <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>
                          {loading ? (
                            <p className="text-center">Loading...</p>
                          ) : (subLinks && subLinks.length) ? (
                            <>
                              {subLinks.filter(subLink => subLink?.courses?.length > 0)?.map((subLink, i) => (
                                <Link to={`/catalog/${subLink.name.split(" ").join("-").toLowerCase()}`} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-500" key={i} onClick={closeMobileMenu}>
                                  <p>{subLink.name}</p>
                                </Link>
                              ))}
                            </>
                          ) : (
                            <p className="text-center">No Courses Found</p>
                          )}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link to={path} onClick={closeMobileMenu}>
                      <p className={`${matchRoute(path) ? "text-yellow-25" : "text-richblack-25"} hover:text-yellow-25`}>{title}</p>
                    </Link>
                  )}
                </li>
              ))}
              {/* Add Rate Us link */}
              <li>
              <Link to="/rateus" onClick={closeMobileMenu}>
  <p style={{ color: "white" }}>Rate Us</p>
</Link>
              </li>
            </ul>
          </nav>
          <div className={`${mobileMenuOpen ? "block" : "hidden"} md:block mt-2 md:mt-0`}>
            <div className="flex flex-col items-center md:flex-row md:items-center justify-center md:justify-start gap-y-4 md:gap-y-0 gap-x-8">
              {user && user.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                <Link to="/dashboard/cart" className="relative" onClick={closeMobileMenu}>
                  <AiOutlineShoppingCart className="text-2xl text-richblack-100" />
                  {totalItems > 0 && (
                    <span className="absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-richblack-600 text-center text-xs font-bold text-yellow-500">{totalItems}</span>
                  )}
                </Link>
              )}
              {!token && (
                <div className="flex flex-col md:flex-row items-center md:items-start gap-y-4 md:gap-y-0 md:gap-x-4">
                  <Link to="/login" onClick={closeMobileMenu}>
                    <button className="rounded-[8px] px-4 py-2 bg-blue-500 text-white  transition duration-300 hover:bg-blue-700 hover:text-gray-200">Log in</button>
                  </Link>
                  <Link to="/signup" onClick={closeMobileMenu}>
                    <button className="rounded-[8px] px-4 py-2 bg-blue-500 text-white transition duration-300 hover:bg-blue-700 hover:text-gray-200">Sign up</button>
                  </Link>
                </div>
              )}
              {token && <ProfileDropdown />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
