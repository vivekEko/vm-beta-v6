import React from "react";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

// assets
import square_image from "../../assets/img/landingPage/26_EN.jpg";

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
        <section className="grid grid-cols-2 gap-10 bg-[#FDE9E3] p-5 place-items-center">
          {props?.apiData?.banner_data?.map((data, index) => {
            if (data?.type === "image") {
              return (
                <div className="">
                  <img src={square_image} alt="square_image" />
                </div>
              );
            }

            if (data?.type === "text") {
              return (
                <div className="p-5">
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
    </div>
  );
};

export default Section_2;
