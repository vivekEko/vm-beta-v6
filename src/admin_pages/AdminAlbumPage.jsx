import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

import image_icon from "../assets/img/admin/home_edit/image_icon.svg";
import add_icon from "../assets/img/admin/sub_page_layout_1_edit/add_icon.svg";
import delete_icon from "../assets/img/admin/home_edit/delete.svg";
import delete_icon_active from "../assets/img/admin/home_edit/delete-active.svg";
import edit_icon_active from "../assets/img/admin/sub_page_layout_1_edit/edit_icon_active.svg";
import edit_icon from "../assets/img/admin/sub_page_layout_1_edit/edit_icon.svg";
import eye_open_inactive from "../assets/img/admin/home_edit/eye_open_inactive.svg";
import eye_open_active from "../assets/img/admin/home_edit/eye_open.svg";
import eye_close_inactive from "../assets/img/admin/home_edit/eye_close.svg";
import eye_close_active from "../assets/img/admin/home_edit/eye_close_active.svg";
import add_image from "../assets/img/admin/gallery/add_image.svg";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import { Link, useParams } from "react-router-dom";

const AdminAlbumPage = () => {
  const pageData2 = {
    album_name: "Album 1",

    content_array: [
      {
        id: "1",
        image: "",
        label: "2015",
        info: "lorem",
      },

      {
        id: "2",
        image: "",
        label: "2016",
        info: "lorem",
      },

      {
        id: "3",
        image: "",
        label: "2017",
        info: "lorem",
      },
    ],
  };

  const [pageData, setPageData] = useState();
  const [activeInput, setActiveInput] = useState();

  const location = useParams();

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "gallery_edit?page_id=" + location?.album_id)
      .then((response) => {
        setPageData(response?.data);
      });
  }, []);

  useEffect(() => {
    console.log(
      "%c #### PAGE DATA ###### ",
      "background: #000000 ; color: #ffff",
      pageData
    );
  }, [pageData]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />
      <div className="flex justify-between items-start py-10  sticky z-[100]  top-24 bg-[#FFF6EB] px-16">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl uppercase font-bold">
            {pageData?.album_name}
          </h1>
        </div>

        <div className="flex-1 ">
          <button
            onClick={() => {
              let cnfText = confirm("Do you want to pulished the data now?");

              if (cnfText) {
                axios
                  .put(
                    VITE_BASE_LINK +
                      "gallery_edit" +
                      "?page_id=" +
                      location?.album_id,
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

      <div className="flex items-start gap-10 px-16 mt-16">
        {/* main contents */}
        <div className="w-full max-w-[80%] mx-auto">
          {/* heading */}
          {pageData?.album_name && (
            <div className="bg-white p-5 rounded-lg  border-[#E0E2E7] border ">
              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                <h1 className="font-semibold">Album Name</h1>
              </div>

              <div className="mt-5">
                <textarea
                  type="text"
                  rows={2}
                  placeholder="Enter album name"
                  value={pageData?.album_name}
                  onChange={(e) => {
                    setPageData({
                      ...pageData,
                      album_name: e?.target?.value,
                    });
                  }}
                  className="w-full outline-none border-0"
                />
              </div>
            </div>
          )}

          <div className="w-[60%] mx-auto mt-16">
            <div className="flex justify-between items-center text-xl">
              <h1 className="font-semibold">Sub Albums</h1>
              <div className="flex items-center gap-3">
                <span className="font-semibold">
                  {pageData?.content_array?.length}
                </span>
                <button
                  onClick={async () => {
                    const formdata = new FormData();
                    formdata?.append("page_id", location?.album_id);

                    const addAlbumContent = await axios
                      .post(
                        VITE_BASE_LINK +
                          "gallery_edit" +
                          "?page_id=" +
                          location?.album_id,
                        formdata
                      )
                      .then((response) => {});

                    const allPageData = await axios
                      .get(
                        VITE_BASE_LINK +
                          "gallery_edit?page_id=" +
                          location?.album_id
                      )
                      .then((response) => {
                        setPageData(response?.data);
                      });
                  }}
                  className="active:scale-95 transition-all"
                >
                  <img src={add_icon} alt="add" />
                </button>
              </div>
            </div>
            {pageData?.content_array && (
              <div className="mt-10  overflow-y-scroll max-h-[500px]">
                {pageData?.content_array?.map((data, index) => {
                  return (
                    <div
                      key={data?.id}
                      className="flex gap-10   overflow-hidden py-10 border-b px-10"
                    >
                      <div className="w-[30%]">
                        <div className=" mb-5">
                          <div className="flex items-center gap-5 ">
                            <h1 className="font-semibold"> Image</h1>
                          </div>
                          <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] aspect-square  ">
                            <label
                              // onClick={handleClick}
                              htmlFor={"upload-image" + data?.id}
                              className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative z-20"
                            >
                              <div className=" flex-col justify-center items-center absolute bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] ">
                                <img
                                  src={image_icon}
                                  alt="upload image"
                                  className="w-[50px] block"
                                />
                                <h1 className="font-semibold block">
                                  <span className="text-[#FF440D] ">
                                    Upload an image
                                  </span>
                                </h1>
                                <h2 className=" block text-white">
                                  PNG, JPG, GIF up to 5MB
                                </h2>
                              </div>

                              <img
                                src={VITE_BASE_LINK + data?.image}
                                alt=""
                                className=""
                              />
                              <input
                                // ref={hiddenFileInput}
                                className="opacity-0 cursor-pointer inset-0 "
                                id={"upload-image" + data?.id}
                                type="file"
                                onClick={() => setActiveInput(data?.id)}
                                onChange={(e) => {
                                  let formdata = new FormData();
                                  formdata.append("file", e?.target?.files[0]);
                                  formdata.append("index", 0);
                                  formdata.append("image_array", "abcd");

                                  axios
                                    .post(
                                      VITE_BASE_LINK + "newImageUpload",
                                      formdata
                                    )
                                    .then((response) => {
                                      console.log("response recieved");
                                      setPageData({
                                        ...pageData,
                                        content_array:
                                          pageData?.content_array?.map(
                                            (data) => {
                                              if (data?.id === activeInput) {
                                                return {
                                                  ...data,
                                                  image:
                                                    response?.data
                                                      ?.image_array[0],
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

                        <div className="w-full">
                          <div className="flex items-center gap-5 ">
                            <h1 className="font-semibold mb-3">Add label</h1>
                          </div>
                          <textarea
                            placeholder="Enter label name here"
                            rows="1"
                            className="p-3 rounded-lg"
                            onClick={() => setActiveInput(data?.id)}
                            onChange={(e) => {
                              setPageData({
                                ...pageData,

                                content_array: pageData?.content_array?.map(
                                  (data) => {
                                    if (data?.id === activeInput) {
                                      return {
                                        ...data,
                                        name: e?.target?.value,
                                      };
                                    }
                                    return data;
                                  }
                                ),
                              });
                            }}
                            value={data?.name}
                          ></textarea>
                        </div>
                      </div>

                      <div className="bg-white p-5 rounded-lg  border-[#E0E2E7] border w-full">
                        <div className="flex items-center gap-5 border-b">
                          <h1 className="font-semibold mb-3">Brief Info</h1>
                        </div>
                        <textarea
                          placeholder="Enter text here"
                          rows="1"
                          className="p-3 rounded-lg w-full h-[90%]"
                          value={data?.details}
                          onClick={() => setActiveInput(data?.id)}
                          onChange={(e) => {
                            setPageData({
                              ...pageData,

                              content_array: pageData?.content_array?.map(
                                (data) => {
                                  if (data?.id === activeInput) {
                                    return {
                                      ...data,
                                      details: e?.target?.value,
                                    };
                                  }
                                  return data;
                                }
                              ),
                            });
                          }}
                        ></textarea>
                      </div>

                      <div>
                        <img
                          src={delete_icon}
                          alt="delete content"
                          className="w-[35px] cursor-pointer transition-all active:scale-95 "
                          onClick={async () => {
                            let cnfText = confirm(
                              "Do you want to delete this content?"
                            );

                            if (cnfText) {
                              const deleteContent = await axios
                                .delete(
                                  VITE_BASE_LINK +
                                    "gallery_edit" +
                                    "?page_id=" +
                                    location?.album_id,
                                  {
                                    data: {
                                      album_id: location?.album_id,
                                      image_id: data?.id,
                                    },
                                  }
                                )
                                .then((response) => {});

                              const allPageData = await axios
                                .get(
                                  VITE_BASE_LINK +
                                    "gallery_edit" +
                                    "?page_id=" +
                                    location?.album_id
                                )
                                .then((response) => {
                                  setPageData(response?.data);

                                  alert("Content deleted sucessfully");
                                });
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAlbumPage;
