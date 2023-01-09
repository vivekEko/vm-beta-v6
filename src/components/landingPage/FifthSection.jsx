import React from "react";
import image1 from "../../assets/img/landingPage/fithsection_image_1.png";
import image2 from "../../assets/img/landingPage/fithsection_image_2.png";

const FifthSection = () => {
  return (
    <section className="h-screen md:snap-start md:snap-always pt-20 bg-[#AEF496] border-b-[12px] border-[#942200]">
      <div className="flex flex-col justify-between  gap-10 h-full ">
        <div>
          <h1 className="uppercase text-[#191689] text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl md:font-semibold text-center">
            Sri Vanamamalai divyadesam
          </h1>
          <h2 className="uppercase text-[#191689] sm:text-lg lg:text-xl xl:text-2xl text-center my-5 w-[80%] mx-auto font-semibold">
            Sri varamangai nachiyar sametha sri deivanayaga perumal
          </h2>

          <p
            className="font-caladea text-center w-[80%] md:max-w-[70%]
      lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-10 sm:text-lg xl:text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            molestiae eveniet vel, qui voluptatibus magnam quis. Aliquid iusto
            nobis, dignissimos minima suscipit, aliquam eum accusantium quam
            distinctio ipsa explicabo blanditiis veritatis accusamus inventore
            cupiditate, quia porro. Qui animi vitae ipsum, laborum explicabo
            autem blanditiis sit ad nisi cupiditate facere, provident amet cum
            reiciendis veritatis aperiam possimus consectetur! Fugiat tempore
            qui perferendis veritatis quibusdam odit rem, labore placeat facere
          </p>

          <button className="p-3 px-6 bg-[#282626] text-white w-fit mx-auto block active:scale-95 transition-all">
            <span>READ MORE</span>
          </button>
        </div>

        <div className="flex flex-col   md:flex-row justify-between">
          <img src={image1} alt="" className="w-full md:w-[50%]" />
          <img src={image2} alt="" className="w-[50%] hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
