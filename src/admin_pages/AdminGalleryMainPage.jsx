import React, { useEffect, useState } from "react";
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
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminGalleryMainPage = () => {
  const pageData2 = {
    pageName: "Gallery",
    banner_image: "lorem",
    yt_links: [
      { id: "1", link: "", link_name: "" },

      { id: "2", link: "", link_name: "" },

      { id: "3", link: "", link_name: "" },
    ],
    albums: [
      { id: "1", album_link: "", album_name: "Album 1", show_status: true },

      { id: "2", album_link: "", album_name: "Album 2", show_status: true },

      { id: "3", album_link: "", album_name: "Album 3", show_status: true },
    ],
  };

  const [pageData, setPageData] = useState();
  const [activeInput, setActiveInput] = useState();

  useEffect(() => {
    // setPageData(pageData2);

    axios.get(VITE_BASE_LINK + "gallery_edit").then((response) => {
      setPageData(response?.data);
    });
  }, []);

  useEffect(() => {}, [pageData]);

  return (
    <div className="bg-[#FFF6EB] min-h-screen font-inter pb-52">
      <Admin_header />
      <div className="flex justify-between items-start py-10  sticky z-[100]  top-24 bg-[#FFF6EB] px-16">
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
                  .put(VITE_BASE_LINK + "gallery_edit", pageData)
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
          {pageData?.pageName && (
            <div className="bg-white p-5 rounded-lg  border-[#E0E2E7] border ">
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
          )}

          {pageData?.banner_image && (
            <div className="my-10 ">
              <div className="flex items-center gap-5">
                <h1 className="font-semibold">Banner Image</h1>
              </div>
              <div className="mt-2 bg-white  border border-dashed rounded-lg h-full min-h-[200px] border-[#E0E2E7] ">
                <label
                  // onClick={handleClick}
                  htmlFor="upload-cover-image"
                  className="flex flex-col  justify-center items-center h-full min-h-[200px] border cursor-pointer group transition-all relative z-20"
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
                    src={VITE_BASE_LINK + pageData?.banner_image}
                    alt=""
                    className=""
                  />
                  <input
                    // ref={hiddenFileInput}
                    className="opacity-0 cursor-pointer inset-0 "
                    id="upload-cover-image"
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

          {pageData?.yt_links && (
            <div className="my-20 w-[60%] mx-auto ">
              <div className="flex justify-between items-center text-xl">
                <div>
                  <h1 className="font-semibold mb-5">Youtube Links</h1>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    {pageData?.yt_links?.length}
                  </span>
                  <button
                    //   onClick={async () => {
                    //     const addSubPage = await axios
                    //       .post(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                    //       .then((response) => {
                    //         console.log(response?.data);
                    //       });

                    //     const allPageData = await axios
                    //       .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                    //       .then((response) => {
                    //         setPageData(response?.data);
                    //         setImageArray(response?.data?.all_input_fields[1]?.content);
                    //         alert("Sub page added sucessfully");
                    //       });
                    //   }}
                    className="active:scale-95 transition-all"
                  >
                    <img
                      src={add_icon}
                      alt="add youtube link"
                      onClick={async () => {
                        const formdata = new FormData();
                        formdata?.append("type", "y");

                        const add_link = await axios
                          .post(VITE_BASE_LINK + "gallery_edit", formdata)
                          .then((response) => {});

                        const page_data = axios
                          .get(VITE_BASE_LINK + "gallery_edit")
                          .then((response) => {
                            setPageData(response?.data);
                          });
                      }}
                    />
                  </button>
                </div>
              </div>

              <div>
                {pageData?.yt_links?.map((yt_data) => {
                  return (
                    <div className="flex items-end gap-5 my-5">
                      <div className="flex-1">
                        <h1 className="mb-1 text-gray-600">Link</h1>
                        <input
                          type="text"
                          value={yt_data?.url}
                          onClick={() => setActiveInput(yt_data?.id)}
                          onChange={(e) => {
                            setPageData({
                              ...pageData,
                              yt_links: pageData?.yt_links?.map((data) => {
                                if (data?.id === activeInput) {
                                  return {
                                    ...data,
                                    url: e?.target?.value,
                                  };
                                }
                                return data;
                              }),
                            });
                          }}
                          className="w-full p-3"
                        />
                      </div>
                      <div className="flex-1">
                        <h1 className="mb-1 text-gray-600">Title</h1>
                        <input
                          type="text"
                          value={yt_data?.title}
                          onClick={() => setActiveInput(yt_data?.id)}
                          onChange={(e) => {
                            setPageData({
                              ...pageData,
                              yt_links: pageData?.yt_links?.map((data) => {
                                if (data?.id === activeInput) {
                                  return {
                                    ...data,
                                    title: e?.target?.value,
                                  };
                                }
                                return data;
                              }),
                            });
                          }}
                          className="w-full p-3"
                        />
                      </div>

                      <div className="">
                        <img
                          src={delete_icon}
                          alt="delete"
                          className={`  cursor-pointer min-w-[20px] transition-all active:scale-95 w-[20px] mb-3`}
                          onClick={async () => {
                            let cnfText = confirm(
                              "Do you want to delete this sub page?"
                            );

                            if (cnfText) {
                              const deleteAlbum = await axios
                                .delete(VITE_BASE_LINK + "gallery_edit", {
                                  data: {
                                    id: yt_data?.id,
                                    type: "y",
                                  },
                                })
                                .then((response) => {});

                              const allPageData = await axios
                                .get(VITE_BASE_LINK + "gallery_edit")
                                .then((response) => {
                                  setPageData(response?.data);

                                  alert("Sub page deleted sucessfully");
                                });
                            }
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {pageData?.albums && (
            <div className="w-[60%] mx-auto mt-16">
              <div className="flex justify-between items-center text-xl">
                <h1 className="font-semibold">Albums</h1>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">
                    {pageData?.albums?.length}
                  </span>
                  <button
                    //  onClick={async () => {
                    //    const addSubPage = await axios
                    //      .post(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                    //      .then((response) => {
                    //        console.log(response?.data);
                    //      });

                    //    const allPageData = await axios
                    //      .get(VITE_BASE_LINK + pathname?.sub_admin_page_name)
                    //      .then((response) => {
                    //        setPageData(response?.data);
                    //        setImageArray(response?.data?.all_input_fields[1]?.content);
                    //        alert("Sub page added sucessfully");
                    //      });
                    //  }}
                    className="active:scale-95 transition-all"
                  >
                    <img
                      src={add_icon}
                      alt="add"
                      onClick={async () => {
                        const formdata = new FormData();
                        formdata?.append("type", "a");

                        const add_link = await axios
                          .post(VITE_BASE_LINK + "gallery_edit", formdata)
                          .then((response) => {});

                        const page_data = axios
                          .get(VITE_BASE_LINK + "gallery_edit")
                          .then((response) => {
                            setPageData(response?.data);
                          });
                      }}
                    />
                  </button>
                </div>
              </div>

              <div className="mt-10">
                {pageData?.albums?.map((data, index) => {
                  return (
                    <div
                      key={data?.id}
                      className="flex justify-between mb-5 bg-white rounded-lg overflow-hidden"
                    >
                      <div className=" w-full">
                        <Link to={data?.album_link} className="p-5 block">
                          <h1 className="capitalize font-semibold text-[#6B7280]">
                            {data?.album_name}
                          </h1>
                        </Link>
                      </div>

                      <div className="flex gap-5 items-center p-5">
                        <Link to={data?.album_link}>
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
                              const deleteAlbum = await axios
                                .delete(VITE_BASE_LINK + "gallery_edit", {
                                  data: {
                                    id: data?.id,
                                    type: "a",
                                  },
                                })
                                .then((response) => {});

                              const allPageData = await axios
                                .get(VITE_BASE_LINK + "gallery_edit")
                                .then((response) => {
                                  setPageData(response?.data);

                                  alert("Sub page deleted sucessfully");
                                });
                            }
                          }}
                        />
                        <img
                          src={
                            data?.show_status
                              ? eye_open_inactive
                              : eye_close_inactive
                          }
                          alt="visibility"
                          className={` ${
                            index === 0 ? "hidden" : ""
                          } cursor-pointer min-w-[20px] transition-all active:scale-95 `}
                          onClick={async () => {
                            const hideAlbum = await axios
                              .patch(VITE_BASE_LINK + "gallery_edit", {
                                data: {
                                  album_id: data?.id,
                                },
                              })
                              .then((response) => {});

                            const allPageData = await axios
                              .get(VITE_BASE_LINK + "gallery_edit")
                              .then((response) => {
                                setPageData(response?.data);
                              });
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGalleryMainPage;
