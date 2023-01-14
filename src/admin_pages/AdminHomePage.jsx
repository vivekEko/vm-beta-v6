import React, { useState } from "react";
import { useEffect } from "react";
// components
import Admin_header from "../components/admin/admin_global_components/Admin_header";
// assets
import image_icon from "../assets/img/admin/home_edit/image_icon.svg";
import arrow_icon from "../assets/img/admin/home_edit/arrow.svg";
import delete_icon from "../assets/img/admin/home_edit/delete.svg";
import delete_icon_active from "../assets/img/admin/home_edit/delete-active.svg";
import eye_open_inactive from "../assets/img/admin/home_edit/eye_open_inactive.svg";
import eye_open_active from "../assets/img/admin/home_edit/eye_open.svg";
import eye_close_inactive from "../assets/img/admin/home_edit/eye_close.svg";
import eye_close_active from "../assets/img/admin/home_edit/eye_close_active.svg";
import add_icon from "../assets/img/admin/home_edit/add_icon.svg";

import { VITE_BASE_LINK } from "../base_link/BaseLink";
import axios from "axios";

const AdminHomePage = () => {
  const [activeSection, setActiveSection] = useState(null);
  // const [bannerOptionDropdown, setBannerOptionDropdown] = useState(false);

  const [pageData, setPageData] = useState(null);

  const [activeInput, setActiveInput] = useState(null);
  // const [imageArray, setImageArray] = useState([]);
  // const [fileArray, setFileArray] = useState([]);
  const [newSectionActiveLayout, setNewSectionActiveLayout] = useState({
    backend_name: "left_image",
    frontend_name: "Article View",
  });
  const [layoutFilterStatus, setLayoutFilterStatus] = useState(false);

  const layouts = [
    {
      backend_name: "left_image",
      frontend_name: "Grid View",
    },
    {
      backend_name: "right_image",
      frontend_name: "Article View",
    },
    {
      backend_name: "two_images",
      frontend_name: "Cards View",
    },
  ];

  // const pageData = {
  //   pageName: "Home",
  //   all_sections: [
  //     {
  //       section_name: "Section 1",
  //       layout: "hero",
  //       status: true,
  //       section_id: 1,
  //       bg_image: "image link here",
  //       section_data: [
  //         {
  //           id: 1,
  //           title: "Heading",
  //           content: "Lorem Ipsum",
  //           type: "text",
  //           section_data_status: true,
  //         },
  //         {
  //           id: 2,
  //           title: "Sub Heading",
  //           content: "Lorem Ipsum",
  //           type: "text",
  //           section_data_status: true,
  //         },
  //       ],
  //     },

  //     {
  //       section_name: "Section 2",
  //       layout: "banner",
  //       status: true,
  //       section_id: 2,
  //       section_data: [
  //         {
  //           id: 1,
  //           type: "image",
  //           content: "paaji yaha image ka link hoga",
  //         },
  //         {
  //           id: 2,
  //           type: "text",
  //           content_data: [
  //             {
  //               id: 1,
  //               title: "Heading",
  //               content: "21st Paasuram",
  //             },
  //             {
  //               id: 1,
  //               title: "Brief Info",
  //               content:
  //                 "Vanamamalai mutt is an ancient srivaishnava mutt which was established by ponnadikkal jiyar under the orders of manavala mamunigal. Ponnadikkal jiyar was the first and foremost disciple and this mutt is one of the most important mutts of srivaishnava sath sampradhayam.",
  //             },
  //           ],
  //         },

  //         {
  //           id: 3,
  //           type: "image",
  //           content: "paaji yaha image ka link hoga",
  //         },

  //         {
  //           id: 4,
  //           type: "image",
  //           content: "paaji yaha image ka link hoga",
  //         },
  //       ],
  //     },

  //     {
  //       section_name: "Section 3",
  //       layout: "facebook",
  //       status: true,
  //       section_id: 3,
  //       section_data: [
  //         {
  //           id: 1,
  //           title: "Facebook Page Link",
  //           content: "https://www.facebook.com/srivanamamalaimuttofficial/",
  //           type: "text",
  //           section_data_status: true,
  //         },
  //       ],
  //     },

  //     {
  //       section_name: "Section 4",
  //       layout: "small_banner",
  //       status: true,
  //       section_id: 3,
  //       section_data: [
  //         {
  //           id: 1,
  //           title: "Heading",
  //           content: "Lorem Ipsum",
  //           type: "text",
  //           section_data_status: true,
  //         },
  //         {
  //           id: 2,
  //           title: "Brief Info",
  //           content: "Lorem Ipsum",
  //           type: "text",
  //           section_data_status: true,
  //         },
  //         {
  //           id: 3,
  //           title: "Cover Image",
  //           content: "Paaji, Image ka link hoga yaha",
  //           type: "image",
  //           section_data_status: true,
  //         },
  //       ],
  //     },

  //     {
  //       section_name: "Section 5",
  //       layout: "card",
  //       status: true,
  //       section_id: 3,
  //       section_data: [
  //         {
  //           card_id: 5,
  //           card_data: [
  //             {
  //               id: 1,
  //               title: "Heading",
  //               content: "Lorem Ipsum",
  //               type: "text",
  //               section_data_status: true,
  //             },
  //             {
  //               id: 2,
  //               title: "Brief Info",
  //               content: "Lorem Ipsum",
  //               type: "text",
  //               section_data_status: true,
  //             },
  //           ],
  //         },

  //         {
  //           card_id: 6,
  //           card_data: [
  //             {
  //               id: 1,
  //               title: "Heading",
  //               content: "Lorem Ipsum",
  //               type: "text",
  //               section_data_status: true,
  //             },
  //             {
  //               id: 2,
  //               title: "Brief Info",
  //               content: "Lorem Ipsum",
  //               type: "text",
  //               section_data_status: true,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // };

  useEffect(() => {
    axios.get(VITE_BASE_LINK + "home_page").then((response) => {
      setActiveSection(response?.data?.all_sections[0]?.section_name);
      setPageData(response?.data);
      console.log(response?.data);
    });
  }, []);

  useEffect(() => {
    console.log("pagedata", pageData);
    console.log("activeSection", activeSection);
  }, [pageData, activeSection]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />
      <div className="px-16">
        <div className="flex justify-between items-center py-10 sticky  top-24 bg-[#FFF6EB]">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl uppercase font-bold">
              {pageData?.pageName}
            </h1>
          </div>

          <div className="flex-1  flex justify-end">
            <button
              onClick={() => {
                let cnfText = confirm("Do you want to pulished the data now?");

                if (cnfText) {
                  axios
                    .put(VITE_BASE_LINK + "home_page", pageData)
                    .then((response) => {
                      console.log(response?.data);
                      alert("Your data is published!");
                    });
                }
              }}
              className=" p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 "
            >
              Publish Content
            </button>
          </div>
        </div>

        <div className="flex items-start gap-16 text-[#232325]">
          {/* edit fields */}
          <div className="w-full  pt-10">
            {pageData?.all_sections
              ?.filter((filteredData) => {
                if (activeSection === filteredData?.section_name) {
                  return filteredData;
                }
              })
              ?.map((data, index) => {
                return (
                  <div key={index}>
                    {data?.layout === "hero_section" && (
                      <div>
                        <label
                          // onClick={handleClick}
                          htmlFor="upload-cover-image"
                          className="flex   justify-start gap-2 font-semibold text-lg items-center h-full   cursor-pointer  group transition-all relative "
                        >
                          <h1>Add Cover </h1>
                          <img src={add_icon} alt="add cover" />

                          <input
                            // ref={hiddenFileInput}
                            className="opacity-0 cursor-pointer inset-0 "
                            id="upload-cover-image"
                            type="file"
                            // onClick={() => setActiveInput(sectionData?.id)}
                            onChange={async (e) => {
                              let formdata = new FormData();
                              formdata.append("file", e?.target?.files[0]);

                              const coverUpload = await axios
                                .post(
                                  VITE_BASE_LINK + "hero_section_admin",
                                  formdata
                                )
                                .then((response) => {});

                              const homePageCall = await axios
                                .get(VITE_BASE_LINK + "home_page")
                                .then((response) => {
                                  setActiveSection(
                                    response?.data?.all_sections[0]
                                      ?.section_name
                                  );
                                  setPageData(response?.data);
                                });
                            }}
                          />
                        </label>
                      </div>
                    )}

                    {data?.section_data?.map((sectionData, sectionIndex) => {
                      if (
                        sectionData?.type === "text" &&
                        sectionData?.section_data_status == true
                      ) {
                        return (
                          <div
                            key={sectionIndex}
                            className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border"
                          >
                            <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>
                            </div>

                            <div className="mt-5">
                              <textarea
                                type="text"
                                rows={5}
                                value={sectionData?.content}
                                onClick={() => setActiveInput(sectionData?.id)}
                                onChange={(e) => {
                                  const newState = data?.section_data?.map(
                                    (obj) => {
                                      if (obj.id === activeInput) {
                                        return {
                                          ...obj,
                                          content: e?.target?.value,
                                        };
                                      }

                                      return obj;
                                    }
                                  );

                                  setPageData({
                                    ...pageData,
                                    all_sections: pageData?.all_sections?.map(
                                      (data) => {
                                        if (
                                          data?.section_name === activeSection
                                        ) {
                                          return {
                                            ...data,
                                            section_data: newState,
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

                      if (
                        sectionData?.type === "text" &&
                        sectionData?.status == true &&
                        sectionData?.content_data
                      ) {
                        return (
                          <div
                            key={sectionIndex}
                            className=" rounded-lg"
                            onClick={() => setActiveInput(sectionData?.id)}
                          >
                            <div className="mb-5 flex justify-between">
                              <h1 className="font-semibold">Text</h1>

                              <div className=" flex gap-5 items-center">
                                <div>
                                  {sectionData?.content_data && (
                                    <button
                                      className="border rounded-lg p-2 bg-orange-500 text-white px-3 font-semibold active:scale-95 transition-all"
                                      onClick={async () => {
                                        const formData = new FormData();
                                        formData.append("id", sectionData?.id);
                                        formData.append("type", "image");

                                        const changeToImage = await axios
                                          .post(
                                            VITE_BASE_LINK + "bannerTypeChange",
                                            formData
                                          )
                                          .then((response) => {});

                                        const pageData = await axios
                                          .get(VITE_BASE_LINK + "home_page")
                                          .then((response) => {
                                            setActiveSection(
                                              response?.data?.all_sections[1]
                                                ?.section_name
                                            );
                                            setPageData(response?.data);
                                          });
                                      }}
                                    >
                                      Change to Image
                                    </button>
                                  )}
                                </div>
                                {activeSection !== "Section 2" && (
                                  <img
                                    src={delete_icon}
                                    alt="delete"
                                    className={`  cursor-pointer min-w-[20px] transition-all active:scale-95 w-[20px] mb-3`}
                                    onClick={async () => {
                                      let cnfText = confirm(
                                        "Do you want to delete this image?"
                                      );

                                      if (cnfText) {
                                        const deleteAlbum = await axios
                                          .delete(
                                            VITE_BASE_LINK +
                                              "hero_section_admin",
                                            {
                                              data: {
                                                id: sectionData?.id,
                                              },
                                            }
                                          )
                                          .then((response) => {});

                                        const homePageCall = await axios
                                          .get(VITE_BASE_LINK + "home_page")
                                          .then((response) => {
                                            setActiveSection(
                                              response?.data?.all_sections[0]
                                                ?.section_name
                                            );
                                            setPageData(response?.data);
                                          });
                                      }
                                    }}
                                  />
                                )}
                              </div>
                            </div>
                            <div className="p-5 bg-white  rounded-lg  border-[#E0E2E7] border">
                              {sectionData?.content_data?.map(
                                (text_content, text_index) => {
                                  return (
                                    <div key={text_index} className="">
                                      <div className="mb-5">
                                        <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                                          <h1 className="font-semibold">
                                            {text_content?.title}
                                          </h1>
                                        </div>

                                        <div className="mt-5">
                                          <textarea
                                            type="text"
                                            rows={5}
                                            value={text_content?.content}
                                            onClick={() =>
                                              setActiveInput(text_content?.id)
                                            }
                                            onChange={(e) => {
                                              const newState =
                                                data?.section_data?.map(
                                                  (obj) => {
                                                    if (
                                                      obj.id === activeInput
                                                    ) {
                                                      return {
                                                        ...obj,
                                                        content:
                                                          e?.target?.value,
                                                      };
                                                    }

                                                    return obj;
                                                  }
                                                );

                                              setPageData({
                                                ...pageData,
                                                all_sections:
                                                  pageData?.all_sections?.map(
                                                    (data) => {
                                                      if (
                                                        data?.section_name ===
                                                        activeSection
                                                      ) {
                                                        return {
                                                          ...data,
                                                          section_data:
                                                            newState,
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
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        );
                      }

                      if (sectionData?.type === "image") {
                        return (
                          <>
                            {(sectionData?.status == true ||
                              sectionData?.section_data_status == true) && (
                              <div key={sectionIndex} className="">
                                <div className="my-10">
                                  <div className="flex items-center gap-5 justify-between">
                                    <h1 className="font-semibold">Image</h1>

                                    <div className=" flex gap-5 items-center">
                                      <div>
                                        {sectionData?.content_data && (
                                          <button
                                            onClick={async () => {
                                              const formData = new FormData();
                                              formData.append(
                                                "id",
                                                sectionData?.id
                                              );
                                              formData.append("type", "text");

                                              const changeToImage = await axios
                                                .post(
                                                  VITE_BASE_LINK +
                                                    "bannerTypeChange",
                                                  formData
                                                )
                                                .then((response) => {});

                                              const pageData = await axios
                                                .get(
                                                  VITE_BASE_LINK + "home_page"
                                                )
                                                .then((response) => {
                                                  setActiveSection(
                                                    response?.data
                                                      ?.all_sections[1]
                                                      ?.section_name
                                                  );
                                                  setPageData(response?.data);
                                                });
                                            }}
                                            className="border rounded-lg p-2 bg-orange-500 text-white px-3 font-semibold "
                                          >
                                            Change to Text
                                          </button>
                                        )}
                                      </div>

                                      {activeSection !== "Section 2" && (
                                        <img
                                          src={delete_icon}
                                          alt="delete"
                                          className={`  cursor-pointer min-w-[20px] transition-all active:scale-95 w-[20px] mb-3`}
                                          onClick={async () => {
                                            let cnfText = confirm(
                                              "Do you want to delete this image?"
                                            );

                                            if (cnfText) {
                                              const deleteAlbum = await axios
                                                .delete(
                                                  VITE_BASE_LINK +
                                                    "hero_section_admin",
                                                  {
                                                    data: {
                                                      id: sectionData?.id,
                                                    },
                                                  }
                                                )
                                                .then((response) => {});

                                              const homePageCall = await axios
                                                .get(
                                                  VITE_BASE_LINK + "home_page"
                                                )
                                                .then((response) => {
                                                  setActiveSection(
                                                    response?.data
                                                      ?.all_sections[0]
                                                      ?.section_name
                                                  );
                                                  setPageData(response?.data);
                                                });
                                            }
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>

                                  <div className="mt-2 bg-white  border border-dashed rounded-lg h-full  border-[#E0E2E7] relative  ">
                                    <label
                                      // onClick={handleClick}
                                      htmlFor={`upload-image ${sectionData?.id}`}
                                      className="flex flex-col  justify-center items-center h-full  border cursor-pointer group transition-all relative min-h-[300px] "
                                    >
                                      <div className=" flex-col justify-center items-center absolute  bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] min-h-[300px]">
                                        <img
                                          src={image_icon}
                                          alt="upload image"
                                          className="w-[50px] block "
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
                                        src={
                                          VITE_BASE_LINK + sectionData?.content
                                        }
                                        alt=""
                                        className="max-w-[300px]"
                                      />
                                      <input
                                        // ref={hiddenFileInput}
                                        className="opacity-0 cursor-pointer inset-0 "
                                        id={`upload-image ${sectionData?.id}`}
                                        type="file"
                                        onClick={() =>
                                          setActiveInput(sectionData?.id)
                                        }
                                        onChange={(e) => {
                                          let formdata = new FormData();
                                          formdata.append(
                                            "file",
                                            e?.target?.files[0]
                                          );
                                          formdata.append("index", 0);
                                          formdata.append(
                                            "image_array",
                                            "image"
                                          );

                                          axios
                                            .post(
                                              VITE_BASE_LINK + "newImageUpload",
                                              formdata
                                            )
                                            .then((response) => {
                                              const newState =
                                                data?.section_data?.map(
                                                  (obj) => {
                                                    if (
                                                      obj.id === activeInput
                                                    ) {
                                                      return {
                                                        ...obj,
                                                        content:
                                                          response?.data
                                                            ?.image_array[0],
                                                      };
                                                    }

                                                    return obj;
                                                  }
                                                );

                                              setPageData({
                                                ...pageData,
                                                all_sections:
                                                  pageData?.all_sections?.map(
                                                    (data) => {
                                                      if (
                                                        data?.section_name ===
                                                        activeSection
                                                      ) {
                                                        return {
                                                          ...data,
                                                          section_data:
                                                            newState,
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
                              </div>
                            )}
                          </>
                        );
                      }
                      if (
                        sectionData?.type === "color" &&
                        sectionData?.link_status == true
                      ) {
                        return (
                          <div key={sectionIndex} className="my-10 ">
                            <div className="flex items-center gap-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>

                              <div className=" items-center gap-5 border-x border-x-[#E0E2E7] px-5 hidden ">
                                <button className="font-bold">B</button>
                                <button className="italic">I</button>
                                <button className="underline underline-offset-4">
                                  U
                                </button>
                              </div>
                            </div>

                            <div className="mt-2 bg-white  border p-3 space-y-3 rounded-lg h-full  border-[#E0E2E7] relative inline-block ">
                              <h1 className="uppercase font-semibold">
                                {sectionData?.content}
                              </h1>
                              <input
                                type="color"
                                name=""
                                id=""
                                className=""
                                value={sectionData?.content}
                                onClick={() => setActiveInput(sectionData?.id)}
                                onChange={(e) => {
                                  const newState = data?.section_data?.map(
                                    (obj) => {
                                      if (obj.id === activeInput) {
                                        return {
                                          ...obj,
                                          content: e?.target?.value,
                                        };
                                      }

                                      return obj;
                                    }
                                  );

                                  setPageData({
                                    ...pageData,
                                    all_sections: pageData?.all_sections?.map(
                                      (data) => {
                                        if (
                                          data?.section_name === activeSection
                                        ) {
                                          return {
                                            ...data,
                                            section_data: newState,
                                          };
                                        }

                                        return data;
                                      }
                                    ),
                                  });
                                }}
                              />
                            </div>
                          </div>
                        );
                      }

                      if (
                        sectionData?.type === "yt_link" &&
                        sectionData?.link_status == true
                      ) {
                        return (
                          <div key={sectionIndex} className="my-10 ">
                            <div className="flex items-center gap-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>

                              <div className=" items-center gap-5 border-x border-x-[#E0E2E7] px-5 hidden ">
                                <button className="font-bold">B</button>
                                <button className="italic">I</button>
                                <button className="underline underline-offset-4">
                                  U
                                </button>
                              </div>
                            </div>

                            <div className="mt-2 bg-white  border p-3 space-y-3 rounded-lg h-full  border-[#E0E2E7] relative  ">
                              <input
                                type="text"
                                className="  outline-none w-full placeholder:text-sm placeholder:font-normal "
                                placeholder="Video title"
                                onClick={() => setActiveInput(sectionData?.id)}
                                value={sectionData?.content_title}
                                onChange={(e) => {
                                  const newState = data?.section_data?.map(
                                    (obj) => {
                                      if (obj.id === activeInput) {
                                        return {
                                          ...obj,
                                          content_title: e?.target?.value,
                                        };
                                      }

                                      return obj;
                                    }
                                  );

                                  setPageData({
                                    ...pageData,
                                    all_sections: pageData?.all_sections?.map(
                                      (data) => {
                                        if (
                                          data?.section_name === activeSection
                                        ) {
                                          return {
                                            ...data,
                                            section_data: newState,
                                          };
                                        }

                                        return data;
                                      }
                                    ),
                                  });
                                }}
                              />
                            </div>

                            <div className="mt-2 bg-white  border p-3 space-y-3 rounded-lg h-full  border-[#E0E2E7] relative  ">
                              <input
                                className="  outline-none w-full placeholder:text-sm placeholder:font-normal "
                                placeholder="https://youtu.be/V24H3zk7IMs"
                                value={sectionData?.content}
                                onClick={() => setActiveInput(sectionData?.id)}
                                onChange={(e) => {
                                  const newState = data?.section_data?.map(
                                    (obj) => {
                                      if (obj.id === activeInput) {
                                        return {
                                          ...obj,
                                          content: e?.target?.value,
                                        };
                                      }

                                      return obj;
                                    }
                                  );

                                  setPageData({
                                    ...pageData,
                                    all_sections: pageData?.all_sections?.map(
                                      (data) => {
                                        if (
                                          data?.section_name === activeSection
                                        ) {
                                          return {
                                            ...data,
                                            section_data: newState,
                                          };
                                        }

                                        return data;
                                      }
                                    ),
                                  });
                                }}
                              />
                            </div>
                          </div>
                        );
                      }
                      if (
                        sectionData?.type === "file" &&
                        sectionData?.link_status == true
                      ) {
                        return (
                          <div key={sectionIndex} className="my-10 ">
                            <div className="flex items-center gap-5">
                              <h1 className="font-semibold">
                                {sectionData?.title}
                              </h1>

                              <div className=" items-center gap-5 border-x border-x-[#E0E2E7] px-5 hidden ">
                                <button className="font-bold">B</button>
                                <button className="italic">I</button>
                                <button className="underline underline-offset-4">
                                  U
                                </button>
                              </div>
                            </div>

                            <div className="mt-2 bg-white  border p-3 space-y-3 rounded-lg h-full  border-[#E0E2E7] relative  ">
                              <input
                                className="  outline-none w-full placeholder:text-sm placeholder:font-normal "
                                placeholder="PDF title"
                                onClick={() => setActiveInput(sectionData?.id)}
                                value={sectionData?.content_title}
                                onChange={(e) => {
                                  const newState = data?.section_data?.map(
                                    (obj) => {
                                      if (obj.id === activeInput) {
                                        return {
                                          ...obj,
                                          content_title: e?.target?.value,
                                        };
                                      }

                                      return obj;
                                    }
                                  );

                                  setPageData({
                                    ...pageData,
                                    all_sections: pageData?.all_sections?.map(
                                      (data) => {
                                        if (
                                          data?.section_name === activeSection
                                        ) {
                                          return {
                                            ...data,
                                            section_data: newState,
                                          };
                                        }

                                        return data;
                                      }
                                    ),
                                  });
                                }}
                              />
                            </div>

                            <div className="mt-5 relative  ">
                              <input
                                id="pdf-upload"
                                type="file"
                                className="  outline-none w-full placeholder:text-sm placeholder:font-normal hidden"
                                onClick={() => setActiveInput(sectionData?.id)}
                                onChange={(e) => {
                                  let formdata = new FormData();
                                  formdata.append("file", e?.target?.files[0]);
                                  formdata.append("index", 0);
                                  formdata.append("image_array", fileArray);

                                  axios
                                    .post(
                                      VITE_BASE_LINK + "newImageUpload",
                                      formdata
                                    )
                                    .then((response) => {
                                      const newState = data?.section_data?.map(
                                        (obj) => {
                                          if (obj.id === activeInput) {
                                            return {
                                              ...obj,
                                              content:
                                                response?.data?.image_array,
                                            };
                                          }

                                          return obj;
                                        }
                                      );

                                      setPageData({
                                        ...pageData,
                                        all_sections:
                                          pageData?.all_sections?.map(
                                            (data) => {
                                              if (
                                                data?.section_name ===
                                                activeSection
                                              ) {
                                                return {
                                                  ...data,
                                                  section_data: newState,
                                                };
                                              }

                                              return data;
                                            }
                                          ),
                                      });
                                    });
                                }}
                              />
                              <label
                                htmlFor="pdf-upload"
                                className="rounded-md bg-[#FF440D] p-3 px-5 text-white cursor-pointer"
                              >
                                Upload file
                              </label>

                              <span className="px-5 ">
                                {sectionData?.content[0]}
                              </span>
                            </div>
                          </div>
                        );
                      } else "";
                    })}
                  </div>
                );
              })}
          </div>

          {/* section name list */}
          <div className="w-[40%] min-w-[300px] sticky top-64">
            <h1 className="font-semibold">Sections</h1>
            <div className="mt-5 space-y-5 max-h-[300px] px-2 overflow-y-scroll">
              {pageData?.all_sections?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`  ${
                      activeSection === data?.section_name
                        ? "bg-[#FC8D0B] text-white"
                        : "bg-white text-black"
                    } w-full  rounded-lg flex justify-between items-center`}
                  >
                    <button
                      onClick={() => setActiveSection(data?.section_name)}
                      className={`p-3 rounded-lg font-medium    w-full text-left `}
                    >
                      {data?.section_name === "Section 1"
                        ? "Hero Section"
                        : data?.section_name === "Section 2"
                        ? "Grid Banner"
                        : data?.section_name}
                    </button>

                    {/* section type */}
                    {data?.section_type && (
                      <div className=" rounded-lg font-medium relative">
                        <div>
                          <button
                            onClick={() =>
                              setBannerOptionDropdown(!bannerOptionDropdown)
                            }
                            className=" p-3 rounded-lg"
                          >
                            {data?.section_type} \/
                          </button>
                        </div>
                        <div
                          className={` ${
                            bannerOptionDropdown ? "block" : "hidden"
                          } absolute top-[110%] right-0 rounded-lg bg-white  w-max text-left text-black`}
                        >
                          <button
                            onClick={() => {
                              setBannerOptionDropdown(!bannerOptionDropdown);
                            }}
                            className="block p-3 px-4 hover:bg-slate-100 transition-all w-full text-left"
                          >
                            Full Screen Image
                          </button>
                          <button
                            onClick={() => {
                              setBannerOptionDropdown(!bannerOptionDropdown);
                            }}
                            className="block p-3 px-4 hover:bg-slate-100 transition-all w-full text-left"
                          >
                            Content
                          </button>
                        </div>
                      </div>
                    )}

                    {/* hide section */}
                    <button
                      className=" h-full  "
                      onClick={async () => {
                        const hideSection = await axios
                          .patch(VITE_BASE_LINK + "home_page", {
                            data: {
                              id: data?.id,
                              // current_status: data?.status,
                            },
                          })
                          .then((response) => {
                            console.log("response of section edit:");
                            console.log(response);
                          });

                        const homePageData = await axios
                          .get(VITE_BASE_LINK + "home_page")
                          .then((response) => {
                            setActiveSection(
                              response?.data?.all_sections[0]?.section_name
                            );
                            setPageData(response?.data);
                          });
                      }}
                    >
                      {data?.section_name !== "Section 1" && (
                        <div>
                          {activeSection === data?.section_name ? (
                            <img
                              src={
                                data?.status
                                  ? eye_open_active
                                  : eye_close_active
                              }
                              alt="visible"
                              className="p-3 rounded-lg font-medium min-w-[40px] "
                            />
                          ) : (
                            <img
                              src={
                                data?.status
                                  ? eye_open_inactive
                                  : eye_close_inactive
                              }
                              alt="invisilble"
                              className="p-3 rounded-lg font-medium min-w-[40px] "
                            />
                          )}
                        </div>
                      )}
                    </button>

                    {/* delete section */}
                    {data?.section_name === "Section 1" ||
                    data?.section_name === "Section 2" ? (
                      ""
                    ) : (
                      <button
                        className=" h-full "
                        onClick={async () => {
                          let cnfText = confirm(
                            "Do you want to delete this section?"
                          );

                          if (cnfText) {
                            const deleteSection = await axios
                              .delete(
                                VITE_BASE_LINK + "addSectionLandingPage",
                                {
                                  data: {
                                    section_id: data?.section_id,
                                  },
                                }
                              )
                              .then((response) => {
                                console.log("response of section add:");
                                console.log(response);
                              });

                            const homePageData = await axios
                              .get(VITE_BASE_LINK + "home_page")
                              .then((response) => {
                                setActiveSection(
                                  response?.data?.all_sections[0]?.section_name
                                );
                                setPageData(response?.data);
                                alert("Section deleted successfully");
                              });
                          }
                        }}
                      >
                        {activeSection === data?.section_name ? (
                          <img
                            src={delete_icon_active}
                            alt="delete"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        ) : (
                          <img
                            src={delete_icon}
                            alt="delete"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        )}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <h1 className="font-semibold">Add Section</h1>
              <div className="flex  gap-5 mt-5">
                <div className="w-full relative ">
                  <button
                    onClick={() => setLayoutFilterStatus(!layoutFilterStatus)}
                    className="w-full text-left border rounded-md bg-white p-3 flex justify-between items-center"
                  >
                    <h1>{newSectionActiveLayout?.frontend_name}</h1>

                    <span
                      className={` ${
                        layoutFilterStatus ? "rotate-180" : "rotate-0"
                      } transition-all inline-block`}
                    >
                      <img src={arrow_icon} alt="" />
                    </span>
                  </button>

                  <div
                    className={` ${
                      layoutFilterStatus ? "block" : "hidden"
                    } absolute top-[110%] left-0 right-0 rounded-md bg-white mb-5 border overflow-hidden shadow-2xl`}
                  >
                    {layouts?.map((data, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => {
                            setLayoutFilterStatus(false);
                            setNewSectionActiveLayout(data);
                          }}
                          className="hover:bg-[#FF440D] hover:text-white transition-all w-full text-left p-3"
                        >
                          {data?.frontend_name}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <button
                  onClick={async () => {
                    let formdata = new FormData();
                    formdata?.append(
                      "layout_type",
                      newSectionActiveLayout?.backend_name
                    );
                    const addNewSection = await axios
                      .post(VITE_BASE_LINK + "addSectionLandingPage", formdata)
                      .then((response) => {
                        console.log("response of section add:");
                        console.log(response);
                      });

                    const homePageData = await axios
                      .get(VITE_BASE_LINK + "home_page")
                      .then((response) => {
                        setActiveSection(
                          response?.data?.all_sections[
                            response?.data?.all_sections?.length - 1
                          ]?.section_name
                        );
                        setPageData(response?.data);
                        alert("Section added sucessfully");
                      });
                  }}
                  className="p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
