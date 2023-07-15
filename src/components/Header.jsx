import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [showMenu, setShowMenu] = useState(0);

  const handleClick = () => {
    if (showMenu === 0) setShowMenu(1);
    else setShowMenu(0);
  };
  const show = {
    top: "57px",
  };
  const hide = {
    top: "-363px",
  };

  return (
    <>
      <div className="flex align-middle z-30 bg-white justify-between pt-[25px] px-[20px] mx-auto max-w-[1186px]">
        <div className="logo flex  items-center flex-1 z-20">
          <img
            src="https://assets-global.website-files.com/5af97a9c84ec1bc79d81b5f4/5dc9062fc19d430f6909ced7_UHLogo_standard.png"
            className="h-8"
            alt="UsabilityHub logo"
          />
        </div>
        <div className="lg:hidden z-20">
          <button className="" onClick={handleClick}>
            <MenuIcon />
          </button>
        </div>

        <div className="hidden lg:block">
          <ul className="flex align-middle ">
            <li className="py-3 px-4 hover:text-lightblue">Product</li>
            <li className="py-3 px-4 hover:text-lightblue">Customers</li>
            <li className="py-3 px-4 hover:text-lightblue">Pricing</li>
            <li className="py-3 px-4 hover:text-lightblue">Resources</li>
            <button className="py-3 px-6 border ml-3 rounded-[4px] font-semibold">
              Sign In
            </button>
            <button className="py-3 px-6 ml-3 rounded-[4px] font-semibold text-white bg-lightblue">
              Sign Up
            </button>
          </ul>
        </div>
      </div>
      <div
        className="menu z-10 p-[3%] transition-all ease-in-out duration-500 fixed w-full lg:hidden bg-white left-0 right-0"
        style={showMenu === 0 ? hide : show}
      >
        <ul className="flex flex-col  ">
          <li className="py-3 px-4 hover:text-lightblue">Product</li>
          <li className="py-3 px-4 hover:text-lightblue">Customers</li>
          <li className="py-3 px-4 hover:text-lightblue">Pricing</li>
          <li className="py-3 px-4 hover:text-lightblue">Resources</li>
          <button className="py-3 px-6 border mb-2 rounded-[4px] font-semibold ">
            Sign In
          </button>
          <button className="py-3 px-6 mb-2 rounded-[4px] font-semibold text-white bg-lightblue">
            Sign Up
          </button>
        </ul>
      </div>
    </>
  );
};

export default Header;
