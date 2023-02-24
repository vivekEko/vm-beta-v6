import React, { useEffect, useState } from "react";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import axios from "axios";

const ShishyaEnrollForm = () => {
  const [selectedInput, setSelectedInput] = useState();
  const [pageData, setPageData] = useState();

  const pageData2 = {
    instruction: {
      heading: "Sri Vanamamalai/Thothadri Mutt - Sishyas/Volunteers Register",
      paragraph:
        "As per the wish of our current pontiff Srimath paramahamsEthyAdhi Madhurakavi VAnamAmalai RAmAnuja JIyar SwAmy, we are building a database of our Mutt Sishyas.",

      li: [
        "Please fill in all the details and register yourself for kainkaryams coordinated by our Mutt.",
        "Use another form and enter again for another person of your family.",
      ],

      sub_heading:
        "For any questions/comments about this form, please contact :",
      email: "vanamamalai.mutt@gmail.com ",
      phone: ["9677035530", "9500086417"],
      website: "https://vanamamalai.us",

      note: "Please note: ",
      star_li: [
        "Some kainkaryams require the person to have undergone Samasrayanam.",
        "Some kainkaryams require the person to have undergone Samasrayanam and Granthanvayam.",
      ],
    },

    questions_content: [
      {
        heading: "Name",
        required: true,
        answer: "",
        type: "text",
      },

      {
        heading: "Age Group",
        required: true,
        answer: "",
        type: "select",
        select_options: [
          "Less than 15",
          "16 to 20",
          "20 to 25",
          "26 to 30",
          "31 to 35",
          "36 to 40",
          "41 to 50",
          "51 to 60",
          "Above 60",
        ],
      },

      {
        heading: "Gender",
        required: true,
        answer: "",
        type: "select",
        radio_options: [
          { id: "s1", value: "Male" },
          { id: "s2", value: "Female" },
        ],

        select_options: ["Male", "Female"],
      },

      {
        heading: "Contact number (WhatsApp preferred)",
        sub_heading: "Enter your primary contact number.",
        required: true,
        answer: "",
        type: "tel",
      },

      {
        heading: "Email ID",
        sub_heading: "Enter your email address",
        required: true,
        answer: "",
        type: "email",
      },

      {
        heading: "Samasrayanam done?",
        sub_heading: "Have you undergone pancha samskaram?",
        required: true,
        answer: "",
        type: "select",
        select_options: ["Yes", "No"],
      },

      {
        heading: "Native Place",
        required: false,
        answer: "",
        type: "select",
        select_options: [
          "Vanamamalai / Nanguneri",
          "Chennai - Triplicane",
          "Chennai - Others",
          "Madurai",
          "Trichy",
          "Srirangam",
          "Kanchipuram",
          "Hyderabad",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "France",
          "Singapore",
          "Japan",
          "Perungulam",
          "Thenthirupperai",
          "Alwar Thirunagari",
          "Vadakarai",
          "Dusi-Mamandur",
          "Mannargudi",
          "Serangulam",
          "Mannarkoil",
          "Salem",
          "Coimbatore",
          "Athalanallur",
          "Thirukkurungudi",
          "Nathankoil",
          "Secunderabad",
          "Vijayawada",
          "Bengaluru",
          "Nepal",
          "Uttar Pradesh",
          "Orissa",
          "New Delhi",
          "Other",
        ],
      },

      {
        heading: "If other location where you preferred to do kainkaryam",
        sub_heading:
          "Do not enter anything if you have already chosen your preferred location, above.",
        required: false,
        answer: "",
        type: "text",
      },

      {
        heading: "Current Location",
        sub_heading: "Where are you currently residing?",
        required: false,
        answer: "",
        type: "select",
        select_options: [
          "Vanamamalai / Nanguneri",
          "Chennai - Triplicane",
          "Chennai - Others",
          "Madurai",
          "Trichy",
          "Srirangam",
          "Kanchipuram",
          "Hyderabad",
          "United States",
          "United Kingdom",
          "Australia",
          "Canada",
          "France",
          "Singapore",
          "Japan",
          "Perungulam",
          "Thenthirupperai",
          "Alwar Thirunagari",
          "Vadakarai",
          "Dusi-Mamandur",
          "Mannargudi",
          "Serangulam",
          "Mannarkoil",
          "Salem",
          "Coimbatore",
          "Athalanallur",
          "Thirukkurungudi",
          "Nathankoil",
          "Secunderabad",
          "Vijayawada",
          "Bengaluru",
          "Nepal",
          "Uttar Pradesh",
          "Orissa",
          "New Delhi",
          "Other",
        ],
      },

      {
        heading: "If other location where you residing in currently",
        sub_heading:
          "Do not enter anything if you have already chosen your current location, above.",
        required: false,
        answer: "",
        type: "text",
      },
    ],
  };
  useEffect(() => {
    setPageData(pageData2);
  }, []);

  // useEffect(() => {
  //   console.log("pageData", pageData?.questions_content);
  // }, [pageData]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    axios.post(VITE_BASE_LINK + "shishyasEnrollment", pageData)?.then((res) => {
      // console.log(res?.data);
      alert(res?.data?.message);
    });
  };

  return (
    <div className="font-inter bg-gray-50">
      <section>
        <img className="w-full " src="../form_banner.jpg" alt="" />
      </section>

      <section className="flex flex-col lg:flex-row items-start gap-5 py-10 w-[90%] mx-auto ">
        {/* instructions */}
        <div className="w-full  lg:sticky top-0">
          <h1 className="py-5  text-3xl xl:text-4xl">
            {pageData?.instruction?.heading}
          </h1>

          <div className="text-lg">
            <p className=" mb-2 mt-5">{pageData?.instruction?.paragraph}</p>

            <div>
              {pageData?.instruction?.li?.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-5 w-full">
                    <div className="bg-black w-[5px] aspect-square rounded-full"></div>

                    <h1 className=" ">{data}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-lg my-5 ">
            <p>{pageData?.instruction?.sub_heading}</p>
            <div className="flex gap-2 items-center mt-2 text-blue-600">
              <div className="text-gray-500">
                <MailRoundedIcon />
              </div>
              <a href={`mailto: ${pageData?.instruction?.email}`}>
                {pageData?.instruction?.email}
              </a>
            </div>

            <div className="flex gap-2 items-center mt-2 text-blue-600">
              <div className="text-gray-500">
                <LocalPhoneRoundedIcon />
              </div>
              <a href={`tel: ${pageData?.instruction?.phone[0]}`}>
                {pageData?.instruction?.phone[0]}
              </a>
              <span>/</span>
              <a className="" href={`tel: ${pageData?.instruction?.phone[1]}`}>
                {pageData?.instruction?.phone[1]}
              </a>
            </div>

            <div className="flex gap-2 items-center mt-2 text-blue-600">
              <div className="text-gray-500">
                <DesktopWindowsRoundedIcon />
              </div>
              <a target="_blank" href={` ${pageData?.instruction?.website}`}>
                {pageData?.instruction?.website}
              </a>
            </div>
          </div>

          <div className="text-lg">
            <p className=" mb-2 mt-5">{pageData?.instruction?.note}</p>

            <div>
              {pageData?.instruction?.star_li?.map((data, index) => {
                return (
                  <div key={index} className="flex items-center gap-5 w-full">
                    <div className="bg-black w-[5px] aspect-square rounded-full"></div>

                    <h1 className=" ">{data}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* form */}
        <form onSubmit={formSubmitHandler} className="w-full  pt-10">
          {pageData?.questions_content?.map((data, index) => {
            return (
              <div key={index}>
                {data?.type === "text" && pageData && (
                  <div className="mb-5 border p-5 rounded-xl bg-white">
                    <div className="mb-10">
                      <label className="font-semibold text-lg block mb-2 ">
                        <span> {data?.heading}</span>

                        {data?.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {data?.sub_heading && (
                        <label className=" text-lg block text-gray-800">
                          <span> {data?.sub_heading}</span>
                        </label>
                      )}
                    </div>
                    <input
                      type="text"
                      value={data?.answer}
                      onChange={(e) => {
                        setPageData({
                          ...pageData,
                          questions_content: pageData?.questions_content?.map(
                            (q_data, q_index) => {
                              if (selectedInput === q_index) {
                                return {
                                  ...q_data,
                                  answer: e?.target?.value,
                                };
                              } else {
                                return {
                                  ...q_data,
                                };
                              }
                            }
                          ),
                        });
                      }}
                      onFocus={() => setSelectedInput(index)}
                      onClick={() => setSelectedInput(index)}
                      placeholder="Your answer"
                      className="outline-none border-b-gray-300 p-2 block border-b w-full"
                    />
                  </div>
                )}

                {data?.type === "select" && pageData && (
                  <div className="mb-5 border p-5 rounded-xl bg-white">
                    <div className="mb-10">
                      <label className="font-semibold text-lg block mb-2 ">
                        <span> {data?.heading}</span>

                        {data?.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {data?.sub_heading && (
                        <label className=" text-lg block text-gray-800">
                          <span> {data?.sub_heading}</span>
                        </label>
                      )}
                    </div>

                    <div className="border rounded-xl relative  ">
                      <div
                        className="flex justify-between items-center cursor-pointer  p-3"
                        onClick={() => {
                          if (selectedInput === index) {
                            setSelectedInput(null);
                          } else {
                            setSelectedInput(index);
                          }
                        }}
                      >
                        <h1>
                          {" "}
                          {data?.answer?.length > 0 ? (
                            data?.answer
                          ) : (
                            <span className="text-gray-500">Choose</span>
                          )}
                        </h1>

                        <div>
                          <KeyboardArrowDownRoundedIcon className="text-gray-500" />
                        </div>
                      </div>

                      <div
                        className={`absolute top-[110%] left-0 right-0 bg-white  rounded-b-xl transition-all z-[50] ${
                          selectedInput === index
                            ? "max-h-[300px] overflow-y-scroll shadow-xl border"
                            : "max-h-0  overflow-hidden"
                        } `}
                      >
                        {data?.select_options?.map(
                          (option_data, option_index) => {
                            return (
                              <div
                                className="p-3 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                  setPageData({
                                    ...pageData,
                                    questions_content:
                                      pageData?.questions_content?.map(
                                        (q_data, q_index) => {
                                          if (q_index === selectedInput) {
                                            return {
                                              ...q_data,
                                              answer: option_data,
                                            };
                                          } else {
                                            return {
                                              ...q_data,
                                            };
                                          }
                                        }
                                      ),
                                  });

                                  setSelectedInput(null);
                                }}
                              >
                                {option_data}
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* {data?.type === "radio" && pageData && (
                  <div className="mb-5 border p-5 rounded-xl bg-white">
                    <div className="mb-10">
                      <label className="font-semibold text-lg block mb-2 ">
                        <span> {data?.heading}</span>

                        {data?.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {data?.sub_heading && (
                        <label className=" text-lg block text-gray-800">
                          <span> {data?.sub_heading}</span>
                        </label>
                      )}
                    </div>
                    <div>
                      {data?.radio_options?.map((r_data, r_index) => {
                        return (
                          <div
                            className="flex gap-2 "
                            onClick={() => {
                              if (selectedInput === r_data?.id) {
                                setSelectedInput(null);
                              } else {
                                setSelectedInput(r_data?.id);
                              }
                            }}
                          >
                            <div className="flex justify-center items-center">
                              <div
                                className={` ${
                                  data?.answer === r_data?.value
                                    ? "bg-blue-600"
                                    : "bg-white"
                                } w-4 rounded-full border border-gray-400 aspect-square `}
                              ></div>
                            </div>
                            <h1> {r_data?.value}</h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )} */}

                {data?.type === "tel" && pageData && (
                  <div className="mb-5 border p-5 rounded-xl bg-white">
                    <div className="mb-10">
                      <label className="font-semibold text-lg block mb-2 ">
                        <span> {data?.heading}</span>

                        {data?.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {data?.sub_heading && (
                        <label className=" text-lg block text-gray-800">
                          <span> {data?.sub_heading}</span>
                        </label>
                      )}
                    </div>
                    <input
                      type="text"
                      inputMode="numeric"
                      patter="\d*"
                      value={data?.answer}
                      onChange={(e) => {
                        setPageData({
                          ...pageData,
                          questions_content: pageData?.questions_content?.map(
                            (q_data, q_index) => {
                              if (selectedInput === q_index) {
                                return {
                                  ...q_data,
                                  answer: e?.target?.value,
                                };
                              } else {
                                return {
                                  ...q_data,
                                };
                              }
                            }
                          ),
                        });
                      }}
                      onFocus={() => setSelectedInput(index)}
                      onClick={() => setSelectedInput(index)}
                      placeholder="Your phone number"
                      className="outline-none border-b-gray-300 p-2 block border-b w-full"
                    />
                  </div>
                )}

                {data?.type === "email" && pageData && (
                  <div className="mb-5 border p-5 rounded-xl bg-white">
                    <div className="mb-10">
                      <label className="font-semibold text-lg block mb-2 ">
                        <span> {data?.heading}</span>

                        {data?.required && (
                          <span className="text-red-500 ml-1">*</span>
                        )}
                      </label>

                      {data?.sub_heading && (
                        <label className=" text-lg block text-gray-800">
                          <span> {data?.sub_heading}</span>
                        </label>
                      )}
                    </div>
                    <input
                      type="email"
                      value={data?.answer}
                      onChange={(e) => {
                        setPageData({
                          ...pageData,
                          questions_content: pageData?.questions_content?.map(
                            (q_data, q_index) => {
                              if (selectedInput === q_index) {
                                return {
                                  ...q_data,
                                  answer: e?.target?.value,
                                };
                              } else {
                                return {
                                  ...q_data,
                                };
                              }
                            }
                          ),
                        });
                      }}
                      onFocus={() => setSelectedInput(index)}
                      onClick={() => setSelectedInput(index)}
                      placeholder="Your email"
                      className="outline-none border-b-gray-300 p-2 block border-b w-full"
                    />
                  </div>
                )}
              </div>
            );
          })}

          <div className="mt-10 flex justify-end items-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-lg active:scale-95 transition-all px-10 py-3 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ShishyaEnrollForm;
