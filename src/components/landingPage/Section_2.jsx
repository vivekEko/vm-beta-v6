import React from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

// assets
import square_image from "../../assets/img/landingPage/26_EN.jpg";
import square_image1 from "../../assets/img/landingPage/27_EN.jpg";
import square_image2 from "../../assets/img/landingPage/28_EN.jpg";
import Slider from "react-slick";

const Section_2 = (props) => {
  return (
    <div>
      {props?.apiData?.layout === "hero" && (
        <section
          className="h-[50vh] bg-cover bg-no-repeat flex justify-center  "
          style={{
            backgroundImage:
              "url(" + VITE_BASE_LINK + props?.apiData?.img + ")",
          }}
        >
          <div className="font-oswald text-center space-y-5 pt-20 ">
            <h1 className="text-stroke font-bold text-6xl text-[#292929]">
              {props?.apiData?.h1}
            </h1>
            <h2 className="text-white text-5xl font-medium">
              {props?.apiData?.h2}
            </h2>
          </div>
        </section>
      )}
      {props?.apiData?.layout === "banner" && (
        <section className="grid grid-cols-2 gap-10  p-5 place-items-center">
          {props?.apiData?.banner_data?.map((data, index) => {
            if (data?.type === "image") {
              return (
                <div key={index} className="">
                  <img src={data?.image} alt="square_image" />
                </div>
              );
            }

            if (data?.type === "text") {
              return (
                <div key={index} className="p-5">
                  <h1 className="text-2xl font-semibold mb-5 font-oswald">
                    {data?.h1}
                  </h1>
                  <h1 className="font-caladea">{data?.p}</h1>
                </div>
              );
            }
          })}
        </section>
      )}

      {props?.apiData?.layout === "small_banner" && (
        <section className="flex  gap-5 py-10 px-5 border-y border-y-[#FF6E43] border-opacity-30 bg-[#FEF2EE]">
          <div className="flex-[0.3] w-full">
            <img src={props?.apiData?.image} alt="" className="w-full" />
          </div>

          <div className="flex-[0.7]">
            <h1 className="text-[#830300] font-bold uppercase text-3xl">
              {props?.apiData?.h1}
            </h1>
            <p className="text-[#B5090E] text-lg mt-5">{props?.apiData?.p}</p>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "cards" && (
        <section
          // style={{
          //   backgroundImage:
          //     "url(../../src/assets/img/landingPage/border-svg.svg)",
          // }}
          className="py-20   "
        >
          <div className=" w-full">
            <Slider
              dots={true}
              slidesToShow={4}
              infinite
              arrows={false}
              //   prevArrow={<PreviousBtn />}
              //   nextArrow={<NextBtn />}
              className="w-full  md:w-[90%] mx-auto max-w-[1100px]"
              // dotsClass="slick-dots custom-dots"
            >
              {props?.apiData?.card_data?.map((data, index) => {
                return (
                  <div key={index} className="px-1">
                    <div className=" p-2 overflow-y-scroll font-caladea scrollbar-hide custom-border h-[350px] flex flex-col bg-[#FFFAE7]  ">
                      <h1 className=" py-2 text-[#830300] text-xl text-center font-semibold">
                        {data?.h1}
                      </h1>
                      <p className=" py-2 flex-1 text-[#9A4D0F] text-center">
                        {data?.p}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      )}
    </div>
  );
};

export default Section_2;
