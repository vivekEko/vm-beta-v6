import React, { useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

// assets
import square_image from "../../assets/img/landingPage/26_EN.jpg";
import square_image1 from "../../assets/img/landingPage/27_EN.jpg";
import square_image2 from "../../assets/img/landingPage/28_EN.jpg";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const Section_2 = (props) => {
  // const pageName = "laughingcolours";
  const pageName = "srivanamamalaimuttofficial";
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
        <section className="pb-10">
          <div className=" w-full">
            <Slider
              dots={true}
              slidesToShow={1}
              infinite
              arrows={false}
              autoplay={true}
              autoplaySpeed={5000}
              pauseOnHover={true}
              fade={true}
              //   prevArrow={<PreviousBtn />}
              //   nextArrow={<NextBtn />}
              className="w-full mx-auto"
              // dotsClass="slick-dots custom-dots"
              responsive={responsive}
            >
              {props?.apiData?.hero_data?.map((data, index) => {
                return (
                  <div key={index} className="w-full">
                    <img
                      src={VITE_BASE_LINK + data?.img}
                      alt=""
                      className="w-full"
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </section>
      )}
      {props?.apiData?.layout === "banner" && (
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5  p-5 place-items-center">
          {props?.apiData?.banner_data?.map((data, index) => {
            if (data?.type === "image") {
              return (
                <div key={index} className="">
                  <img src={VITE_BASE_LINK + data?.image} alt="square_image" />
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
        <section className="py-5 lg:hidden">
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
            <img
              src={VITE_BASE_LINK + props?.apiData?.image}
              alt=""
              className="w-full rounded-xl h-full"
            />
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
        <section className="hidden">
          <h1 className="pb-5 text-2xl mt-10 m-5 font-semibold">
            Facebook Feed
          </h1>
          <div className=" w-fit  mx-auto  ">
            <iframe
              src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageName}%2F&tabs=timeline&width=300px&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
              height="500"
              //   style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className="w-full  max-w-[500px] mx-auto "
            ></iframe>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "jeeyars" && (
        <section className="py-10">
          <div className=" w-full">
            <Slider
              dots={true}
              slidesToShow={3}
              infinite
              arrows={false}
              autoplay={true}
              autoplaySpeed={1500}
              pauseOnHover={true}
              //   prevArrow={<PreviousBtn />}
              //   nextArrow={<NextBtn />}
              className="w-full  md:w-[100%] mx-auto "
              // dotsClass="slick-dots custom-dots"
              responsive={responsive}
            >
              {props?.apiData?.jeeyars?.map((data, index) => {
                return (
                  <div key={index} className="px-5">
                    <Link
                      to={
                        "/sub_page/" +
                        props?.apiData?.call_link +
                        "/" +
                        data?.id
                      }
                      className="aspect-video object-contain "
                    >
                      <div className="bg-[#FFFAE7] p-5 text-[#9A4D0F] custom-border">
                        <div className="bg-[#FFE8B1] aspect-[1/1] object-fill">
                          {data?.image && (
                            <img
                              src={VITE_BASE_LINK + data?.image}
                              alt={data?.name}
                              className="mx-auto h-full w-full "
                            />
                          )}
                        </div>
                        <div>
                          <h1 className="text-lg uppercase py-2 min-h-[90px]  ">
                            {data?.name}
                          </h1>
                          <div className="flex justify-between items-end text-[#830300] ">
                            <h2 className="text-2xl">
                              {data?.prefix + " " + data?.start_date}

                              {data?.end_date?.length > 0
                                ? " to " + data?.end_date
                                : ""}
                            </h2>
                            {data?.jeeyar_no ? (
                              <h1 className="text-2xl">
                                {data?.jeeyar_no}
                                <span className="text-sm uppercase ml-1">
                                  {data?.jeeyar_no_suffix}
                                </span>
                              </h1>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
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
