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

  // const landingPageData = {
  //   data: [
  //     {
  //       id: 1,
  //       layout: "hero",
  //       h1: "SRI VANAMAMALAI (THOTHADRI) MUTT",
  //       h2: "SRI VANACHALA MAHAMUNI PARAMPARA",
  //       img: "media/img/vm_temple_banner.png",
  //     },
  //     {
  //       id: 2,
  //       layout: "youtube_events",
  //       h1: "Events",
  //       caraousel_data: [
  //         {
  //           yt_link: "https://youtu.be/YPYghdZw8gM",
  //           yt_title:
  //             "Thiruppavai Pasuram 21 🤩 திருப்பாவை - ஏற்ற கலங்கள் | Tamil | 31st Vanamamalai Jeeyar Upanyasam",
  //         },
  //         {
  //           yt_link: "https://youtu.be/YPYghdZw8gM",
  //           yt_title:
  //             "Thiruppavai Pasuram 21 🤩 திருப்பாவை - ஏற்ற கலங்கள் | Tamil | 31st Vanamamalai Jeeyar Upanyasam",
  //         },
  //         {
  //           yt_link: "https://youtu.be/YPYghdZw8gM",
  //           yt_title:
  //             "Thiruppavai Pasuram 21 🤩 திருப்பாவை - ஏற்ற கலங்கள் | Tamil | 31st Vanamamalai Jeeyar Upanyasam",
  //         },
  //         {
  //           yt_link: "https://youtu.be/YPYghdZw8gM",
  //           yt_title:
  //             "Thiruppavai Pasuram 21 🤩 திருப்பாவை - ஏற்ற கலங்கள் | Tamil | 31st Vanamamalai Jeeyar Upanyasam",
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       layout: "banner",
  //       banner_data: [
  //         { id: 30, type: "image", image: square_image },
  //         {
  //           id: 31,
  //           type: "text",
  //           h1: "21st paasuram",
  //           p: "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
  //         },
  //         { id: 32, type: "image", image: square_image1 },
  //         { id: 33, type: "image", image: square_image2 },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       layout: "facebook",
  //       fb_page_link: "https://www.facebook.com/srivanamamalaimuttofficial/",
  //     },
  //     {
  //       id: 5,
  //       layout: "small_banner",
  //       image: rect_img,
  //       h1: "Welcome To Vanamamalai Mutt",
  //       p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
  //     },
  //     {
  //       id: 6,
  //       layout: "cards",
  //       card_data: [
  //         {
  //           h1: "SVNB Sabha AGM - 2011",
  //           p: "The Annual General body meeting of our sabha will be held on Sunday 12th June 2011 by 4.00 p.m. at our Sabha premises Triplicane, under the presidenship of Thiru A.G. Gopalan, President. The Annual General body meeting of our sabha will be held on Sunday 12th June 2011 by 4.00 p.m. at our Sabha premises Triplicane, under the presidenship of Thiru A.G. Gopalan, President",
  //         },
  //         {
  //           h1: "About Kshetram",
  //           p: "The word kshetram itself is a wonderful sanskrit word. In his divine bhagavat geetha, geethacharyan says 'edam sareeram kowthEyA kshetram ethyabhidheeyathE'",
  //         },
  //         {
  //           h1: "SVNB SabhaAGM - 2011",
  //           p: "The Annual General body meeting of our sabha will be held on Sunday 12th June 2011 by 4.00 p.m. at our Sabha premises Triplicane, under the presidenship of Thiru A.G. Gopalan, President.",
  //         },
  //         {
  //           h1: "SVNB SabhaAGM - 2011",
  //           p: "The Annual General body meeting of our sabha will be held on Sunday 12th June 2011 by 4.00 p.m. at our Sabha premises Triplicane, under the presidenship of Thiru A.G. Gopalan, President.",
  //         },

  //         {
  //           h1: "SVNB SabhaAGM - 2011",
  //           p: "The Annual General body meeting of our sabha will be held on Sunday 12th June 2011 by 4.00 p.m. at our Sabha premises Triplicane, under the presidenship of Thiru A.G. Gopalan, President.",
  //         },
  //       ],
  //     },
  //   ],
  // };

  return (
    <div>
      <div
        style={{
          backgroundImage: "url(flowerMala.png)",
        }}
        className="h-[23px] sticky top-0 z-[20000]"
      ></div>

      {/* {landingPageData?.data?.map((sectionData, sectionIndex) => {
        return (
          <div key={sectionIndex} className="">
            <Section apiData={sectionData} />
          </div>
        );
      })} */}

      <div className="md:pl-[60px] 2xl:pl-[300px] lg:pr-[400px] ">
        <header className=" py-5 flex flex-col justify-center items-center px-5 text-center">
          <div>
            <img src={header_image} alt="vanamamalai" className="h-[50px]" />
          </div>

          <div className="flex  justify-center gap-2 md:gap-10 md:flex-row items-center mt-5 text-[8px] sm:text-xs md:text=sm xl:text-base ">
            <h1 className="uppercase ">Srimathe Ramanujaya Nama:</h1>
            <h1 className="uppercase ">Srimath Varavaramunaye Nama:</h1>
            <h1 className="uppercase ">Sri vanachaLa Mahamunibyo Nama:</h1>
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
            <div className="w-full p-5 bg-[#fcd9ce]  ">
              {/* subscribe btn */}
              <button
                className="rounded-lg  w-full active:scale-95 transition-all font-caladea font-semibold tracking-widest text-xl bg-[#F1400B] text-white  p-3 bg-opacity-70 hover:bg-opacity-100   duration-500 flex justify-center items-center gap-5
              "
                onClick={() => setSubscribe(true)}
              >
                <div>
                  <img src={avatar} alt="avatar" className="w-[35px]" />
                </div>
                <h1>Subscribe</h1>
              </button>
            </div>
            {landingPageData?.data?.map((sectionData, sectionIndex) => {
              return (
                <div key={sectionIndex} className="w-full ">
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
