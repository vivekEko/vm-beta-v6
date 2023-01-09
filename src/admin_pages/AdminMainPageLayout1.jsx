import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

// assets
import image_icon from "../assets/img/admin/home_edit/image_icon.svg";
import add_icon from "../assets/img/admin/sub_page_layout_1_edit/add_icon.svg";
import edit_icon from "../assets/img/admin/sub_page_layout_1_edit/edit_icon.svg";
import delete_icon from "../assets/img/admin/home_edit/delete.svg";
import eye_open_inactive from "../assets/img/admin/home_edit/eye_open_inactive.svg";
import eye_close_inactive from "../assets/img/admin/home_edit/eye_close.svg";

// components
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const AdminMainPageLayout1 = () => {
  const [pageData, setPageData] = useState(null);
  const [activeInput, setActiveInput] = useState(null);
  const [imageArray, setImageArray] = useState([]);
  const pathname = useParams(null);

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
      .then((response) => {
        console.log(
          "############ PAGE DATA ###################",
          response?.data
        );
        setPageData(response?.data);
        setImageArray(response?.data?.all_input_fields[1]?.content);
      });
  }, [pathname]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />
      <div className="px-16 z-[100] sticky  top-24">
        <div className="flex justify-between items-center py-10  bg-[#FFF6EB] ">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl uppercase font-bold">
              {pageData?.pageName}
            </h1>
          </div>

          <div className="flex-1 ">
            <button
              onClick={() => {
                let cnfText = confirm("Do you want to pulished the data now?");

                if (cnfText) {
                  axios
                    .put(
                      VITE_BASE_LINK + pathname?.sub_admin_page_name,
                      pageData
                    )
                    .then((response) => {
                      alert("Your data is published!");
                    });
                }
              }}
              className="block ml-auto p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 "
            >
              Publish Content
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-[#5A5A5A] text-center text-2xl font-oswald">
            {pageData?.subPageName}
          </h2>
        </div>
      </div>

      {/* input fileds */}
      <div className="w-[80%] mx-auto mt-16">
        {pageData?.all_input_fields?.map((data, index) => {
          if (data?.type === "text") {
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border"
              >
                <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                  <h1 className="font-semibold">{data?.title}</h1>
                </div>

                <div className="mt-5">
                  <textarea
                    type="text"
                    rows={5}
                    value={data?.content}
                    onClick={() => setActiveInput(data?.id)}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        all_input_fields: pageData?.all_input_fields?.map(
                          (data) => {
                            if (data?.id === activeInput) {
                              return {
                                ...data,
                                content: e?.target?.value,
                              };
                            }

                            return data;
                          }
                        ),
                      });
                    }}
                    className="w-full outline-none border-0"
                  />
                </div>
              </div>
            );
          }

          if (data?.type === "image") {
            return (
              <div className="my-10 ">
                <div className="flex items-center gap-5">
                  <h1 className="font-semibold">Banner Image</h1>
                </div>

                <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] relative ">
                  <label
                    htmlFor="upload-image"
                    className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative  
                    
                    "
                  >
                    <div className=" flex-col justify-center items-center absolute bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] ">
                      <img
                        src={image_icon}
                        alt="upload image"
                        className="w-[50px] block"
                      />
                      <h1 className="font-semibold block">
                        <span className="text-[#FF440D] ">Upload an image</span>
                      </h1>
                      <h2 className=" block text-white">
                        PNG, JPG, GIF up to 5MB
                      </h2>
                    </div>

                    <img
                      src={VITE_BASE_LINK + data?.content[0]}
                      alt=""
                      className=""
                    />
                    <input
                      // ref={hiddenFileInput}
                      className="opacity-0 hidden cursor-pointer inset-0 "
                      id="upload-image"
                      type="file"
                      onClick={() => setActiveInput(data?.id)}
                      onChange={(e) => {
                        let formdata = new FormData();
                        formdata.append("file", e?.target?.files[0]);
                        formdata.append("index", 0);
                        formdata.append("image_array", imageArray);

                        axios
                          .post(VITE_BASE_LINK + "newImageUpload", formdata)
                          .then((response) => {
                            setPageData({
                              ...pageData,
                              all_input_fields: pageData?.all_input_fields?.map(
                                (data) => {
                                  if (data?.id === activeInput) {
                                    return {
                                      ...data,
                                      content: response?.data?.image_array,
                                    };
                                  }

                                  return data;
                                }
                              ),
                            });
                          });
                      }}
                    />
                  </label>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* subpages list */}
      <div className="w-[60%] mx-auto mt-16">
        <div className="flex justify-between items-center text-xl">
          <h1 className="font-semibold">Sub Pages</h1>
          <div className="flex items-center gap-3">
            <span className="font-semibold">
              {pageData?.sub_page_list?.length}
            </span>
            <button
              onClick={async () => {
                const addSubPage = await axios
                  .post(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                  .then((response) => {
                    console.log(response?.data);
                  });

                const allPageData = await axios
                  .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                  .then((response) => {
                    setPageData(response?.data);
                    setImageArray(response?.data?.all_input_fields[1]?.content);
                    alert("Sub page added sucessfully");
                  });
              }}
              className="active:scale-95 transition-all"
            >
              <img src={add_icon} alt="add" />
            </button>
          </div>
        </div>

        <div className="mt-10">
          {pageData?.sub_page_list?.map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-between mb-5 bg-white rounded-lg overflow-hidden"
              >
                <div className=" w-full">
                  <Link to={data?.subpage_link} className="p-5 block">
                    <h1 className="capitalize font-semibold text-[#6B7280]">
                      {data?.subpage_name}
                    </h1>
                  </Link>
                </div>

                <div className="flex gap-5 items-center p-5">
                  <Link to={data?.subpage_link}>
                    <img
                      src={edit_icon}
                      alt="edit"
                      className="cursor-pointer min-w-[20px] transition-all active:scale-95"
                    />
                  </Link>
                  <img
                    src={delete_icon}
                    alt="delete"
                    className={` ${
                      index === 0 ? "hidden" : ""
                    } cursor-pointer min-w-[20px] transition-all active:scale-95 `}
                    onClick={async () => {
                      let cnfText = confirm(
                        "Do you want to delete this sub page?"
                      );

                      if (cnfText) {
                        const deleteSubPage = await axios
                          .delete(
                            VITE_BASE_LINK + pathname?.sub_admin_page_name,
                            {
                              data: {
                                id: data?.id,
                              },
                            }
                          )
                          .then((response) => {
                            console.log(response?.data);
                          });

                        const allPageData = await axios
                          .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                          .then((response) => {
                            setPageData(response?.data);
                            setImageArray(
                              response?.data?.all_input_fields[1]?.content
                            );
                            alert("Sub page deleted sucessfully");
                          });
                      }
                    }}
                  />
                  <img
                    src={
                      data?.show_status ? eye_open_inactive : eye_close_inactive
                    }
                    alt="visibility"
                    className={` ${
                      index === 0 ? "hidden" : ""
                    } cursor-pointer min-w-[20px] transition-all active:scale-95 `}
                    onClick={async () => {
                      const hideSubPage = await axios
                        .patch(VITE_BASE_LINK + pathname?.sub_admin_page_name, {
                          data: {
                            id: data?.id,
                          },
                        })
                        .then((response) => {
                          console.log(response?.data);
                        });

                      const allPageData = await axios
                        .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                        .then((response) => {
                          setPageData(response?.data);
                          setImageArray(
                            response?.data?.all_input_fields[1]?.content
                          );
                        });
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminMainPageLayout1;
