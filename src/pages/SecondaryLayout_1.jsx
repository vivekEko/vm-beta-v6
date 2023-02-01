import React, { useEffect, useState } from "react";
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import { useParams } from "react-router-dom";
// recoil
import { useRecoilState } from "recoil";
import currentCallPathAtom from "../recoil/helpers/currentCallPathAtom";
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SecondaryLayout_1 = () => {
  // global variables
  const [currentCallPath] = useRecoilState(currentCallPathAtom);
  // Local variables
  const [activeTab, setActiveTab] = useState(0);
  const [pageData, setPageData] = useState(null);

  const parameters = useParams();

  useEffect(() => {
    axios
      .post(VITE_BASE_LINK + parameters?.call_link, {
        id: parameters?.page_id,
      })
      .then(function (response) {
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parameters]);

  return (
    <section>
      {/* banner */}
      <div
        className="bg-[#D9D9D9] bg-no-repeat bg-cover bg-center min-h-[500px]"
        style={{
          backgroundImage:
            "url(" + VITE_BASE_LINK + pageData?.banner?.image + ")",
        }}
      >
        <Header_2 />

        <div className="w-[90%] mx-auto">
          <h1 className="pb-5 md:pb-8  pt-60  uppercase text-3xl md:text-4xl xl:text-5xl lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   font-bold text-white  ">
            {pageData?.banner?.heading}
          </h1>
        </div>
      </div>

      {/* content */}
      <div>
        <div className="  pt-10 md:pt-20 ">
          {/* content title */}
          <div className="w-[90%] mx-auto">
            <h2 className="text-[#AB0000] uppercase text-2xl md:text-3xl xl:text-4xl font-semibold">
              {pageData?.content?.title}
            </h2>
            <h3 className="text-[#292929] text-lg md:text-xl xl:text-2xl">
              {pageData?.content?.sub_title}
            </h3>
          </div>

          {/* content flex */}
          <div className=" mt-10 flex flex-col md:flex-row gap-5 md:w-[95%] ml-auto pb-16 ">
            <div className="md:w-[30%] w-[90%] mx-auto">
              {pageData?.content?.image?.length > 0 ? (
                <img
                  src={VITE_BASE_LINK + pageData?.content?.image}
                  alt="..."
                  className="w-[50%] md:w-full "
                />
              ) : (
                <div className="w-full bg-[#ffe8b1] aspect-[3/3.5]"></div>
              )}
            </div>

            <div className="md:w-full ">
              <div className="bg-[#FF9D80] flex md:rounded-bl-3xl overflow-x-scroll">
                {pageData?.tab_data?.map((data, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={` ${
                        activeTab === index ? "bg-[#FF5A29]" : ""
                      } ${
                        activeTab === index && index === 0
                          ? "md:rounded-bl-3xl"
                          : ""
                      } p-5  text-white  w-max  sm:text-lg transition-all`}
                    >
                      <div className="w-max min-w-[100px]">{data?.name}</div>
                    </button>
                  );
                })}
              </div>
              <div className="font-caladea sm:text-lg xl:text-xl pt-10 w-[90%] mx-auto md:w-full   md:max-h-[45%] l">
                {pageData?.tab_data[activeTab]?.content?.map((data, index) => {
                  if (data?.type === "text") {
                    return <p className="  my-5 md:w-[93%]">{data?.data}</p>;
                  }

                  if (data?.type === "image") {
                    return (
                      <div className=" my-5  md:w-[93%]">
                        <img src={VITE_BASE_LINK + data?.data} alt="" />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_1;
