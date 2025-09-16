import { useState } from "react";
import { Link, Links, NavLink } from "react-router-dom";
import { NavLinks } from "../../data/Navbar/Navbar";
import { ContactInfo } from "../../data/contact/ContactData";
export default function Header() {

  const [isopen, setIsopen] = useState(null)
  console.log(isopen)
  // const [isActive,setIsActive] = useState(false)
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top contact info bar */}
      <div className="bg-indigo-50 text-black text-sm flex items-center gap-5 justify-end px-10">
        <div className="flex gap-6 items-center py-2">
          <p><i className="fa-solid fa-phone"></i> {ContactInfo.phone}</p>
          <span>|</span>
          <p><i className="fa-solid fa-envelope"></i> {ContactInfo.email}</p>
        </div>
        <div className="flex py-2 gap-3">
          <button className="text-indigo-600 hover:text-indigo-800 font-semibold px-3 py-1 border border-indigo-600 rounded-md transition">
            Sign In
          </button>
          <button className="bg-indigo-600 text-white hover:bg-indigo-700 font-semibold px-3 py-1 rounded-md transition">
            Sign Up
          </button>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="h-[60px] w-[150px]">
          <img src="/logo.png" className="h-full w-full object-contain" />
        </div>

        {/* Navigation Links - hidden on small screens */}
        <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
          <ul className="flex gap-5">
            {NavLinks.map((v, i) => {
              return (
                <li key={i} className="relative">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-indigo-500" : "text-black "
                    }
                    to={v.link}
                    onMouseEnter={()=>setIsopen((isopen === i)?null:i )}
                  >
                    {v.name} 
                  </NavLink>
                  {
                    (isopen === i) && v.submenu &&  (
                      <div className="fixed bg-white top-34">
                        <ul className="flex flex-wrap w-80 gap-5 p-5 shadow rounded-lg">
                          {
                            v.submenu.map((subItem,subIndex)=>{
                              return(
                                <li key={subIndex}>
                                  <Link to={`/shop${subItem.path}`} className="text-gray-700 hover:text-blue-500 font-[400]">{subItem.title}</Link>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="flex-1 mx-4 max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* User actions: Account icons + Sign In/Sign Up */}
        <div className="flex items-center space-x-4 text-gray-700">
          {/* User Icon */}
          <button
            aria-label="User account"
            className="hover:text-indigo-600 transition hidden md:block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.88 6.196 9 9 0 015.12 17.805z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>

          {/* Cart Icon with badge */}
          <button
            aria-label="Shopping cart"
            className="relative hover:text-indigo-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5h12.4M16 17a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-semibold">
              3
            </span>
          </button>

          {/* Sign In / Sign Up buttons */}
        </div>
      </div>
    </header>
  );
}
