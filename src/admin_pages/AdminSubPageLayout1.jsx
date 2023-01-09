import React, { useState } from "react";
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
import cross_icon from "../assets/img/admin/sub_page_layout_1_edit/cross_icon.svg";
import { useEffect } from "react";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import axios, { all } from "axios";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminSubPageLayout1 = () => {
  const pageData2 = {
    pageName: "Vanamamalai Temple",
    subPageName: "Temple History",
    all_tabs: [
      {
        tab_name: "Tab 1",
        tab_id: 7,
        status: true,
        tab_data: [
          {
            id: 1,
            title: "Heading",
            content: "SRI VANAMAMALAI (THOTHADRI) MUTT",
            type: "text",
            link_status: true,
          },
          {
            id: 2,
            title: "Sub Heading",
            content: "SRI VANACHALA MAHAMUNI PARAMPARA",
            type: "text",
            link_status: true,
          },
          {
            id: 3,
            title: "Brief Info",

            content: [
              {
                id: 245,
                input_data: "lorem ipsum",
                data_type: "text",
              },
              {
                id: 246,
                input_data: "lorem ipsum",
                data_type: "image",
              },
            ],
            type: "text",
            link_status: true,
          },
          {
            id: 4,
            title: "Cover Image",
            content: ["media/img/first_tab_image.png"],
            type: "image",
            link_status: true,
          },
          {
            id: 5,
            title: "Background Color",
            content: "",
            type: "color",
            link_status: false,
          },
          {
            id: 6,
            title: "Youtube",
            content_title: "",
            content: "",
            type: "yt_link",
            link_status: false,
          },
          {
            id: 7,
            title: "PDF",
            content_title: "",
            content: ["L"],
            type: "file",
            link_status: false,
          },
        ],
      },
      {
        tab_name: "Tab 2",
        tab_id: 8,
        status: true,
        tab_data: [
          {
            id: 8,
            title: "Heading",
            content: "Sri Vanamamalai divyadesam",
            type: "text",
            link_status: true,
          },
          {
            id: 9,
            title: "Sub Heading",
            content: "Sri varamangai nachiyar sametha sri deivanayaga perumal",
            type: "text",
            link_status: true,
          },
          {
            id: 10,
            title: "Brief Info",
            content: [
              {
                id: 245,
                input_data: "lorem ipsum",
                data_type: "text",
              },
              {
                id: 246,
                input_data: "lorem ipsum",
                data_type: "image",
              },
            ],
            type: "text",
            link_status: true,
          },
          {
            id: 11,
            title: "Cover Image",
            content: ["media/img/rect.png"],
            type: "image",
            link_status: true,
          },
          {
            id: 12,
            title: "Background Color",
            content: "#fc8d0b",
            type: "color",
            link_status: true,
          },
          {
            id: 13,
            title: "Youtube",
            content_title: "",
            content: "",
            type: "yt_link",
            link_status: false,
          },
          {
            id: 14,
            title: "PDF",
            content_title: "",
            content: ["L"],
            type: "file",
            link_status: false,
          },
        ],
      },
    ],
  };

  const [pageData, setPageData] = useState();
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [activeInput, setActiveInput] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [briefData, setBriefData] = useState([]);

  const location = useParams();

  useEffect(() => {
    axios
      .get(
        VITE_BASE_LINK +
          location?.sub_admin_page_name +
          "?page_id=" +
          location?.sub_page_id
      )
      .then((response) => {
        console.log("response?.data:", response?.data);
        setActiveTab(response?.data?.all_tabs[0]?.tab_id);
        setPageData(response?.data);

        setImageArray(
          response?.data?.all_tabs
            ?.filter((filteredData) => {
              if (activeTab == filteredData?.tab_id) {
                return filteredData;
              }
            })
            ?.map((data) => {
              return data?.tab_data[3]?.content;
            })
        );
      });
  }, [location]);

  useEffect(() => {
    setBriefData(
      pageData?.all_tabs
        ?.filter((filteredData) => {
          if (activeTab == filteredData?.tab_id) {
            return filteredData;
          }
        })
        ?.map((data) => {
          return data?.tab_data;
        })
    );
  }, [activeTab]);

  useEffect(() => {
    console.log("####### activeInput  #####", activeInput);
  }, [activeInput]);

  // useEffect(() => {
  //   console.log("####### pageData  #####", pageData);
  // }, [pageData]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />

      <div className="px-16">
        <div className="flex justify-between items-center py-10  sticky  top-24 z-50 bg-[#FFF6EB]">
          <div className="flex-1"></div>
          <div className="flex-1 text-center">
            <h1 className="text-3xl uppercase font-bold ">
              {pageData?.pageName}
            </h1>
          </div>

          <div className="flex-1">
            <button
              onClick={() => {
                let cnfText = confirm("Do you want to pulished the data now?");

                if (cnfText) {
                  axios
                    .put(
                      VITE_BASE_LINK +
                        location?.sub_admin_page_name +
                        "?page_id=" +
                        location?.sub_page_id,
                      pageData
                    )
                    .then((response) => {
                      if (response?.data?.status == true) {
                        alert("Your data is published!");
                      }
                    });
                }
              }}
              className="p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95 block ml-auto"
            >
              Publish Content
            </button>
          </div>
        </div>

        <h2 className="text-center text-xl font-oswald sticky  top-48 z-50">
          {pageData?.subPageName}
        </h2>

        <div className=" mt-10 flex items-start gap-5 text-[#232325] ">
          <div className="w-full">
            {/* tab name */}
            <div className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border">
              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                <h1 className="font-semibold">Tab Name</h1>
              </div>

              <div className="mt-5">
                <textarea
                  type="text"
                  rows={1}
                  value={pageData?.all_tabs
                    ?.filter((filtered_data) => {
                      if (filtered_data?.tab_id == activeTab) {
                        return filtered_data;
                      }
                    })
                    ?.map((data) => {
                      return data?.tab_name;
                    })}
                  // onClick={() => setActiveInput(pageData?.tab_id)}
                  onChange={(e) => {
                    setPageData({
                      ...pageData,
                      all_tabs: pageData?.all_tabs?.map((data) => {
                        if (data?.tab_id === activeTab)
                          return {
                            ...data,
                            tab_name: e?.target?.value,
                          };

                        return data;
                      }),
                    });
                  }}
                  className="w-full outline-none "
                />
              </div>
            </div>

            {/* Heading */}

            <div className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border">
              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                <h1 className="font-semibold">Heading</h1>
              </div>

              <div className="mt-5">
                <textarea
                  type="text"
                  rows={2}
                  value={pageData?.heading}
                  onClick={() => setActiveInput(pageData?.tab_id)}
                  onChange={(e) => {
                    setPageData({
                      ...pageData,
                      heading: e?.target?.value,
                    });
                  }}
                  className="w-full outline-none border-0"
                />
              </div>
            </div>

            {/* subheading */}

            <div className="bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border">
              <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
                <h1 className="font-semibold">Sub Heading</h1>
              </div>

              <div className="mt-5">
                <textarea
                  type="text"
                  rows={2}
                  value={pageData?.subheading}
                  onClick={() => setActiveInput(pageData?.tab_id)}
                  onChange={(e) => {
                    setPageData({
                      ...pageData,
                      subheading: e?.target?.value,
                    });
                  }}
                  className="w-full outline-none border-0"
                />
              </div>
            </div>

            {/* banner image */}
            {pageData?.banner_image && (
              <div className="my-10 ">
                <div className="flex items-center gap-5">
                  <h1 className="font-semibold">Banner Image</h1>
                </div>
                <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] ">
                  <label
                    // onClick={handleClick}
                    htmlFor="upload-banner-image"
                    className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative z-20"
                  >
                    <div className=" flex-col justify-center items-center absolute bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] ">
                      <img
                        src={image_icon}
                        alt="upload image"
                        className="w-[50px] block "
                      />
                      <h1 className="font-semibold block">
                        <span className="text-[#FF440D] ">Upload an image</span>
                      </h1>
                      <h2 className=" block text-white">
                        PNG, JPG, GIF up to 5MB
                      </h2>
                    </div>

                    <img
                      src={VITE_BASE_LINK + pageData?.banner_image}
                      alt=""
                      className=""
                    />
                    <input
                      // ref={hiddenFileInput}
                      className="opacity-0 cursor-pointer inset-0 "
                      id="upload-banner-image"
                      type="file"
                      onChange={(e) => {
                        let formdata = new FormData();
                        formdata.append("file", e?.target?.files[0]);
                        formdata.append("index", 0);
                        formdata.append("image_array", "abcd");

                        axios
                          .post(VITE_BASE_LINK + "newImageUpload", formdata)
                          .then((response) => {
                            setPageData({
                              ...pageData,
                              banner_image: response?.data?.image_array[0],
                            });
                          });
                      }}
                    />
                  </label>
                </div>
              </div>
            )}

            {/*  content image */}

            <div className="my-10 ">
              <div className="flex items-center gap-5">
                <h1 className="font-semibold">Content Image</h1>
              </div>
              <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] ">
                <label
                  // onClick={handleClick}
                  htmlFor="upload-image"
                  className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative z-20"
                >
                  <div className=" flex-col justify-center items-center absolute bg-black bg-opacity-95 inset-0 hidden group-hover:flex transition-all duration-[1000] ">
                    <img
                      src={image_icon}
                      alt="upload image"
                      className="w-[50px] block "
                    />
                    <h1 className="font-semibold block">
                      <span className="text-[#FF440D] ">Upload an image</span>
                    </h1>
                    <h2 className=" block text-white">
                      PNG, JPG, GIF up to 5MB
                    </h2>
                  </div>

                  <img
                    src={VITE_BASE_LINK + pageData?.content_image}
                    alt=""
                    className=""
                  />
                  <input
                    // ref={hiddenFileInput}
                    className="opacity-0 cursor-pointer inset-0 "
                    id="upload-image"
                    type="file"
                    onChange={(e) => {
                      let formdata = new FormData();
                      formdata.append("file", e?.target?.files[0]);
                      formdata.append("index", 0);
                      formdata.append("image_array", "abcd");

                      axios
                        .post(VITE_BASE_LINK + "newImageUpload", formdata)
                        .then((response) => {
                          setPageData({
                            ...pageData,
                            content_image: response?.data?.image_array[0],
                          });
                        });
                    }}
                  />
                </label>
              </div>
            </div>

            {/* input fields */}
            <div className="w-full bg-white p-5 rounded-lg mb-5 border-[#E0E2E7] border ">
              <div className="flex items-center justify-between gap-5  border-b-[#E0E2E7] border-b pb-5">
                <div>
                  <h1 className="font-semibold">Brief Info</h1>
                </div>

                <div className=" flex items-center gap-5 ">
                  <button
                    onClick={() => {
                      const formdata = new FormData();
                      formdata?.append("id", pageData?.new_id);
                      formdata?.append("type", "text");
                      formdata?.append(
                        "dataArray",
                        JSON.stringify(
                          pageData?.all_tabs
                            ?.filter((filtered_data) => {
                              if (filtered_data?.tab_id === activeTab) {
                                return filtered_data;
                              }
                            })
                            ?.map((data) => {
                              return data?.tab_data;
                            })
                        )
                      );
                      formdata?.append(
                        "tabId",
                        JSON.stringify(
                          pageData?.all_tabs
                            ?.filter((filtered_data) => {
                              if (filtered_data?.tab_id === activeTab) {
                                return filtered_data;
                              }
                            })
                            ?.map((data) => {
                              return data?.tab_id;
                            })
                        )
                      );
                      formdata?.append("pageData", JSON.stringify(pageData));

                      axios
                        .post(VITE_BASE_LINK + "adminAddNewTabData", formdata)
                        .then((response) => {
                          console.log("response of add text", response);
                          // setBriefData(response?.data);
                          setPageData(response?.data);
                        });
                    }}
                    className="p-3 px-5 border-gray-500 hover:border-transparent border hover:bg-[#FF440D] hover:text-white rounded-lg transition-all active:scale-95"
                  >
                    Add Text
                  </button>

                  <lable
                    htmlFor="image_upload_tab"
                    className="p-3 px-5 border-gray-500 hover:border-transparent border hover:bg-[#FF440D] hover:text-white rounded-lg transition-all active:scale-95 relative cursor-pointer block"
                  >
                    Add Image
                    <input
                      type="file"
                      id="image_upload_tab"
                      className="inset-0 absolute  opacity-0 cursor-pointer"
                      onChange={(e) => {
                        const formdata = new FormData();
                        formdata?.append("file", e?.target?.files[0]);
                        formdata?.append("id", pageData?.new_id);
                        formdata?.append("type", "image");
                        formdata?.append(
                          "dataArray",
                          JSON.stringify(
                            pageData?.all_tabs
                              ?.filter((filtered_data) => {
                                if (filtered_data?.tab_id === activeTab) {
                                  return filtered_data;
                                }
                              })
                              ?.map((data) => {
                                return data?.tab_data;
                              })
                          )
                        );
                        formdata?.append(
                          "tabId",
                          JSON.stringify(
                            pageData?.all_tabs
                              ?.filter((filtered_data) => {
                                if (filtered_data?.tab_id === activeTab) {
                                  return filtered_data;
                                }
                              })
                              ?.map((data) => {
                                return data?.tab_id;
                              })
                          )
                        );
                        formdata?.append("pageData", JSON.stringify(pageData));

                        axios
                          .post(
                            VITE_BASE_LINK + "addImageTabDataAdmin",
                            formdata
                          )
                          .then((response) => {
                            console.log("response of add image", response);
                            setPageData(response?.data);
                          });
                      }}
                    />
                  </lable>
                </div>
              </div>

              <div className="w-full  pt-10  ">
                {pageData?.all_tabs
                  ?.filter((filtered_data) => {
                    if (filtered_data?.tab_id == activeTab) {
                      return filtered_data;
                    }
                  })
                  ?.map((data, index) => {
                    return (
                      <div key={index} className="">
                        {data?.tab_data?.map((data2) => {
                          return (
                            <div>
                              {data2?.type === "text" && (
                                <div
                                  onClick={() => setActiveInput(data2?.id)}
                                  onMouseEnter={() => setActiveInput(data2?.id)}
                                  onMouseLeave={() => setActiveInput(null)}
                                  className="bg-white  rounded-lg border border-transparent hover:border-gray-200 mb-2 p-5  group transition-all "
                                >
                                  <div>
                                    <button className="ml-auto block rounded-full  w-[40px] aspect-square bg-[#ff440d] text-white p-2 group-hover:opacity-100 opacity-0 transition-all ">
                                      <img
                                        src={cross_icon}
                                        alt="remove"
                                        className="w-[60%] mx-auto "
                                        onClick={() => {
                                          setPageData({
                                            ...pageData,
                                            all_tabs: pageData?.all_tabs
                                              ?.filter((filtered_data) => {
                                                if (
                                                  filtered_data?.tab_id ===
                                                  activeTab
                                                ) {
                                                  return filtered_data;
                                                }
                                                return filtered_data;
                                              })
                                              ?.map((all_tabs_data) => {
                                                return {
                                                  ...all_tabs_data,
                                                  tab_data:
                                                    all_tabs_data?.tab_data
                                                      ?.filter(
                                                        (filtered_tab_data) => {
                                                          if (
                                                            filtered_tab_data?.id !==
                                                            activeInput
                                                          ) {
                                                            return filtered_tab_data;
                                                          }
                                                        }
                                                      )
                                                      .map((tab_data_data) => {
                                                        return tab_data_data;
                                                      }),
                                                };
                                              }),
                                          });
                                        }}
                                      />
                                    </button>
                                  </div>
                                  <textarea
                                    type="text"
                                    rows={10}
                                    value={data2?.data}
                                    onClick={() => setActiveInput(data2?.id)}
                                    onChange={(e) => {
                                      setPageData({
                                        ...pageData,
                                        all_tabs: pageData?.all_tabs
                                          ?.filter((filtered_data) => {
                                            if (
                                              activeTab == filtered_data?.tab_id
                                            ) {
                                              return filtered_data;
                                            } else {
                                              return filtered_data;
                                            }
                                          })
                                          ?.map((data3) => {
                                            return {
                                              ...data3,
                                              tab_data: data3?.tab_data?.map(
                                                (data4) => {
                                                  if (
                                                    data4?.id == activeInput
                                                  ) {
                                                    return {
                                                      ...data4,
                                                      data: e?.target?.value,
                                                    };
                                                  } else {
                                                    return data4;
                                                  }
                                                }
                                              ),
                                            };
                                          }),
                                      });
                                    }}
                                    className="w-full outline-none  "
                                  />
                                </div>
                              )}

                              {data2?.type === "image" && (
                                <div
                                  onClick={() => setActiveInput(data2?.id)}
                                  onMouseEnter={() => setActiveInput(data2?.id)}
                                  onMouseLeave={() => setActiveInput(null)}
                                  className="bg-white  rounded-lg border border-transparent hover:border-gray-200 mb-2 p-5  group transition-all "
                                >
                                  <div>
                                    <button
                                      onClick={() => {
                                        setPageData({
                                          ...pageData,
                                          all_tabs: pageData?.all_tabs
                                            ?.filter((filtered_data) => {
                                              if (
                                                filtered_data?.tab_id ===
                                                activeTab
                                              ) {
                                                return filtered_data;
                                              }
                                              return filtered_data;
                                            })
                                            ?.map((all_tabs_data) => {
                                              return {
                                                ...all_tabs_data,
                                                tab_data:
                                                  all_tabs_data?.tab_data
                                                    ?.filter(
                                                      (filtered_tab_data) => {
                                                        if (
                                                          filtered_tab_data?.id !==
                                                          activeInput
                                                        ) {
                                                          return filtered_tab_data;
                                                        }
                                                      }
                                                    )
                                                    .map((tab_data_data) => {
                                                      return tab_data_data;
                                                    }),
                                              };
                                            }),
                                        });
                                      }}
                                      className="ml-auto mb-5 block rounded-full  w-[40px] aspect-square bg-[#ff440d] text-white p-2 group-hover:opacity-100 opacity-0 transition-all "
                                    >
                                      <img
                                        src={cross_icon}
                                        alt="remove"
                                        className="w-[60%] mx-auto "
                                      />
                                    </button>
                                  </div>
                                  <img
                                    src={VITE_BASE_LINK + data2?.data}
                                    alt=""
                                    className="w-full"
                                  />
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Tab name list */}
          <div className="w-[40%] min-w-[300px] sticky top-64">
            <h1 className="font-semibold">Tabs</h1>
            <div className="mt-5 space-y-5 max-h-[300px] px-2 overflow-y-scroll">
              {pageData?.all_tabs?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className={`  ${
                      activeTab === data?.tab_id
                        ? "bg-[#FC8D0B] text-white"
                        : "bg-white text-black"
                    } w-full  rounded-lg flex justify-between items-center`}
                  >
                    <button
                      onClick={() => setActiveTab(data?.tab_id)}
                      className={`p-3 rounded-lg font-medium    w-full text-left `}
                    >
                      <h1 className="">{data?.tab_name}</h1>
                    </button>

                    {/* hide tab */}
                    <button
                      className=" h-full  "
                      onClick={async () => {
                        const hidetab = await axios
                          .patch(
                            VITE_BASE_LINK +
                              location?.sub_admin_page_name +
                              "?page_id=" +
                              location?.sub_page_id,
                            {
                              data: {
                                tab_id: data?.tab_id,

                                // pageData?.all_tabs
                                //   ?.filter((filter_data) => {
                                //     if (filter_data?.tab_id === activeTab) {
                                //       return filter_data?.tab_id;
                                //     }
                                //   })
                                //   ?.map((data) => {
                                //     return data?.tab_id;
                                //   }),
                              },
                            }
                          )
                          .then((response) => {});

                        const homePageData = await axios
                          .get(
                            VITE_BASE_LINK +
                              location?.sub_admin_page_name +
                              "?page_id=" +
                              location?.sub_page_id
                          )
                          .then((response) => {
                            setActiveTab(response?.data?.all_tabs[0]?.tab_id);
                            setPageData(response?.data);
                          });
                      }}
                    >
                      <div>
                        {activeTab === data?.tab_id ? (
                          <img
                            src={
                              data?.show_status
                                ? eye_open_active
                                : eye_close_active
                            }
                            alt="visible"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        ) : (
                          <img
                            src={
                              data?.show_status
                                ? eye_open_inactive
                                : eye_close_inactive
                            }
                            alt="invisilble"
                            className="p-3 rounded-lg font-medium min-w-[40px] "
                          />
                        )}
                      </div>
                    </button>

                    {/* delete tab */}
                    <button
                      className=" h-full "
                      onClick={async () => {
                        let cnfText = confirm(
                          "Do you want to delete this tab?"
                        );
                        if (cnfText) {
                          const deleteTab = await axios
                            .delete(
                              VITE_BASE_LINK +
                                location?.sub_admin_page_name +
                                "?page_id=" +
                                location?.sub_page_id,
                              {
                                data: {
                                  tab_id: data?.tab_id,
                                  // pageData?.all_tabs
                                  //   ?.filter((filter_data) => {
                                  //     if (filter_data?.tab_id === activeTab) {
                                  //       return filter_data?.tab_id;
                                  //     }
                                  //   })
                                  //   ?.map((data) => {
                                  //     return data?.tab_id;
                                  //   }),
                                },
                              }
                            )
                            .then((response) => {});

                          const homePageData = await axios
                            .get(
                              VITE_BASE_LINK +
                                location?.sub_admin_page_name +
                                "?page_id=" +
                                location?.sub_page_id
                            )
                            .then((response) => {
                              setActiveTab(response?.data?.all_tabs[0]?.tab_id);
                              setPageData(response?.data);

                              alert("Tab deleted sucessfully");
                            });
                        }
                      }}
                    >
                      {activeTab === data?.tab_id ? (
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
                  </div>
                );
              })}
            </div>

            <div className="mt-10">
              <div className="flex  gap-5 mt-5">
                <button
                  onClick={async () => {
                    let formdata = new FormData();
                    formdata?.append("page_id", location?.sub_page_id);
                    const addNewTab = await axios
                      .post(
                        VITE_BASE_LINK +
                          location?.sub_admin_page_name +
                          "?page_id=" +
                          location?.sub_page_id,
                        formdata
                      )
                      .then((response) => {});

                    const homePageData = await axios
                      .get(
                        VITE_BASE_LINK +
                          location?.sub_admin_page_name +
                          "?page_id=" +
                          location?.sub_page_id
                      )
                      .then((response) => {
                        setActiveTab(
                          response?.data?.all_tabs[
                            response?.data?.all_tabs?.length - 1
                          ]?.tab_id
                        );
                        setPageData(response?.data);
                        alert("New tab added sucessfully");
                      });
                  }}
                  className="w-full p-3 px-5 bg-[#FF440D] text-white rounded-lg transition-all active:scale-95"
                >
                  Add New Tab
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSubPageLayout1;
