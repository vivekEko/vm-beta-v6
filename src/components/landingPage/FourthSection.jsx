// react
import React from "react";

// assets
import ramanuja_jeeyar from "../../assets/img/landingPage/ramanuja_jeeyar.png";
import youtube_icon from "../../assets/img/landingPage/youtube_icon.png";
import file_icon from "../../assets/img/landingPage/file_icon.png";

const FourthSection = () => {
  return (
    <section className="bg-[#FFB507] pt-10 py-20 flex flex-col-reverse gap-5 min-h-screen md:flex-row-reverse border-b-[12px] border-[#942200] justify-between md:snap-start md:snap-always">
      <div className="flex justify-between flex-col gap-5 flex-1  ">
        <div className="md:py-20">
          <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl md:font-semibold">
            Sri Madhurakavi Vanamamalai Ramanuja Jeeyar Swami - 31st
          </h1>
          <p className="font-caladea text-center w-[80%] mx-auto mt-10 mb-5 md:text-left sm:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            accusantium magnam commodi explicabo hic laborum quae, id repellat.
            Magni nobis rerum inventore delectus in molestiae? Est amet commodi
            atque nam delectus. Ipsum molestiae ipsa consequuntur inventore
            quibusdam repellat praesentium consequatur harum facere cupiditate
            soluta iste, non quos voluptas dignissimos velit ut incidunt
            eligendi aspernatur quidem aperiam odio, nisi quam doloremque? Ad
            eos incidunt distinctio ut facilis quidem hic error quaerat? Facilis
            quod assumenda inventore distinctio molestias. Rerum, aliquid.
            Aliquid molestiae fuga necessitatibus expedita, officiis possimus
            rem debitis doloremque repellendus officia, iusto nobis ullam sequi
            dolorem et impedit doloribus accusamus. Fugit quisquam delectus
            ratione modi quos illum cupiditate, totam enim officia consequuntur
            et repellat. Provident unde at eius odit molestias commodi quod,
            ipsum perferendis dicta! Nesciunt, eligendi asperiores ab cupiditate
            eum doloremque obcaecati aperiam vero inventore corporis laborum
          </p>

          <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
            <button className="p-3 px-6 bg-[#282626] text-white w-fit active:scale-95 transition-all ">
              READ MORE
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
          <div>
            <img src={youtube_icon} alt="youtube" />
            <h3 className="uppercase sm:text-lg xl:text-xl">
              Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
            </h3>
          </div>

          <div>
            <img src={file_icon} alt="youtube" className="" />
            <h3 className="uppercase sm:text-lg xl:text-xl">
              Thaniyan and Vazhi thirunamam
            </h3>
          </div>
        </div>

        <div className="md:hidden flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
          <div>
            <img src={youtube_icon} alt="youtube" />
            <h3 className="uppercase sm:text-lg xl:text-xl">
              Watch Ponnadikkal Jeeyar’s Prapathi &amp; Mangalasasanam
            </h3>
          </div>

          <div>
            <img src={file_icon} alt="file" className="" />
            <h3 className="uppercase sm:text-lg xl:text-xl">
              Thaniyan and Vazhi thirunamam
            </h3>
          </div>
        </div>
      </div>

      <div className="flex gap-5 flex-1 ">
        <img
          src={ramanuja_jeeyar}
          alt="ramanuja jeeyar"
          className="mx-auto w-full max-w-[500px] xl:max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
};

export default FourthSection;
