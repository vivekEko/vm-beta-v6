import React, { useEffect, useState } from "react";
// routing
import { Link, useParams } from "react-router-dom";
// components
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import leftArrow from "../assets/img/galleryPage/left_button.svg";
import rightArrow from "../assets/img/galleryPage/right_button.svg";
import closeIcon from "../assets/img/galleryPage/cross.svg";

// routing
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SecondaryLayout_4 = () => {
  const [pageData, setPageData] = useState(null);
  const [selectedModal, setSelectedModal] = useState(false);
  const parameters = useParams();

  useEffect(() => {
    axios
      .post(VITE_BASE_LINK + "sub_album_page", {
        sub_album_name: parameters?.year,
        album_id: parameters?.album,
      })
      .then(function (response) {
        console.log("albumdetails :", response?.data);
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parameters]);

  // const pageData = {
  //   banner: {
  //     heading: "Gallery ",
  //     image: "",
  //   },

  //   album_banner: {
  //     p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque quam vitae ornare porta. Vivamus pretium eleifend risus laoreet pretium. ",

  //     image: "",
  //   },

  //   title: "2012",

  //   content: [
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },

  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //     {
  //       sub_heading: "SUBNAME",
  //       image: "",
  //     },
  //   ],
  // };

  return (
    <section className="">
      {/* banner */}
      <div className="bg-[#D9D9D9]">
        <Header_2 />

        <div className="w-[90%] mx-auto">
          <h1 className="pb-5 md:pb-8  pt-60  uppercase text-3xl md:text-4xl xl:text-5xl lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   font-bold text-[#292929] ">
            {pageData?.banner?.heading}
          </h1>
        </div>
      </div>

      {/* title */}
      <h1 className="uppercase text-xl md:text-2xl xl:text-3xl w-[90%] mx-auto pt-10">
        {pageData?.title}
      </h1>

      {/* album banner */}

      <div className="flex my-10 mx-auto w-[90%]">
        <div className="flex justify-center items-center">
          <img src={leftArrow} alt="previous" />
        </div>
        <div className="flex-1">
          <div className="max-w-[600px] mx-auto">
            <div className="h-[350px] bg-gray-200"></div>
            <p className="pt-10 font-caladea"> {pageData?.album_banner?.p}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={rightArrow} alt="next" />
        </div>
      </div>

      {/* content */}
      <div>
        <div className="    w-[90%] mx-auto pb-10 ">
          {/* content flex */}

          <div className="grid grid-cols-3 sm:grid-cols-4 2xl:grid-cols-5 justify-between w-full gap-2 sm:gap-4 md:gap-6 lg:gap-8  xl:gap-10 2xl:gap-12 py-10 ">
            {pageData?.content?.map((data, index) => {
              return (
                <div key={index} className="flex-1 mb-2 cursor-pointer">
                  <div onClick={() => setSelectedModal(data?.sub_heading)}>
                    <div className="aspect-square  bg-[#D9D9D9]"></div>
                    <h1 className="text-center pt-2 text-lg  md:text-xl xl:text-2xl">
                      {data?.sub_heading}
                    </h1>
                  </div>

                  {selectedModal === data?.sub_heading && (
                    <>
                      <div
                        className="bg-[#ffffffd2] inset-0 fixed z-[99999] "
                        onClick={() => setSelectedModal(null)}
                      ></div>

                      <div className="top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] fixed z-[100000] aspect-square flex justify-center items-center ">
                        <div>
                          <button
                            onClick={() => setSelectedModal(null)}
                            className="ml-auto block"
                          >
                            <img
                              src={closeIcon}
                              alt="close"
                              className="ml-auto"
                            />
                          </button>
                          <div className="bg-gray-400 w-[900px] aspect-video mx-auto"></div>
                          <h1 className="my-3 uppercase text-2xl text-center">
                            {" "}
                            {data?.sub_heading}
                          </h1>

                          <p className="my-2 font-caladea text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Id accusamus, dolorem modi quidem, quibusdam
                            neque reiciendis praesentium culpa quisquam
                            laboriosam numquam veritatis, saepe non? Debitis
                            fugiat beatae fugit, optio asperiores quis et ab
                            harum architecto deleniti saepe similique libero,
                            neque, eius consequuntur. Nobis ex earum architecto
                            et facilis hic odit quis molestias consequuntur
                            itaque, accusamus odio tenetur iste eveniet qui eius
                            unde! Sint blanditiis suscipit veritatis voluptates
                            autem illum corrupti distinctio, repellat ab. Iure
                            accusantium esse sequi velit atque, minima error sit
                            inventore veritatis culpa, quibusdam commodi. Eaque
                            dolorum optio fugiat nobis soluta nisi reprehenderit
                            pariatur odio iste doloremque! Rem quisquam vel
                            accusamus, inventore nihil animi voluptatibus
                            fugiat? Consequuntur dolorem natus vel fugiat maxime
                            voluptas quae eum nihil magnam totam. Distinctio
                            illo magni earum temporibus dolorem nam, veritatis
                            ipsum voluptates dignissimos. Recusandae facilis
                            obcaecati dolorum a perferendis aut, in modi! Iusto
                            ipsam rem, dignissimos maxime repellat eveniet nihil
                            aperiam voluptates ad eum praesentium totam itaque.
                            Veniam, iure? Quam commodi magnam vero voluptas,
                            iure, perferendis similique deserunt accusantium,
                            laboriosam obcaecati reiciendis quae excepturi hic
                            maiores. Non quam praesentium accusamus. Esse
                            aperiam accusamus sequi quaerat suscipit quos modi.
                            Repellat, sunt mollitia ut officiis magni aliquid
                            unde ducimus in, odio non id maiores?
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_4;
