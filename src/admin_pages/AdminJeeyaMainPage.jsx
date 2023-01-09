import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Admin_header from "../components/admin/admin_global_components/Admin_header";
import image_icon from "../assets/img/admin/home_edit/image_icon.svg";
import delete_icon from "../assets/img/admin/home_edit/delete.svg";
import delete_icon_active from "../assets/img/admin/home_edit/delete-active.svg";
import edit_icon_active from "../assets/img/admin/sub_page_layout_1_edit/edit_icon_active.svg";
import edit_icon from "../assets/img/admin/sub_page_layout_1_edit/edit_icon.svg";
import eye_open_inactive from "../assets/img/admin/home_edit/eye_open_inactive.svg";
import eye_open_active from "../assets/img/admin/home_edit/eye_open.svg";
import eye_close_inactive from "../assets/img/admin/home_edit/eye_close.svg";
import eye_close_active from "../assets/img/admin/home_edit/eye_close_active.svg";
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import { Link, useParams } from "react-router-dom";

const AdminJeeyaMainPage = () => {
  const pageData2 = {
    pageName: "Jeeyar Parampara",
    jeeyar_list: [
      {
        id: 100,
        name: "Jeeyar Name 1",
        image: "/img/src",
        number: 0,
        number_suffix: "st",
        from: 1480,
        to: 1568,
        prefix: "AD",
        show_status: true,
        sub_page_link: "/sub_page_layout_1_edit",
      },

      {
        id: 101,
        name: "Jeeyar Name 2",
        image: "/img/src",
        number: 1,
        number_suffix: "nd",
        from: 1860,
        to: 1940,
        prefix: "AD",
        show_status: true,
        sub_page_link: "/sub_page_layout_1_edit",
      },

      {
        id: 102,
        name: "Jeeyar Name 3",
        image: "/img/src",
        number: 2,
        number_suffix: "rd",
        from: 1990,
        to: 2000,
        prefix: "AD",
        show_status: false,
        sub_page_link: "/sub_page_layout_1_edit",
      },
    ],
  };

  const [activeJeeyar, setActiveJeeyar] = useState();
  const [pageData, setPageData] = useState();

  const location = useParams();

  useEffect(() => {
    axios.get(VITE_BASE_LINK + "jeeyars_edit").then((response) => {
      console.log("response", response?.data);
      setPageData(response?.data);
      setActiveJeeyar(response?.data?.jeeyar_list[0]?.id);
    });
  }, [location]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />

      <div className="flex justify-between items-start py-10 z-[100] sticky  top-24 bg-[#FFF6EB] px-16">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <h1 className="text-3xl uppercase font-bold">{pageData?.pageName}</h1>
        </div>

        <div className="flex-1 ">
          <button
            onClick={() => {
              let cnfText = confirm("Do you want to pulished the data now?");

              if (cnfText) {
                axios
                  .put(VITE_BASE_LINK + "jeeyars_edit", pageData)
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
        <div className="">
          {/* heading */}
          <div className="bg-white p-5 rounded-lg  border-[#E0E2E7] border">
            <div className="flex items-center gap-5  border-b-[#E0E2E7] border-b pb-5">
              <h1 className="font-semibold">Heading</h1>
            </div>

            <div className="mt-5">
              <textarea
                type="text"
                rows={2}
                value={pageData?.pageName}
                onChange={(e) => {
                  setPageData({
                    ...pageData,
                    pageName: e?.target?.value,
                  });
                }}
                className="w-full outline-none border-0"
              />
            </div>
          </div>

          {/* jeeyar banner image */}

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
                  <h2 className=" block text-white">PNG, JPG, GIF up to 5MB</h2>
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

          <div className="bg-[#C7C7C7] h-[2px] rounded-lg my-10"></div>

          {/* jeeyar other info */}
          <div className="bg-[#FFEAD0] p-5 rounded-lg">
            {/* jeeyar image */}
            <div className="my-10 ">
              <div className="flex items-center gap-5">
                <h1 className="font-semibold">Jeeyar Image</h1>
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
                    src={
                      VITE_BASE_LINK +
                      pageData?.jeeyar_list
                        ?.filter((filter_data) => {
                          if (activeJeeyar === filter_data?.id) {
                            return filter_data;
                          }
                        })
                        ?.map((data) => data?.image)
                    }
                    alt=""
                    className=""
                  />
                  <input
                    // ref={hiddenFileInput}
                    className="opacity-0 hidden cursor-pointer inset-0 "
                    id="upload-image"
                    type="file"
                    // onClick={() => setActiveInput(data?.id)}
                    onChange={(e) => {
                      let formdata = new FormData();
                      formdata.append("file", e?.target?.files[0]);
                      formdata.append(
                        "id",
                        pageData?.jeeyar_list
                          ?.filter((filter_data) => {
                            if (activeJeeyar === filter_data?.id) {
                              return filter_data;
                            }
                          })
                          ?.map((data) => {
                            return data?.id;
                          })
                      );

                      formdata?.append("pageData", JSON.stringify(pageData));

                      axios
                        .post(VITE_BASE_LINK + "addImageJeeyarAdmin", formdata)
                        .then((response) => {
                          setPageData(response?.data);
                        });
                    }}
                  />
                </label>
              </div>
            </div>

            {/* jeeyar name and number */}
            <div className="flex items-center gap-5">
              {/* jeeyar name */}
              <div className=" w-full">
                <div className="  ">
                  <h1 className="font-semibold">Jeeyar Name</h1>
                </div>

                <div className="mt-4 bg-white p-3 px-5 w-full rounded-lg  border-[#E0E2E7] border">
                  <input
                    type="text"
                    value={pageData?.jeeyar_list
                      ?.filter((filter_data) => {
                        if (activeJeeyar === filter_data?.id) {
                          return filter_data;
                        }
                      })
                      ?.map((data) => {
                        return data?.name;
                      })}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        jeeyar_list: pageData?.jeeyar_list?.map((data) => {
                          if (data?.id == activeJeeyar) {
                            return {
                              ...data,
                              name: e?.target?.value,
                            };
                          }
                          return data;
                        }),
                      });
                    }}
                    className="w-full block outline-none border-0"
                  />
                </div>
              </div>

              {/* jeeyar number */}
              <div className="">
                <div className="  ">
                  <h1 className="font-semibold">Jeeyar Number</h1>
                </div>

                <div className="mt-4 bg-white p-3 px-5 w-full rounded-lg  border-[#E0E2E7] border">
                  <input
                    type="number"
                    value={pageData?.jeeyar_list
                      ?.filter((filter_data) => {
                        if (activeJeeyar === filter_data?.id) {
                          return filter_data;
                        }
                      })
                      ?.map((data) => {
                        return data?.jeeyar_no;
                      })}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        jeeyar_list: pageData?.jeeyar_list?.map((data) => {
                          if (data?.id == activeJeeyar) {
                            return {
                              ...data,
                              jeeyar_no: e?.target?.value,
                            };
                          }
                          return data;
                        }),
                      });
                    }}
                    className="w-full block outline-none border-0"
                  />
                </div>
              </div>
            </div>

            {/* jeeyar from and to date with prefix */}
            <div className="flex justify-between items-center gap-5 mt-5">
              {/* jeeyar from */}
              <div className="">
                <div className="  ">
                  <h1 className="font-semibold">From</h1>
                </div>

                <div className="mt-4 bg-white p-3 px-5 w-full rounded-lg  border-[#E0E2E7] border">
                  <input
                    type="number"
                    value={pageData?.jeeyar_list
                      ?.filter((filter_data) => {
                        if (activeJeeyar === filter_data?.id) {
                          return filter_data;
                        }
                      })
                      ?.map((data) => {
                        return data?.start_date;
                      })}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        jeeyar_list: pageData?.jeeyar_list?.map((data) => {
                          if (data?.id == activeJeeyar) {
                            return {
                              ...data,
                              start_date: e?.target?.value,
                            };
                          }
                          return data;
                        }),
                      });
                    }}
                    className="w-full block outline-none border-0"
                  />
                </div>
              </div>

              {/* jeeyar to */}
              <div className="">
                <div className="  ">
                  <h1 className="font-semibold">To</h1>
                </div>

                <div className="mt-4 bg-white p-3 px-5 w-full rounded-lg  border-[#E0E2E7] border">
                  <input
                    type="number"
                    value={pageData?.jeeyar_list
                      ?.filter((filter_data) => {
                        if (activeJeeyar === filter_data?.id) {
                          return filter_data;
                        }
                      })
                      ?.map((data) => {
                        return data?.end_date;
                      })}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        jeeyar_list: pageData?.jeeyar_list?.map((data) => {
                          if (data?.id == activeJeeyar) {
                            return {
                              ...data,
                              end_date: e?.target?.value,
                            };
                          }
                          return data;
                        }),
                      });
                    }}
                    className="w-full block outline-none border-0"
                  />
                </div>
              </div>

              {/* jeeyar prefix */}
              <div className="">
                <div className="  ">
                  <h1 className="font-semibold">Prefix</h1>
                </div>

                <div className="mt-4 bg-white p-3 px-5 w-full rounded-lg  border-[#E0E2E7] border">
                  <input
                    type="text"
                    value={pageData?.jeeyar_list
                      ?.filter((filter_data) => {
                        if (activeJeeyar === filter_data?.id) {
                          return filter_data;
                        }
                      })
                      ?.map((data) => {
                        return data?.prefix;
                      })}
                    onChange={(e) => {
                      setPageData({
                        ...pageData,
                        jeeyar_list: pageData?.jeeyar_list?.map((data) => {
                          if (data?.id == activeJeeyar) {
                            return {
                              ...data,
                              prefix: e?.target?.value,
                            };
                          }
                          return data;
                        }),
                      });
                    }}
                    className="w-full block outline-none border-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* jeeyar list */}
        <div className="w-[40%] min-w-[300px] sticky top-64 ">
          <h1 className="font-semibold">Jeeyars</h1>
          <div className="mt-5 space-y-5 max-h-[300px] px-2 overflow-y-scroll">
            {pageData?.jeeyar_list?.map((data) => {
              return (
                <div
                  key={data?.id}
                  className={`  ${
                    activeJeeyar === data?.id
                      ? "bg-[#FC8D0B] text-white"
                      : "bg-white text-black"
                  } w-full  rounded-lg flex justify-between items-center`}
                >
                  <button
                    onClick={() => setActiveJeeyar(data?.id)}
                    className={`p-3 rounded-lg font-medium    w-full text-left `}
                  >
                    <h1 className="">{data?.name}</h1>
                  </button>

                  {/* edit tab */}
                  <Link to={data?.sub_page_link} className=" h-full ">
                    {activeJeeyar === data?.id ? (
                      <img
                        src={edit_icon_active}
                        alt="edit"
                        className="p-3 rounded-lg font-medium min-w-[40px] "
                      />
                    ) : (
                      <img
                        src={edit_icon}
                        alt="edit"
                        className="p-3 rounded-lg font-medium min-w-[40px] "
                      />
                    )}
                  </Link>

                  {/* hide tab */}
                  <button
                    className=" h-full  "
                    onClick={async () => {
                      const hideJeeyar = await axios
                        .patch(VITE_BASE_LINK + "jeeyars_edit", {
                          data: {
                            jeeyar_id: data?.id,
                          },
                        })
                        .then((response) => {});

                      const pageData = await axios
                        .get(VITE_BASE_LINK + "jeeyars_edit")
                        .then((response) => {
                          setActiveJeeyar(response?.data?.jeeyar_list[0]?.id);
                          setPageData(response?.data);
                        });
                    }}
                  >
                    <div>
                      {activeJeeyar === data?.id ? (
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
                        "Do you want to delete this Jeeyar data?"
                      );
                      if (cnfText) {
                        const deleteJeeyar = await axios
                          .delete(VITE_BASE_LINK + "jeeyars_edit", {
                            data: {
                              jeeyar_id: data?.id,
                            },
                          })
                          .then((response) => {});

                        const pageData = await axios
                          .get(VITE_BASE_LINK + "jeeyars_edit")
                          .then((response) => {
                            setActiveJeeyar(response?.data?.jeeyar_list[0]?.id);
                            setPageData(response?.data);
                          });
                      }
                    }}
                  >
                    {activeJeeyar === data?.id ? (
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
                  // formdata?.append("page_id", location?.sub_page_id);
                  const addNewJeeyar = await axios
                    .post(VITE_BASE_LINK + "jeeyars_edit")
                    .then((response) => {});

                  const pageData = await axios
                    .get(VITE_BASE_LINK + "jeeyars_edit")
                    .then((response) => {
                      setActiveJeeyar(
                        response?.data?.jeeyar_list[
                          response?.data?.jeeyar_list?.length - 1
                        ]?.id
                      );
                      setPageData(response?.data);
                      alert("New tab added sucessfully");
                    });
                }}
                className="p-3 px-5 w-full bg-[#FF440D] text-white rounded-lg transition-all active:scale-95"
              >
                Add New Jeeyar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminJeeyaMainPage;
