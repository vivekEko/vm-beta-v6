// react
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// api calls
import axios from "axios";

//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import LandingPageDataAtom from "../recoil/pages/landingPage/LandingPageDataAtom";

// components
import Footer from "../components/globalComponents/Footer";
import EventSection from "../components/landingPage/EventSection";
import Section from "../components/landingPage/Section";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import Section_2 from "../components/landingPage/Section_2";

// assets
import header_image from "../assets/img/header/header-img.png";
import header_garland from "../assets/img/header/flowerMala.png";
import Sidebar_right from "../components/landingPage/Sidebar_right";

import square_image from "../assets/img/landingPage/26_EN.jpg";
import square_image1 from "../assets/img/landingPage/27_EN.jpg";
import square_image2 from "../assets/img/landingPage/28_EN.jpg";
import rect_img from "../assets/img/landingPage/rect_image.png";
import avatar from "../assets/img/landingPage/avatar.svg";
import cross from "../assets/img/landingPage/cross.svg";
import subScribeAtom from "../recoil/sidebar/subScribeAtom";
import { Carousel } from "../components/landingPage/Carousel";

const Landing = () => {
  // Global variables
  const [landingPageData, setLandingPageData] =
    useRecoilState(LandingPageDataAtom);
  const [subscribe, setSubscribe] = useRecoilState(subScribeAtom);

  // local variables

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "landing_page")
      .then(function (response) {
        setLandingPageData(response?.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(flowerMala.png)",
        }}
        className="h-[23px] sticky top-0 z-[20000]"
      ></div>

      <div className="md:pl-[60px] 2xl:pl-[300px] lg:pr-[400px] ">
        <header className=" py-5 flex flex-col justify-center items-center px-5 text-center">
          <div>
            <img src={header_image} alt="vanamamalai" className="h-[50px]" />
          </div>

          <div className="flex  justify-center gap-2 md:gap-10 md:flex-row items-center mt-5 text-[8px] sm:text-xs md:text=sm xl:text-base ">
            <h1 className="uppercase">Srimathe Ramanujaya Nama:</h1>
            <h1 className="uppercase">Srimath Varavaramunaye Nama:</h1>
            <h1 className="uppercase">Sri vanachaLa Mahamunibyo Nama:</h1>
          </div>
        </header>

        <div className=" w-full">
          <div className=" md:mx-5 ">
            {landingPageData?.data?.map((sectionData, sectionIndex) => {
              return (
                <div key={sectionIndex} className="">
                  <Section_2 apiData={sectionData} />
                </div>
              );
            })}
          </div>

          <div
            className="hidden lg:block w-full max-w-[400px] h-[100vh] scrollbar-hide overflow-y-scroll fixed bottom-0 top-0 right-0
          bg-[#F1400B] bg-opacity-20 pt-5"
          >
            <div className="w-full p-5 bg-[#fcd9ce] flex gap-3 items-center  ">
              {/* subscribe btn */}
              <Link
                to="/shishyas_enroll_form"
                className="rounded-lg  w-full active:scale-95 transition-all font-caladea font-semibold tracking-widest text-base bg-[#F1400B] text-white  p-3 bg-opacity-70 hover:bg-opacity-100   duration-500 flex justify-center items-center gap-5
              "
                // onClick={() => setSubscribe(true)}
              >
                <div>
                  <img src={avatar} alt="avatar" className="w-[25px]" />
                </div>
                <h1>Sishyas Enrollment</h1>
              </Link>
            </div>
            {landingPageData?.data?.map((sectionData, sectionIndex) => {
              return (
                <div key={sectionIndex} className="w-full">
                  <Sidebar_right apiData={sectionData} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Landing;
