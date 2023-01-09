// react
import React from "react";
// assets
import moolavar_drawing from "../../assets/img/landingPage/second_section_img1.png";
import perumal_thayar_andal from "../../assets/img/landingPage/second_section_img2.png";

const SecondSection = () => {
  return (
    <section className="bg-[#7CC0F1]  pt-20 border-b-[12px] border-[#942200] md:snap-start md:snap-always h-screen">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="uppercase text-[#191689] text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl  font-semibold text-center">
            Sri Vanamamalai divyadesam
          </h1>
          <h2 className="uppercase text-[#191689] text-xl text-center my-5 w-[80%] mx-auto  sm:text-lg lg:text-xl xl:text-2xl ">
            Sri varamangai nachiyar sametha sri deivanayaga perumal
          </h2>

          <p
            className="font-caladea text-center w-[80%] md:max-w-[70%]
      lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-5 sm:text-lg xl:text-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus
            laoreet pretium. Ut sit amet finibus metus, nec cursus lacus.{" "}
          </p>

          <button className="p-3 px-10 text-lg mt-20 bg-[#282626] text-white w-fit mx-auto block active:scale-95 transition-all">
            <span>READ MORE</span>
          </button>
        </div>

        <div className="mt-5 flex items-end justify-between gap-5">
          <div className="w-full">
            <img
              src={moolavar_drawing}
              alt="moolavar drawing"
              className="w-full"
            />
          </div>
          <div className="overflow-hidden hidden md:block w-full ">
            <img
              src={perumal_thayar_andal}
              alt="perumal thayar andal"
              className="w-full translate-y-8 translate-x-8 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
