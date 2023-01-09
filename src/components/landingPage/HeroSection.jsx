// react
import React from "react";
// import { Parallax, ParallaxLayer } from "react-parallax";

// assets
import landing_hero_section_idol from "../../assets/img/landingPage/ponnadikkal_jeeyar-2.png";
import scroll_icon from "../../assets/img/landingPage/scroll_icon.png";
import Header from "../globalComponents/Header";

const HeroSection = () => {
  return (
    <section className="md:snap-start md:snap-always overflow-y-hidden ">
      <div className="bg-hero-image h-screen bg-fixed bg-center bg-no-repeat bg-cover border-b-[14px] border-b-[#942200] ">
        {/* <ScrollParallax> */}
        {/* <Parallax pages={1.45}>
          <ParallaxLayer
            offset={0}
            speed={0.5}
            factor={2}
          > */}

        <div className="h-full flex flex-col justify-between items-center">
          <Header />
          <div className="flex justify-between flex-col h-full">
            <div className="mt-16 w-[90%] mx-auto flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase text-center font-medium bg-gradient-to-r to-[#630000] from-[#1400FF]  stroke-white stroke-2 bg-clip-text text-transparent text-stroke   md:min-h-[70px] xl:min-h-[90px] ">
                Sri Vanamamalai (Thothadri) Mutt
              </h1>
              <h2 className="text-white text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl text-center mt-3 md:mt-5 uppercase">
                Sri vanachala mahamuni parampara
              </h2>

              <p
                className="font-caladea sm:text-lg xl:text-xl   text-center mt-5 text-white sm:max-w-[80%] md:max-w-[70%]
      lg:max-w-[60%] xl:max-w-[50%] mx-auto"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                pellentesque quam vitae ornare porta. Vivamus pretium eleifend
                risus laoreet pretium. Ut sit amet finibus metus, nec cursus
                lacus.
              </p>
            </div>

            <div className="flex-1 flex justify-center items-end">
              <img
                src={landing_hero_section_idol}
                alt="ponnadikkal jeeyar"
                className="mx-auto w-full max-w-[500px] 2xl:max-w-[550px]"
              />
            </div>
          </div>

          <button className="absolute bottom-52 sm:bottom-5 md:bottom-20 right-5 ">
            <img src={scroll_icon} alt="scroll" className="w-[30px] " />
          </button>
        </div>
        {/* </ParallaxLayer>
        </Parallax> */}
        {/* </ScrollParallax> */}
      </div>
    </section>
  );
};

export default HeroSection;
