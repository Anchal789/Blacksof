import React from "react";
import logo from "../../assets/Header.png";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Header = () => {
  return (
    <div className="bg-transparent grid-flow-col grid-cols-3 mt-7 mr36 w-fit flex justify-center items-center">
      <div className="grid grid-flow-col grid-cols-3">
        <div className="logo flex text-center justify-end">
          <div className="logo_image">
            <img src={logo} alt="Tech" className="w-10 h-[auto]"/>
          </div>
          <div className="logo_text text-center flex justify-center items-center">
            <h1 className="text-white opacity-[60%] text-2xl font-bold">
              TECH
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-flow-col grid-cols-4 gap-6 text-center">
            <h1 className="text-white opacity-[80%] font-light">Solutions</h1>
            <h1 className="text-white opacity-[80%] font-light">Services</h1>
            <h1 className="text-white opacity-[80%] font-light">About</h1>
            <h1 className="text-white opacity-[80%] font-light">Culture</h1>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-flow-col grid-cols-4 gap-1 items-center">
            <button className="rounded-[40px] bg-[#181818] p-3 w-36 text-white">Contact us</button>
            <button className="rounded-[50%] bg-[#181818] w-fit p-3 text-white"><ArrowForwardOutlinedIcon/></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
