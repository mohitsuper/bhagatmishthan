import { use, useContext, useEffect, useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { NavLinks } from "../../data/Navbar/Navbar";
import { ContactInfo } from "../../data/contact/ContactData";
import { GetCard, GetCategory } from "../../Api/Api";
import AddToCard from "./AddToCard";
import FevouriteCard from "./FevouriteCard";
import { AddToCardVal } from "../../UseContext/AddToCardContext";
export default function Header() {
  const [isopen, setIsopen] = useState(null);
  const [AddCardOpen, setAddCardOpen] = useState(false);
  const [federatedOpen, setFederatedOpen] = useState(false);
  const [AddCardData, setAddCardData] = useState([]);
  const [isTopPostion, setisTopPostion] = useState(false);
  const [issetSearchOpen, setisSearchOpen] = useState(false);
  const [isRelode, setIsReload] = useState(false);
  const [AllCategory, setAllCategory] = useState([]);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const { count } = useContext(AddToCardVal);
  const isHandelReloade = (data) => {
    setIsReload(data);
  };
  const GetcategoryAll = async () => {
    const responce = await GetCategory();
    setAllCategory(responce || []);
  };
  useEffect(() => {
    const FetchApiData = async () => {
      const data = await GetCard();
      setAddCardData(data);
      GetcategoryAll();
    };
    FetchApiData();
  },[isRelode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setisTopPostion(true);
      } else {
        setisTopPostion(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [isActive,setIsActive] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 relative">
      <div
        className={`
    fixed top-0 right-0 h-screen bg-white z-50 shadow-2xl
    transition-all duration-300 ease-in-out
    ${AddCardOpen ? "w-80" : "w-0 overflow-hidden"}
  `}
      >
        {/* Close Button */}
        <button
          onClick={() => setAddCardOpen(false)}
          className="absolute top-5 left-5 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors"
        >
          <i className="fas fa-xmark text-2xl"></i>
        </button>
        <AddToCard
          AddCardOpen={AddCardOpen}
          isHandelReloade={isHandelReloade}
          AddCardData={AddCardData}
        />
      </div>

      <div
        className={`
    fixed top-0 right-0 h-screen bg-white z-50 shadow-2xl
    transition-all duration-300 ease-in-out
    ${federatedOpen ? "w-80" : "w-0 overflow-hidden"}
  `}
      >
        {/* Close Button */}
        <button
          onClick={() => setFederatedOpen(false)}
          className="absolute top-5 left-5 text-gray-700 hover:text-gray-900 p-2 rounded-full transition-colors"
        >
          <i className="fas fa-xmark text-2xl"></i>
        </button>
        <FevouriteCard />
      </div>
      <div className="bg-indigo-50 text-black text-sm flex items-center gap-5 justify-end px-40">
        <div className="flex gap-6 items-center py-2">
          <p>
            <i className="fa-solid fa-phone"></i> {ContactInfo.phone}
          </p>
          <span>|</span>
          <p>
            <i className="fa-solid fa-envelope"></i> {ContactInfo.email}
          </p>
        </div>
        {user ? (
          <div className="flex py-2 gap-3">
            <button
              className="text-indigo-600 hover:text-indigo-800 font-semibold px-3 py-1 border border-indigo-600 rounded-md transition cursor-pointer"
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex py-2 gap-3">
            <Link
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold px-3 py-1 rounded-md transition cursor-pointer"
              to="/singin"
            >
              Sign In
            </Link>
            <Link
              className="bg-white border border-indigo-500  text-indigo-500 hover:bg-indigo-700 font-semibold px-3 py-1 rounded-md transition cursor-pointer"
              to="/singup"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div className="py-4 flex items-center justify-between px-40">
        {/* Logo */}
        <div className="h-[60px] w-[150px]">
          <img src="/logo.png" className="h-full w-full object-contain" />
        </div>

        {/* Navigation Links - hidden on small screens */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <ul className="flex gap-5">
            {NavLinks.map((v, i) => {
              return (
                <li
                  key={i}
                  className="relative"
                  onMouseLeave={() => setIsopen(null)}
                  onMouseEnter={() => setIsopen(isopen === i ? null : i)}
                >
                  <NavLink
                    className={({ isActive }) =>
                      ` py-5 ${isActive ? "text-indigo-500" : "text-black "}`
                    }
                    to={v.link}
                  >
                    {v.name} {"  "}{" "}
                    {(v.submenu && AllCategory.length>0) && <i className="fa-solid fa-angle-down"></i>}
                  </NavLink>
                  {isopen === i && v.submenu && (
                    <div
                      className={`fixed bg-white ${
                        isTopPostion ? "top-32" : "top-40"
                      } z-20  w-[60%] left-90 rounded-lg shadow`}
                    >
                      <ul className="grid grid-cols-4 gap-4  p-5">
                        {AllCategory.map((subItem, subIndex) => {
                          return (
                            <li key={subIndex} className="w-full">
                              <Link
                                to={`/shop/${subItem?.name}`}
                                className="text-gray-700 hover:text-blue-500  font-[500]"
                              >
                                {subItem?.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Search Bar */}
        {issetSearchOpen === true && (
          <div className="flex-1 mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* User actions: Account icons + Sign In/Sign Up */}
        <div className="flex items-center space-x-4 text-gray-700 text-[22px]">
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={() => setisSearchOpen(!issetSearchOpen)}
          ></i>

          <div className="relative" onClick={() => setFederatedOpen(true)}>
            <i className="fa-solid fa-heart text-red-600"></i>
            <p className="text-[12px] p-2 bg-red-600 text-white h-4 w-4 flex justify-center items-center absolute top-0 -right-2 rounded-full">
              {0}
            </p>
          </div>
          <div className="relative" onClick={() => setAddCardOpen(true)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <p className="text-[12px] p-2 bg-red-600 text-white h-4 w-4 flex justify-center items-center absolute top-0 -right-2 rounded-full">
              {count}
            </p>
          </div>

          <div className="ml-20">
            {user && (
              <Link to={"/profile"}>
                <i className="fa-solid fa-circle-user"></i>
                <span className="ml-3 text-[1.2rem]">Myaccount</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
