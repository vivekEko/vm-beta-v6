import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "../../recoil/helpers/currentPathAtom";
import sidebarStatusAtom from "../../recoil/sidebar/sidebarStatusAtom";

// assets
import down_arrow from "../../assets/img/sidebar/down-arrow-icon.svg";
import power_icon from "../../assets/img/sidebar/power-icon.svg";
import fb from "../../assets/img/sidebar/fb.svg";
import insta from "../../assets/img/sidebar/insta.svg";
import yt from "../../assets/img/sidebar/yt.svg";

import axios from "axios";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";
import subScribeAtom from "../../recoil/sidebar/subScribeAtom";
import avatar from "../../assets/img/landingPage/avatar.svg";

const Sidebar = () => {
  // Global variables
  const [currentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  const [subscribe, setSubscribe] = useRecoilState(subScribeAtom);

  // local variables
  const [openedLink, setOpenedLink] = useState(null);
  const [sidebarData, setSidebarData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "sideBar")
      .then(function (response) {
        setSidebarData(response?.data);
        // console.log(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // Detect outside click and close sidebar

  // window.addEventListener("click", (event) => {
  //   const sidebar = document?.getElementById("sidebar");

  //   if (sidebar) {
  //     if (!sidebar?.contains(event?.target)) {
  //       setSidebarStatus(false);
  //     }
  //   }
  // });

  useEffect(() => {
    if (sidebarStatus === false) {
      setOpenedLink(null);
    }
  }, [sidebarStatus]);

  return (
    // <div
    //   id="sidebar"
    //   className={` ${
    //     sidebarStatus
    //       ? "w-[100%] ease-in"
    //       : !currentPath?.pathname?.includes("/home")
    //       ? "w-[0%] ease-out   min-w-[0px] md:w-[0.1%] md:min-w-[60px]"
    //       : "w-[0%] ease-out  min-w-[0px]"
    //   } h-screen bg-[#FC8D0B] fixed top-0 bottom-0  max-w-[300px] transition-all duration-300  shadow-2xl z-[9999] overflow-y-scroll scrollbar-hide  pb-[100px]  `}
    // >
    <div
      id="sidebar"
      className={` ${
        sidebarStatus
          ? "w-[100%] ease-in"
          : !currentPath?.pathname?.includes("/home")
          ? "w-[0%] ease-out   min-w-[0px] md:w-[0.1%] md:min-w-[60px]"
          : "w-[0%] ease-out  min-w-[0px] xl:w-[100%]"
      } h-screen bg-[#FCDAD0] fixed top-0 bottom-0  max-w-[300px] transition-all duration-300  shadow-2xl z-[9999] overflow-y-scroll scrollbar-hide  pb-[100px]  `}
    >
      <div className=" overflow-x-hidden  ">
        {/* hamburger */}
        {/* <button className="">
          <div
            onClick={() => setSidebarStatus(!sidebarStatus)}
            className={` ${
              currentPath?.pathname?.includes("/home")
                ? "hidden"
                : "hidden md:flex"
            } w-[30px] h-[25px] mt-5 flex-col justify-between gap-2 mr-auto cursor-pointer ml-2    `}
          >
            <div
              className={` ${
                sidebarStatus ? "rotate-45 translate-y-3 " : "rotate-0"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "-rotate-45 -translate-y-2" : "rotate-0"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
          </div>

         
        </button> */}

        {/* btnnnn */}

        {/* <button
          className={`   ${
            !currentPath?.pathname?.includes("/home")
              ? "fixed top-0 left-0 md:left-5 lg:left-8 xl:left-10 text-xl  font-bold md:hidden "
              : "hidden"
          } 

          `}
          onClick={() => setSidebarStatus(!sidebarStatus)}
        >
          <div className="w-[30px] h-[25px] mt-5 flex flex-col justify-between gap-2 mr-auto cursor-pointer ml-2 bg-[#FCDAD0]  box-content p-2 rounded-lg  ">
            <div
              className={` ${
                sidebarStatus ? "rotate-45 translate-y-3 " : "rotate-0"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "hidden" : "block"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
            <div
              className={` ${
                sidebarStatus ? "-rotate-45 -translate-y-2" : "rotate-0"
              } h-[4px] border-full bg-[#630000] rounded-full transition-all duration-300`}
            ></div>
          </div>
        </button> */}

        {/* btnnnn */}

        <div
          className={` ${
            currentPath?.pathname?.includes("/home") ? "mt-[7.5rem]" : "mt-20"
          } min-w-[300px] max-h-[60vh] overflow-y-scroll scrollbar-hide `}
        >
          {/* sidebar links container */}
          {sidebarData?.map((data, index) => {
            return (
              <div
                key={index}
                className={` ${
                  openedLink === data?.main_link?.link_name
                    ? "bg-[#FF5A29] bg-opacity-[10%]"
                    : ""
                }  pl-2 overflow-y-hidden`}
              >
                <div className="flex justify-between items-center  ">
                  {/* main links */}

                  <NavLink
                    to={data?.main_link?.link_path}
                    className={` ${
                      currentPath?.pathname?.includes(
                        data?.main_link?.link_code
                      )
                        ? "opacity-100 "
                        : "opacity-100"
                    } `}
                  >
                    <button
                      onClick={() => setSidebarStatus(false)}
                      className="flex  flex-[0.9] gap-5 py-5 items-center text-[#FF3A00] "
                    >
                      <div
                        title={data?.main_link?.link_name}
                        className=" w-[40px] aspect-square rounded-full "
                      >
                        <img
                          src={VITE_BASE_LINK + data?.main_link?.icon}
                          alt=""
                          className="w-full"
                        />
                      </div>
                      <div>
                        <h1 className="text-xl uppercase">
                          {data?.main_link?.link_name}
                        </h1>
                      </div>
                    </button>
                  </NavLink>

                  {data?.sub_links && (
                    <div
                      onClick={() => {
                        if (openedLink === data?.main_link?.link_name) {
                          setOpenedLink(null);
                        } else {
                          setOpenedLink(data?.main_link?.link_name);
                        }
                      }}
                      className={
                        "pr-5  flex-[0.1]  min-w-[50px] cursor-pointer"
                      }
                    >
                      <img
                        src={down_arrow}
                        alt="..."
                        className={` ${
                          openedLink === data?.main_link?.link_name
                            ? "rotate-0"
                            : "-rotate-90"
                        } w-[15px]  transition-all h-full`}
                      />
                    </div>
                  )}
                </div>

                <div
                  className={` ${
                    openedLink?.includes(data?.main_link?.link_name)
                      ? "max-h-[300px] ease-in duration-300  "
                      : "max-h-0 ease-out overflow-y-hidden duration-300"
                  } transition-all text-white   `}
                >
                  {data?.sub_links?.map((sub_data, sub_index) => {
                    return (
                      <Link key={sub_index} to={sub_data?.sub_link_path}>
                        <button className="block  w-full text-left">
                          <h1
                            className={`
                          ${
                            currentPath?.pathname?.includes(
                              sub_data?.link_code
                            ) && currentPath?.pathname?.includes(sub_data?.id)
                              ? "opacity-100"
                              : "opacity-80"
                          } text-[#FF3A00] py-3 pl-16 uppercase
                          `}
                          >
                            {sub_data?.sub_link_name}
                          </h1>
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={` ${
          sidebarStatus ? "block" : "hidden lg:block"
        } absolute bottom-0 right-0 left-0  bg-[#FCDAD0]`}
      >
        <div
          className={` ${
            currentPath?.pathname?.includes("home")
              ? "lg:hidden"
              : sidebarStatus
              ? "block"
              : "hidden"
          }  w-full p-2 `}
        >
          <button
            className="w-full active:scale-95 transition-all font-caladea font-semibold tracking-widest text-xl bg-[#F1400B] text-white  p-3 bg-opacity-70 hover:bg-opacity-100   duration-500 flex justify-center items-center gap-5
              "
            onClick={() => setSubscribe(true)}
          >
            <div>
              <img src={avatar} alt="avatar" className="w-[35px]" />
            </div>
            <h1>Subscribe</h1>
          </button>
        </div>

        <div
          className={` ${
            currentPath?.pathname?.includes("home")
              ? "block"
              : sidebarStatus
              ? "block"
              : "hidden"
          }  flex justify-between items-center px-2 my-5`}
        >
          <a
            href="https://www.facebook.com/srivanamamalaimuttofficial/"
            target="_blank"
            rel="noreferer"
          >
            <img src={fb} alt="" />
          </a>
          <a
            href="https://www.instagram.com/srivanamamalaimutt.official/?hl=en"
            target="_blank"
            rel="noreferer"
          >
            <img src={insta} alt="" />
          </a>
          <a
            href="https://www.youtube.com/@srivanamamalaithothadrimutt"
            target="_blank"
            rel="noreferer"
          >
            <img src={yt} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
