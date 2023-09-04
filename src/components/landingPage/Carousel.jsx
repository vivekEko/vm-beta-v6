import React, { useState } from "react";
import b_1 from "../../assets/img/landingPage/b_1.png";
import b_2 from "../../assets/img/landingPage/b_2.png";
import b_3 from "../../assets/img/landingPage/b_3.png";
import b_4 from "../../assets/img/landingPage/b_4.png";
import c_1 from "../../assets/img/landingPage/c_1.jpeg";
import c_2 from "../../assets/img/landingPage/c_2.jpeg";
import c_3 from "../../assets/img/landingPage/c_3.jpeg";
import c_4 from "../../assets/img/landingPage/c_4.jpeg";
import Slider from "react-slick";

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
        className=" absolute top-[45%] right-[-10px] cursor-pointer z-50"
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
        className=" absolute top-[45%] left-[-10px] cursor-pointer z-50"
      >
        <img src="../prev_btn.svg" alt="next" />
      </div>
    </>
  );
}

export const Carousel = () => {
  const [activeImg, setAtiveImage] = useState(0);
  const items = [c_1, c_2, c_3, c_4, b_1, b_2, b_3, b_4, b_2];

  //   const responsive = [
  //     {
  //       breakpoint: 500,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //   ];

  return (
    <div className="mb-10">
      <div className="mb-5">
        <img
          src={items[activeImg]}
          alt="img"
          className="w-full rounded-xl transition-all"
        />
      </div>

      <div className="relative">
        <Slider
          dots={true}
          slidesToShow={4}
          infinite={true}
          arrows={true}
          pauseOnHover={true}
          fade={false}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          className="w-full mx-auto"
          // dotsClass="slick-dots custom-dots"
          // responsive={responsive}
        >
          {items?.map((img, i) => {
            return (
              <div className="px-5">
                <img
                  onClick={() => setAtiveImage(i)}
                  src={img}
                  alt="img"
                  className=" rounded-xl cursor-pointer"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
