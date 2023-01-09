// react
import React from "react";

// assets
import idol from "../../assets/img/landingPage/idol.png";
import youtube_icon from "../../assets/img/landingPage/youtube_icon.png";
import file_icon from "../../assets/img/landingPage/file_icon.png";

const ThirdSection = () => {
  return (
    <section className="bg-[#FFE600] pt-10 flex gap-5 flex-col  justify-between md:flex-row border-b-[9px] border-[#942200] md:snap-start md:snap-always min-h-screen">
      <div className="flex justify-between flex-col  gap-5  py-20 w-full">
        <div className="">
          <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl md:font-semibold">
            ‘Ponnadikkal Jeeyar’ who established the vanamamalai mutt
          </h1>
          <p className="font-caladea text-center md:text-left w-[80%] mx-auto mt-10 mb-5 sm:text-lg xl:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod odio
            dicta, temporibus magnam ea eius quas iure illo consequuntur nostrum
            tempore laudantium, blanditiis, minima possimus velit? Id
            perspiciatis, dolores reiciendis aspernatur voluptate quod
            consectetur rerum. Quos, voluptatem. Harum error quis sapiente
            itaque, magnam dolores tenetur repellat labore adipisci ab at
            numquam iure accusantium minima reprehenderit dolorum est, eum
            soluta nesciunt facere temporibus. Adipisci debitis rerum assumenda
            necessitatibus iure inventore temporibus minus distinctio sed omnis
            culpa magni ducimus, similique ab esse natus officia facilis earum
            accusantium maxime officiis! Labore animi impedit fuga recusandae
            alias, voluptate repellendus suscipit consequatur assumenda quidem
            qui et sunt facere rerum doloribus beatae mollitia asperiores cumque
            nesciunt vitae nemo corporis blanditiis nobis? Error dolores quas
          </p>

          <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
            <button className="p-3 px-10 text-lg mt-20 bg-[#282626] text-white w-fit  active:scale-95 transition-all">
              READ MORE
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
          <div>
            <img src={youtube_icon} alt="youtube" />
            <h3 className="uppercase   sm:text-lg xl:text-xl">
              Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
            </h3>
          </div>

          <div>
            <img src={file_icon} alt="file" className="" />
            <h3 className="uppercase   sm:text-lg xl:text-xl">
              Thaniyan and Vazhi thirunamam
            </h3>
          </div>
        </div>
      </div>

      <div className="flex gap-5  w-full">
        <div className="flex-1 pl-10 md:hidden">
          <img src={youtube_icon} alt="youtube" />
          <h3 className="uppercase  sm:text-lg xl:text-xl">
            Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
          </h3>

          <img src={file_icon} alt="file" className="mt-5" />
          <h3 className="uppercase sm:text-lg xl:text-xl">
            Thaniyan and Vazhi thirunamam
          </h3>
        </div>
        <div className="flex-1 overflow-hidden  flex justify-end items-end ">
          <img
            src={idol}
            alt="ponnadikkal jeeyar"
            className="translate-y-2 md:translate-y-5  w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
