import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const nav = {
  navItem: [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Admission", path: "/admission" },
    { id: 3, name: "Courses", path: "/courses" },
    { id: 4, name: "Facilities", path: "/facilities" },
    { id: 5, name: "Contact us", path: "/contact-us" },
    { id: 6, name: "About", path: "/about" },
  ],
};
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      <div className="flex p-2 justify-between items-center fixed top-0 w-full z-50 ">
        <h1 className="text-2xl font-bold">Octa University</h1>

        {/* for big screen */}
        <nav className="hidden sm:block">
          <ul className="flex mr-10 font-semibold text-lg">
            {nav.navItem.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-indigo-400 hover:text-white"
              >
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* for small screen */}
        <div className="sm:hidden">
          <button>
            {showNavbar ? (
              <IoMdClose
                size="30px"
                onClick={() => setShowNavbar(!showNavbar)}
              />
            ) : (
              <IoIosMenu
                size="30px"
                onClick={() => setShowNavbar(!showNavbar)}
              />
            )}
          </button>
        </div>
        <div
          className={`${
            showNavbar
              ? "absolute flex flex-col top-[50px] right-0 bg-white px-10 py-4 sm:hidden"
              : " hidden"
          }`}
        >
          <nav>
            <ul>
              {nav.navItem.map((item) => (
                <li
                  key={item.id}
                  className="m-2 p-2 hover:bg-indigo-400 hover:text-white"
                >
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* image section */}
      <div className="">
        <div className="w-full h-[500px] fixed top-0">
          <h1 className="absolute font-bold text-7xl text-blue-400 top-80">
            Octa university
          </h1>
          <img
            className=" w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1570975640108-2292d83390ff?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;
