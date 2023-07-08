import React, { useState } from "react";
import b_1 from "../../assets/img/landingPage/img1.jpeg";
import b_2 from "../../assets/img/landingPage/img2.jpeg";
import b_3 from "../../assets/img/landingPage/img3.jpeg";
import b_4 from "../../assets/img/landingPage/img4.jpeg";
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

export const Carousel2 = () => {
  const [activeImg, setAtiveImage] = useState(0);
  const items = [b_1, b_2, b_3, b_4, b_2];

  const responsive = [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
  ];

  return (
    <div className="my-5 ">
      <div className="relative">
        <Slider
          dots={true}
          slidesToShow={2}
          infinite={true}
          arrows={true}
          pauseOnHover={true}
          fade={false}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          className="w-full mx-auto"
          // dotsClass="slick-dots custom-dots"
          responsive={responsive}
        >
          {items?.map((img, i) => {
            return (
              <div className="px-5">
                <img
                  onClick={() => setAtiveImage(i)}
                  src={img}
                  alt="img"
                  className=" rounded-xl "
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
