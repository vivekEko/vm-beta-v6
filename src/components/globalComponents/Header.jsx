import React from "react";
// assets
import header_img from "../../assets/img/header/header-img.png";
import search_icon from "../../assets/img/header/search-icon.png";
import translate_icon from "../../assets/img/header/translate-icon.png";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex justify-center md:justify-between items-center w-[90%] mx-auto pt-5">
        <div className="hidden md:block  flex-1"></div>
        <div className=" flex-1">
          <img
            src={header_img}
            alt="header img"
            className="mx-auto w-[180px]"
          />
        </div>
        <div className="hidden md:flex justify-end items-center gap-10 flex-1">
          <img src={translate_icon} alt="translate icon" className="w-[25px]" />
          <img src={search_icon} alt="search icon" className="w-[25px]" />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2 md:gap-10 md:flex-row items-center mt-5 sm:text-lg xl:text-xl ">
        <h1 className="uppercase text-white">Srimathe Ramanujaya Nama:</h1>
        <h1 className="uppercase text-white">Srimath Varavaramunaye Nama:</h1>
        <h1 className="uppercase text-white">
          Sri vanachaLa Mahamunibyo Nama:
        </h1>
      </div>
    </header>
  );
};

export default Header;
