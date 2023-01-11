import React, { useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

// assets
import square_image from "../../assets/img/landingPage/26_EN.jpg";
import square_image1 from "../../assets/img/landingPage/27_EN.jpg";
import square_image2 from "../../assets/img/landingPage/28_EN.jpg";
import Slider from "react-slick";
import YouTube from "react-youtube";

const Section_2 = (props) => {
  const responsive = [
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1604,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  const opts = {
    height: "200",
    width: "100%",
  };

  return (
    <div>
      {props?.apiData?.layout === "hero" && (
        <section
          className="h-[50vh] bg-cover bg-no-repeat  bg-center"
          style={{
            backgroundImage:
              "url(" + VITE_BASE_LINK + props?.apiData?.img + ")",
          }}
        >
          <div className="font-oswald text-center h-full space-y-5 pt-20 bg-black bg-opacity-30 ">
            <h1
              className="text-stroke font-bold text-[calc(0.1vw+2.5rem)] 
            md:text-[calc(0.1vw+3rem)] text-[#292929]"
            >
              {props?.apiData?.h1}
            </h1>
            <h2 className="text-white text-[calc(0.1vw+1.7rem)] md:text-[calc(0.1vw+2rem)]  font-medium">
              {props?.apiData?.h2}
            </h2>
          </div>
        </section>
      )}
      {props?.apiData?.layout === "banner" && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5  p-5 place-items-center">
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
                <div key={index} className="p-5 ">
                  <h1 className="text-[calc(0.4vw+1.5rem)] font-semibold mb-5 font-oswald">
                    {data?.h1}
                  </h1>
                  <h1 className="font-caladea text-[calc(0.3vw+1rem)] max-h-[250px] overflow-y-scroll scrollbar-hide ">
                    {data?.p}
                  </h1>
                </div>
              );
            }
          })}
        </section>
      )}

      {props?.apiData?.layout === "youtube_events" && (
        <section className="py-5">
          <div className="mx-5 mt-5">
            <h1 className="pb-5 text-2xl font-semibold">
              {props?.apiData?.h1}
            </h1>

            <div className=" flex overflow-y-scroll scrollbar-hide ">
              {props?.apiData?.caraousel_data?.map((data, index) => {
                return (
                  <div key={index} className=" mr-5 min-w-[300px]">
                    <YouTube
                      videoId={
                        data?.yt_link
                          .split("/")
                          .reverse()[0]
                          .includes("watch?v=")
                          ? data?.yt_link.split("watch?v=").reverse()[0]
                          : data?.yt_link.split("/").reverse()[0]
                      }
                      opts={opts}
                      className="w-full"
                    />
                    {/* <h1 className=" py-2">{data?.yt_title}</h1> */}
                    <h1 className="py-2">{data?.yt_title}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "small_banner" && (
        <section className="flex flex-col sm:flex-row  gap-5 py-10 px-5 border-y border-y-[#FF6E43] border-opacity-30 bg-[#FEF2EE]">
          <div className="flex-[0.3] w-full">
            <img src={props?.apiData?.image} alt="" className="w-full" />
          </div>

          <div className="flex-[0.7] text-center sm:text-left">
            <h1 className="text-[#830300] font-bold uppercase text-3xl">
              {props?.apiData?.h1}
            </h1>
            <p className="text-[#B5090E] text-lg mt-5">{props?.apiData?.p}</p>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "cards" && (
        <section className="py-20   ">
          <div className=" w-full">
            <Slider
              dots={true}
              slidesToShow={4}
              infinite
              arrows={false}
              //   prevArrow={<PreviousBtn />}
              //   nextArrow={<NextBtn />}
              className="w-full  md:w-[90%] mx-auto "
              // dotsClass="slick-dots custom-dots"
              responsive={responsive}
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

      {props?.apiData?.layout === "facebook" && (
        <section>
          <h1 className="pb-5 text-2xl mt-10 m-5 font-semibold">
            Facebook Feed
          </h1>
          <div className=" w-fit mx-auto  ">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsrivanamamalaimuttofficial%2F&tabs=timeline&width=500px&height=900&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
              height="900"
              //   style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full min-w-[500px] max-w-[500px] mx-auto"
            ></iframe>
          </div>
        </section>
      )}
    </div>
  );
};

export default Section_2;
