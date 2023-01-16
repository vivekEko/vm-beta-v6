import React, { useEffect, useState } from "react";
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import leftArrow from "../assets/img/galleryPage/left_button.svg";
import rightArrow from "../assets/img/galleryPage/right_button.svg";

// youtube
import { Link } from "react-router-dom";
import YouTube from "react-youtube";
// carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SecondaryLayout_2 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [pageData, setPageData] = useState(null);
  const [selectedContent, setSelectedContent] = useState();
  // const pageData = {
  //   banner: {
  //     heading: "Gallery ",
  //     image: "",
  //   },

  //   carousel_data: [
  //     {
  //       video_title: "Title of video 1",
  //       video_id: "cPBReTG66lQ",
  //     },

  //     {
  //       video_title: "Title of video 2",
  //       video_id: "Xi3s58ECG2I",
  //     },

  //     {
  //       video_title: "Title of video 3",
  //       video_id: "yJK06KlUk28",
  //     },

  //     {
  //       video_title: "Title of video 4",
  //       video_id: "xEaq3YQudgQ",
  //     },

  //     {
  //       video_title: "Title of video 5",
  //       video_id: "_wxF4jo9vdg",
  //     },

  //     {
  //       video_title: "Title of video 6",
  //       video_id: "N0wv4Xqz7oQ",
  //     },
  //   ],

  //   content: [
  //     {
  //       title: "Album 1",
  //       content_data: [
  //         {
  //           year: "2000",
  //           image: "",
  //           link: "/album_details",
  //         },

  //         {
  //           year: "2001",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2002",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2003",
  //           image: "",
  //           link: "/album_details",
  //         },
  //       ],
  //     },

  //     {
  //       title: "Album 2",
  //       content_data: [
  //         {
  //           year: "2000",
  //           image: "",
  //           link: "/album_details",
  //         },

  //         {
  //           year: "2001",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2002",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2003",
  //           image: "",
  //           link: "/album_details",
  //         },
  //       ],
  //     },

  //     {
  //       title: "Album 3",
  //       content_data: [
  //         {
  //           year: "2000",
  //           image: "",
  //           link: "/album_details",
  //         },

  //         {
  //           year: "2001",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2002",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2003",
  //           image: "",
  //           link: "/album_details",
  //         },
  //       ],
  //     },

  //     {
  //       title: "Album 4",
  //       content_data: [
  //         {
  //           year: "2000",
  //           image: "",
  //           link: "/album_details",
  //         },

  //         {
  //           year: "2001",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2002",
  //           image: "",
  //           link: "/album_details",
  //         },
  //         {
  //           year: "2003",
  //           image: "",
  //           link: "/album_details",
  //         },
  //       ],
  //     },
  //   ],
  // };

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "gallery_page")
      .then(function (response) {
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // carousel buttons
  const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className={` ${className} `} onClick={onClick}>
        <img
          src={leftArrow}
          alt="previous"
          className=" -translate-x-0 md:-translate-x-5 -translate-y-8   min-w-[25px] hidden md:block md:min-w-[50px] "
        />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img
          src={rightArrow}
          alt="next"
          className=" -translate-x-1  -translate-y-8   min-w-[25px] hidden md:block md:min-w-[50px]"
        />
      </div>
    );
  };

  const opts = {
    height: "300",
    width: "100%",
  };

  useEffect(() => {
    console.log("selectedContent", selectedContent);
  }, [selectedContent]);

  return (
    <section>
      {/* banner */}
      <div
        className="bg-[#D9D9D9] bg-no-repeat bg-cover bg-right-bottom min-h-[500px]"
        style={{
          backgroundImage:
            "url(" + VITE_BASE_LINK + pageData?.banner?.image + ")",
        }}
      >
        <Header_2 />

        <div className="w-[90%] mx-auto">
          <h1 className="pb-5 md:pb-8  pt-60  uppercase text-3xl md:text-4xl xl:text-5xl lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   font-bold text-white ">
            {pageData?.banner?.heading}
          </h1>
        </div>
      </div>

      {/* carousel  */}
      <div className="my-5 z-0">
        <Slider
          dots={false}
          slidesToShow={3}
          fade={false}
          infinite
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          className="w-full  md:w-[90%] mx-auto"
          // dotsClass="slick-dots custom-dots"
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                dots: true,
              },
            },
          ]}
        >
          {pageData?.carousel_data?.map((data, index) => {
            return (
              <div key={index} className=" p-5 h-[350px] ">
                <YouTube
                  // videoId={data?.video_id}
                  videoId={
                    data?.video_id.split("/").reverse()[0].includes("watch?v=")
                      ? data?.video_id.split("watch?v=").reverse()[0]
                      : data?.video_id.split("/").reverse()[0]
                  }
                  opts={opts}
                  className="w-full  "
                />
                <h1 className="text-lg md:text-xl py-2">{data?.video_title}</h1>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* content */}
      <div>
        <div className="  pt-10 md:pt-20 w-[80%] md:w-[90%] mx-auto ">
          {/* content flex */}
          {pageData?.content?.map((mainData, mainIndex) => {
            return (
              <div
                key={mainIndex}
                className="py-10 border-y-[#0000007a] border-t "
              >
                <div className="flex justify-between items-center">
                  <h1 className="uppercase text-xl md:text-2xl xl:text-3xl">
                    {mainData?.title}
                  </h1>

                  {/* <Link to={mainData?.id.toString()}>
                    <button className=" p-2 px-4 md:p-3 md:px-10  text-base md:text-lg bg-[#FC8D0B] text-white w-fit  active:scale-95 transition-all">
                      View All
                    </button>
                  </Link> */}
                </div>

                <div className="grid grid-cols-4 justify-between w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8  xl:gap-10 2xl:gap-12 py-10">
                  {mainData?.content_data?.map((data) => {
                    return (
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          setSelectedContent({
                            image_link: VITE_BASE_LINK + data?.image,
                            image_name: data?.name,
                            image_desc: data?.details,
                          })
                        }
                      >
                        <div className="aspect-video flex justify-center items-center  bg-[#D9D9D9]">
                          <img
                            src={VITE_BASE_LINK + data?.image}
                            alt={data?.name}
                            className="h-full w-full"
                          />
                        </div>
                        <h1 className="text-center pt-2 text-xl md:text-2xl xl:text-3xl">
                          {data?.name}
                        </h1>
                      </div>
                    );
                  })}
                </div>

                <div
                  onClick={() => setSelectedContent(null)}
                  className={` ${
                    selectedContent ? "block" : "hidden"
                  } fixed inset-0  bg-opacity-40 bg-black z-[15000]`}
                ></div>
                <div
                  className={` ${
                    selectedContent ? "block" : "hidden"
                  }  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  z-[15500] bg-white rounded-md p-10 text-center `}
                >
                  <div className="">
                    <img
                      src={selectedContent?.image_link}
                      alt={selectedContent?.image_name}
                    />
                  </div>

                  <div>
                    <h1 className="text-xl capitalize my-5">
                      {selectedContent?.image_name}
                    </h1>
                    <p className="font-normal text-justify font-caladea">
                      {selectedContent?.image_desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_2;
