import React, { useState } from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

// assets
import square_image from "../../assets/img/landingPage/26_EN.jpg";
import square_image1 from "../../assets/img/landingPage/27_EN.jpg";
import square_image2 from "../../assets/img/landingPage/28_EN.jpg";
import download_icon from "../../assets/img/landingPage/download.svg";
// import arrow_right from "../../assets/img/landingPage/arrow-right-eduation-section.svg";
import Slider from "react-slick";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import cross from "../../assets/img/landingPage/cross.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />

      <div
        onClick={onClick}
        className=" absolute top-[30%] right-[-10px] cursor-pointer z-50"
      >
        <img src="../next_btn.svg" alt="next" />
      </div>
    </>
  );
}

function PreviousBtn(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />

      <div
        onClick={onClick}
        className=" absolute top-[30%] left-[-10px] cursor-pointer z-50"
      >
        <img src="../prev_btn.svg" alt="next" />
      </div>
    </>
  );
}

const Section_2 = (props) => {
  // useEffect(() => {
  //   console.log(props?.apiData);
  // }, [props]);

  // const pageName = "laughingcolours";
  const pageName = "srivanamamalaimuttofficial";
  const responsive = [
    // {
    //   breakpoint: 1800,
    //   settings: {
    //     slidesToShow: 3,
    //   },
    // },
    // {
    //   breakpoint: 1604,
    //   settings: {
    //     slidesToShow: 2,
    //   },
    // },
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //   },
    // },

    // {
    //   breakpoint: 900,
    //   settings: {
    //     slidesToShow: 2,
    //   },
    // },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ];
  const card_responsive = [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 3,
      },
    },
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
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 600,
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

  const hero_responsive = [
    {
      breakpoint: 2500,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1800,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 1604,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1100,
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
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ];

  const opts = {
    height: "200",
    width: "100%",
  };

  const newHeroData = {
    hero_banner: {
      img: "/",
      content: [
        "HH Vanamamalai Ramanuja Jeeyar swami on Yatra to Naimisaranyam and Nepal.",
      ],
    },

    hero_carousel: [
      {
        image: "../reached_moradabad.svg",
        subtitle:
          "Sri Madhurakavi Vanamamalai Ramanuja Jeeyar swami at Moradabad.",
      },
      {
        image: "../reached_luchnow.svg",
        subtitle:
          "Sri Madhurakavi Vanamamalai Ramanuja Jeeyar swami visited Sri Kanchi Kamakodi Swami's Patasalai and blessed the Vidhyarthis - at Lucknow",
      },

      {
        image: "../reached_chitrakoot.svg",
        subtitle:
          "Sri Vanamamalai Ramanuja Jeeyar swami at Mukharavind Mandhir - Chitrakoot ",
      },
      {
        image: "../reached_chilbila.svg",
        subtitle:
          "Sri Madhurakavi Vanamamalai Ramanuja Jeeyar swami has arrived Chilbila - Uttar Pradesh.",
      },
      {
        image: "../reached_ayodhya.svg",
        subtitle:
          "Sri Vanamamalai Ramanuja Jeeyar swami has reached Ayodhya - Sri Thothadri Mutt",
      },
      {
        image: "../carousel-3.svg",
        subtitle: "Jeeyar swami reached Itarsi - Madhyapradesh",
      },
      {
        image: "../carousel-2.svg",

        subtitle: " Jeeyar swmai has reached Wardha - Maharashtra",
      },
      {
        image: "../carousel-1.svg",
        subtitle:
          "Vanamamalai Ramanuja Jeeyar swami arrives at Sri Ranganath swami temple - Secunderabad.",
      },

      {
        image: "../carousel-4.svg",
        subtitle:
          "HH Vanamamalai Ramanuja Jeeyar swami arrives at Vijayawada, as part of Naimisaranyam Yatra",
      },

      {
        image: "../carousel-5.svg",
        subtitle: " Vanamamalai Theppa Uthsavam Day 1 (Plavanothsavam)",
      },
    ],
  };

  const [admissionOverlay, setAdmissionOverlay] = useState(false);
  const admissionForm = useRef();
  return (
    <div>
      {/* {props?.apiData?.layout === "hero" && (
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
              fade={false}
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
      )} */}

      {props?.apiData?.layout === "banner" && (
        <>
          {/* newsletter hero */}
          <section className="p-5 hidden lg:block">
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 items-center">
              {/* image */}
              <div className="bg-gray-100 w-full 2xl:flex-[0.6] rounded-lg ">
                <img src="../india.svg" className="w-full" alt="" />
              </div>
              <div className="w-full 2xl:flex-[0.4]">
                {/* text */}
                <div className="font-inter space-y-5  ">
                  {newHeroData?.hero_banner?.content?.map((data, index) => {
                    return <div key={index}>{data}</div>;
                  })}
                </div>

                {/* <div className="mt-5">
                  <button className="bg-[#FF440D] bg-opacity-80 text-white p-3 rounded-lg font-inter px-10 mx-auto md:mx-0 active:scale-95 transition-all md:ml-auto block">
                    Read More
                  </button>
                </div> */}
              </div>
            </div>
          </section>
          {/* newsletter slider */}
          <section className="hidden lg:block mb-5">
            <div className=" w-full  pt-5 ">
              <Slider
                // dots={true}
                slidesToShow={4}
                infinite
                arrows={true}
                // autoplay={true}
                // autoplaySpeed={1500}
                pauseOnHover={true}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                className="w-full  md:w-[100%] mx-auto "
                // dotsClass="slick-dots custom-dots"
                responsive={hero_responsive}
              >
                {newHeroData?.hero_carousel?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center px-5 mr-5 "
                    >
                      <div className="mb-5">
                        <div className="aspect-square rounded-lg bg-gray-100  mx-auto">
                          <img src={data?.image} className="w-full" alt="" />
                        </div>
                      </div>
                      <p className="text-center text-sm">{data?.subtitle}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </section>
          {/* admission */}
          <div className="hidden lg:block">
            {/* admission  */}
            <section className=" w-[97%] mx-auto bg-gray-300 rounded-3xl overflow-hidden mb-5">
              <img
                src="../pathshala_banner_1.png"
                className="w-full  cursor-pointer "
                alt="admission banner"
                onClick={() => setAdmissionOverlay(true)}
              />
            </section>

            {admissionOverlay && (
              <>
                {/* admission overlay */}
                <div
                  onClick={() => setAdmissionOverlay(false)}
                  className="fixed z-[10000] inset-0 bg-black bg-opacity-20"
                ></div>

                {/* admission modal */}
                <form
                  ref={admissionForm}
                  className="fixed z-[21500] bg-[#FFD29E] p-5 min-h-[250px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] rounded-2xl "
                  onSubmit={(e) => {
                    e.preventDefault();
                    emailjs
                      .sendForm(
                        "service_a9xcxdb",
                        "template_t6mwhui",
                        admissionForm.current,
                        "ikPfuo0YPLOJXtysc"
                      )
                      .then(
                        (result) => {
                          console.log("form send", result);
                          alert("Details submitted successfully!");
                          setAdmissionOverlay(false);
                        },
                        (error) => {
                          console.log("form error", error);
                          alert("Something went wrong, please submit again.");
                        }
                      );
                  }}
                >
                  <div className="flex justify-end">
                    <button onClick={() => setAdmissionOverlay(false)}>
                      <img
                        src={cross}
                        alt="close"
                        className="w-[25px] cursor-pointer"
                      />
                    </button>
                  </div>

                  <div className="flex justify-center gap-5">
                    <label htmlFor="first_name" className="block w-full">
                      <h1 className="mb-1">First Name</h1>
                      <input
                        name="first_name"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                      />
                    </label>
                    <label htmlFor="last_name" className="block w-full">
                      <h1 className="mb-1">Last Name</h1>
                      <input
                        name="last_name"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
                      />
                    </label>
                  </div>
                  <label htmlFor="email" className="block w-full mt-5">
                    <h1 className="mb-1">Email</h1>
                    <input
                      name="email"
                      type="email"
                      className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                    />
                  </label>
                  <div className="flex justify-center gap-5 mt-5">
                    <label htmlFor="isd" className="block w-full">
                      <h1 className="mb-1">ISD Code</h1>
                      <input
                        name="isd"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                        placeholder="+91"
                        defaultValue="+91"
                      />
                    </label>
                    <label htmlFor="phone" className="block w-full">
                      <h1 className="mb-1">Phone Number</h1>
                      <input
                        name="phone"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FC8D0B] mt-5 rounded-lg  p-2 uppercase text-lg w-full text-white active:scale-95 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Vidyapeetham */}
          <section className="p-5 pt-0 ">
            <div className=" border-[#FBBCA9] border rounded-3xl bg-[#FFF4F0] flex flex-col xl:flex-row items-center gap-5">
              <img
                src="../pathshala_section_img.svg"
                alt=""
                className="w-full "
              />

              <div className="w-full p-5">
                <h1 className="text-[#830300] uppercase font-semibold text-xl mb-5">
                  Vanamahachala VidhyaPeetam
                </h1>
                <div className="flex items-start gap-3   ">
                  <div className="flex items-center   ">
                    <div className="bg-[#B5090E] aspect-square translate-y-2 w-[10px]  rounded-full"></div>
                  </div>
                  <h3 className=" text-[#B5090E] font-inter">
                    The significance of Patasala on Ramanuja 1000{" "}
                  </h3>
                </div>

                <div className="flex items-start gap-3   ">
                  <div className="flex items-start h-full   ">
                    <div className="bg-[#B5090E] aspect-square translate-y-2 w-[10px]  rounded-full"></div>
                  </div>
                  <h3 className=" text-[#B5090E] font-inter">
                    Role of our Mutt sishya and abhimani on this Project
                  </h3>
                </div>

                <div className="flex items-start gap-3   ">
                  <div className="flex items-center   ">
                    <div className="bg-[#B5090E] aspect-square translate-y-2 w-[10px]  rounded-full"></div>
                  </div>
                  <h3 className=" text-[#B5090E] font-inter">
                    The need of collecting funds and our perspective on this.
                  </h3>
                </div>

                <div className="flex items-start gap-3   ">
                  <div className="flex items-center   ">
                    <div className="bg-[#B5090E] aspect-square translate-y-2 w-[10px]  rounded-full"></div>
                  </div>
                  <h3 className=" text-[#B5090E] font-inter">
                    Unique opportunity to have our family name inscribed on a
                    class room on the Patasala
                  </h3>
                </div>

                <div className="my-5 flex justify-end">
                  <Link to="/sub_page/vn_education/2" className="">
                    <button className="flex items-center gap-3">
                      <h2 className="text-[#830300] block text-lg">
                        Read More
                      </h2>
                      <img
                        src="../arrow-right-eduation-section.svg"
                        alt=""
                        className="block"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* banner */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-5  p-5 place-items-center">
            {props?.apiData?.banner_data?.map((data, index) => {
              if (data?.type === "image") {
                return (
                  <div key={index} className=" w-full">
                    <img
                      src={VITE_BASE_LINK + data?.image}
                      alt="square_image"
                      className="w-full"
                    />
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
          {/* Download buttons */}
          <section className="font-caladea text-lg flex gap-5 justify-between mx-5 flex-wrap">
            <a
              href={VITE_BASE_LINK + "media/img/calender.pdf"}
              target="_blank"
              rel="noreferer"
              className="bg-[#C97A15] rounded-lg  text-white p-4 text-sm flex justify-center gap-3 items-center flex-1"
            >
              <img src={download_icon} className="w-[15px]" alt="download" />
              <h1>Calendar</h1>
            </a>
            <a
              href={VITE_BASE_LINK + "media/img/newsletter.pdf"}
              target="_blank"
              rel="noreferer"
              className="bg-[#C97A15] rounded-lg  text-white p-4 text-sm flex justify-center gap-3 items-center flex-1"
            >
              <img src={download_icon} className="w-[15px]" alt="download" />
              <h1>Newsletter</h1>
            </a>
            <a
              href={VITE_BASE_LINK + "media/img/thaniyan.pdf"}
              target="_blank"
              rel="noreferer"
              className="bg-[#C97A15] rounded-lg text-white p-4 text-sm flex justify-center gap-3 items-center flex-1 "
            >
              <img src={download_icon} className="w-[15px]" alt="download" />
              <div>
                <h1 className="w-max"> Vanamamalaimutt Thaniyan </h1>
              </div>
            </a>
          </section>
        </>
      )}

      {props?.apiData?.layout === "youtube_events" && (
        <>
          {/* newsletter hero */}
          <section className="p-5 lg:hidden">
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-5 items-center">
              {/* image */}
              <div className="bg-gray-100 w-full 2xl:flex-[0.6] rounded-lg ">
                <img src="../india.svg" className="w-full" alt="" />
              </div>
              <div className="w-full 2xl:flex-[0.4]">
                {/* text */}
                <div className="font-inter space-y-5  ">
                  {newHeroData?.hero_banner?.content?.map((data, index) => {
                    return <div key={index}>{data}</div>;
                  })}
                </div>

                {/* <div className="mt-5">
                  <button className="bg-[#FF440D] bg-opacity-80 text-white p-3 rounded-lg font-inter px-10 mx-auto md:mx-0 active:scale-95 transition-all md:ml-auto block">
                    Read More
                  </button>
                </div> */}
              </div>
            </div>
          </section>
          {/* newsletter slider */}
          <section className="block lg:hidden">
            <div className="   pt-5  w-[90%] mx-auto">
              <Slider
                // dots={true}
                slidesToShow={4}
                infinite
                arrows={true}
                // autoplay={true}
                // autoplaySpeed={1500}
                pauseOnHover={true}
                prevArrow={<PreviousBtn />}
                nextArrow={<NextBtn />}
                className="w-full  md:w-[100%] mx-auto "
                // dotsClass="slick-dots custom-dots"
                responsive={hero_responsive}
              >
                {newHeroData?.hero_carousel?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center px-5 mr-5 "
                    >
                      <div className="mb-5">
                        <div className="aspect-square rounded-lg bg-gray-100  mx-auto">
                          <img src={data?.image} className="w-full" alt="" />
                        </div>
                      </div>
                      <p className="text-center text-sm">{data?.subtitle}</p>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </section>

          {/* admission */}
          <section className="lg:hidden mt-5">
            {/* admission  */}
            <section className=" w-[97%] mx-auto bg-gray-300 rounded-3xl overflow-hidden mb-5">
              <img
                src="../pathshala_banner_1.png"
                className="w-full  cursor-pointer"
                alt="admission banner"
                onClick={() => setAdmissionOverlay(true)}
              />
            </section>

            {admissionOverlay && (
              <>
                {/* admission overlay */}
                <div
                  onClick={() => setAdmissionOverlay(false)}
                  className="fixed z-[10000] inset-0 bg-black bg-opacity-20"
                ></div>

                {/* admission modal */}
                <form
                  ref={admissionForm}
                  className="fixed z-[21500] bg-[#FFD29E] p-5 min-h-[250px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] rounded-2xl "
                  onSubmit={(e) => {
                    e.preventDefault();
                    emailjs
                      .sendForm(
                        "service_a9xcxdb",
                        "template_t6mwhui",
                        admissionForm.current,
                        "ikPfuo0YPLOJXtysc"
                      )
                      .then(
                        (result) => {
                          console.log("form send", result);
                          alert("Details submitted successfully!");
                          setAdmissionOverlay(false);
                        },
                        (error) => {
                          console.log("form error", error);
                          alert("Something went wrong, please submit again.");
                        }
                      );
                  }}
                >
                  <div className="flex justify-end">
                    <button onClick={() => setAdmissionOverlay(false)}>
                      <img
                        src={cross}
                        alt="close"
                        className="w-[25px] cursor-pointer"
                      />
                    </button>
                  </div>

                  <div className="flex justify-center gap-5">
                    <label htmlFor="first_name" className="block w-full">
                      <h1 className="mb-1">First Name</h1>
                      <input
                        name="first_name"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                      />
                    </label>
                    <label htmlFor="last_name" className="block w-full">
                      <h1 className="mb-1">Last Name</h1>
                      <input
                        name="last_name"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
                      />
                    </label>
                  </div>
                  <label htmlFor="email" className="block w-full mt-5">
                    <h1 className="mb-1">Email</h1>
                    <input
                      name="email"
                      type="email"
                      className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                    />
                  </label>
                  <div className="flex justify-center gap-5 mt-5">
                    <label htmlFor="isd" className="block w-full">
                      <h1 className="mb-1">ISD Code</h1>
                      <input
                        name="isd"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] border rounded-lg"
                        placeholder="+91"
                        defaultValue="+91"
                      />
                    </label>
                    <label htmlFor="phone" className="block w-full">
                      <h1 className="mb-1">Phone Number</h1>
                      <input
                        name="phone"
                        type="text"
                        className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-[#FC8D0B] mt-5 rounded-lg  p-2 uppercase text-lg w-full text-white active:scale-95 transition-all"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </section>
          {/* yt */}
          <section className="pb-5 lg:hidden">
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

                      <h1 className="py-2">{data?.yt_title}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* {props?.apiData?.layout === "small_banner" && (
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
      )} */}

      {/* {props?.apiData?.layout === "cards" && (
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
              responsive={responsive_1}
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
      )} */}

      {props?.apiData?.layout === "facebook" && (
        <>
          <section className="px-5 mt-5 sm:hidden">
            <div className="   flex justify-center items-center  ">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageName}%2F&tabs=timeline&width=350px&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
                height="600"
                width="350"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className=" w-full max-w-[350px]  mx-auto"
              ></iframe>
            </div>
          </section>
          <section className="px-5 mt-5 hidden sm:block lg:hidden">
            <div className="   flex justify-center items-center  ">
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageName}%2F&tabs=timeline&width=500px&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId`}
                height="600"
                width="500"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                className=" w-full max-w-[500px]  mx-auto"
              ></iframe>
            </div>
          </section>
        </>
      )}

      {props?.apiData?.layout === "jeeyars" && (
        <section className="py-5 pb-10 rounded-lg my-5 bg-[#FDE9E3]">
          <div className=" w-full">
            <Slider
              dots={true}
              slidesToShow={4}
              infinite
              arrows={false}
              autoplay={true}
              autoplaySpeed={1500}
              pauseOnHover={true}
              //   prevArrow={<PreviousBtn />}
              //   nextArrow={<NextBtn />}
              className="w-full  md:w-[100%] mx-auto "
              // dotsClass="slick-dots custom-dots"
              responsive={card_responsive}
            >
              {props?.apiData?.jeeyars?.map((data, index) => {
                return (
                  <div key={index} className="px-5">
                    <div
                      // to={
                      //   "/sub_page/" +
                      //   props?.apiData?.call_link +
                      //   "/" +
                      //   data?.id
                      // }
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
