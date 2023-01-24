// Routing
import { useEffect } from "react";
import { Routes, Route, useLocation, Link, Navigate } from "react-router-dom";
//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import currentPathAtom from "./recoil/helpers/currentPathAtom";

// stylesheet
import "./App.css";
import Sidebar from "./components/globalComponents/Sidebar";

// components
import Landing from "./pages/Landing";
import Header from "./components/globalComponents/Header";
import SecondaryLayout_1 from "./pages/SecondaryLayout_1";
import SecondaryLayout_2 from "./pages/SecondaryLayout_2";
import SecondaryLayout_3 from "./pages/SecondaryLayout_3";
import SecondaryLayout_4 from "./pages/SecondaryLayout_4";
import SecondaryLayout_5 from "./pages/SecondaryLayout_5";
import Login from "./pages/Login";
import ProtectedRoutes from "./utils/routing/ProtectedRoutes";
import AdminDashboard from "./admin_pages/AdminDashboard";
import ProtectedFromAdmin from "./utils/routing/ProtectedFromAdmin";
import Admin_sidebar from "./components/admin/admin_global_components/Admin_sidebar";
import AdminHomePage from "./admin_pages/AdminHomePage";
import AdminMainPageLayout1 from "./admin_pages/AdminMainPageLayout1";
import AdminSubPageLayout1 from "./admin_pages/AdminSubPageLayout1";
import AdminJeeyaMainPage from "./admin_pages/AdminJeeyaMainPage";
import AdminGalleryMainPage from "./admin_pages/AdminGalleryMainPage";
import AdminSubAlbumPage from "./admin_pages/AdminSubAlbumPage";
import AdminAlbumPage from "./admin_pages/AdminAlbumPage";
import AdminHomePageV2 from "./admin_pages/AdminHomePageV2";
import sidebarStatusAtom from "./recoil/sidebar/sidebarStatusAtom";
import subScribeAtom from "./recoil/sidebar/subScribeAtom";
import cross from "./assets/img/landingPage/cross.svg";
import { useState } from "react";
import axios from "axios";
import { VITE_BASE_LINK } from "./base_link/BaseLink";
import { useDetectClickOutside } from "react-detect-click-outside";

// import { Country, State, City } from "country-state-city";

function App() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  const [subscribe, setSubscribe] = useRecoilState(subScribeAtom);
  const location = useLocation();

  // local variables
  const [subscribeValues, setSubscribeValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    city: "",
    state: "",
    country: "",
  });

  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);

  const [addressList, setAddressList] = useState({
    country: false,
    state: false,
    city: false,
  });

  const [selectedCountryCode, setSelectedCountryCode] = useState();
  const [selectedStateCode, setSelectedSateCode] = useState();
  const [selectedCity, setSelectedCity] = useState();

  // search items
  const [countrySearch, setCountrySearch] = useState("");
  const [stateSearch, setStateSearch] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [disableFields, setDisableFields] = useState({
    country: false,
    city: true,
    state: true,
  });

  useEffect(() => {
    setCurrentPath(location);
  }, [location]);

  useEffect(() => {
    axios?.post(VITE_BASE_LINK + "countriesAll")?.then((res) => {
      setCountryList(res?.data?.country_list);
    });
  }, []);

  useEffect(() => {
    const formdata = new FormData();
    formdata?.append("country", selectedCountryCode);
    if (selectedCountryCode?.length > 0) {
      axios?.post(VITE_BASE_LINK + "stateOfCountry", formdata)?.then((res) => {
        // console.log("##### STATE LIST #####", res?.data);
        setStateList(res?.data?.state_list);
        setDisableFields({
          ...disableFields,
          state: false,
          city: true,
        });
      });
    }
  }, [selectedCountryCode]);

  useEffect(() => {
    const formdata = new FormData();
    formdata?.append("country", selectedCountryCode);
    formdata?.append("state", selectedStateCode);
    if (selectedCountryCode?.length > 0 && selectedStateCode?.length > 0) {
      axios
        ?.post(VITE_BASE_LINK + "cityOfCountryState", formdata)
        ?.then((res) => {
          // console.log("##### CITY LIST #####", res?.data);
          setCityList(res?.data?.cities_list);
          setDisableFields({
            ...disableFields,
            city: false,
          });
        });
    }
  }, [selectedStateCode]);

  return (
    <div className="font-oswald cursor-default">
      <div
        className={` ${
          currentPath?.pathname?.includes("home")
            ? ` ${sidebarStatus ? "block lg:hidden" : "hidden"}`
            : sidebarStatus
            ? "block"
            : "hidden"
        } z-[9000] bg-black bg-opacity-40 fixed inset-0`}
        onClick={() => setSidebarStatus(false)}
      ></div>

      {/* menu */}
      <div
        className={`  ${
          currentPath?.pathname?.includes("/home")
            ? "fixed z-[10000] top-9 left-2 md:left-5 lg:left-8 xl:left-5 text-xl  font-bold hidden 2xl:block"
            : "hidden"
        } 
          
          ${sidebarStatus ? "text-[#630000]" : "text-[#630000]"}

         

          `}
      >
        MENU
      </div>

      {/* hamburger menu */}
      <button
        className={` z-[20000]  fixed top-0 left-0  text-xl  font-bold  2xl:hidden
       
        

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
      </button>

      {/* subscribe modal */}
      <div
        onClick={() => setSubscribe(false)}
        className={` ${
          subscribe ? "ease-in block" : "ease-out hidden"
        } fixed inset-0 bg-black duration-300 bg-opacity-60 z-[21000]`}
      ></div>

      <div
        className={`${
          subscribe ? "ease-in block" : "ease-out hidden"
        } fixed z-[21500] bg-[#FFD29E] p-5 min-h-[250px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] rounded-lg`}
      >
        <div className="flex justify-end">
          <button onClick={() => setSubscribe(false)}>
            <img src={cross} alt="close" className="w-[25px] cursor-pointer" />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              subscribeValues?.first_name?.length > 0 &&
              subscribeValues?.last_name?.length > 0 &&
              subscribeValues?.email?.length > 0 &&
              subscribeValues?.phone_no?.length > 0 &&
              subscribeValues?.country?.length > 0
            ) {
              axios
                ?.post(VITE_BASE_LINK + "suscribeStore", subscribeValues)
                .then((res) => {
                  setSubscribe(false);
                  alert("Subscribed sucessfully");
                  setSubscribeValues({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone_no: "",
                    city: "",
                    state: "",
                    country: "",
                  });
                });
            } else {
              alert("All fields are required.");
            }
          }}
          className="space-y-5 mt-5"
        >
          <div className="flex justify-center gap-5">
            <label htmlFor="" className="block w-full">
              <h1 className="mb-1">First Name</h1>
              <input
                name="first_name"
                type="text"
                value={subscribeValues?.first_name}
                onChange={(e) => {
                  setSubscribeValues({
                    ...subscribeValues,
                    first_name: e?.target?.value,
                  });
                }}
                className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border rounded-lg"
              />
            </label>
            <label htmlFor="" className="block w-full">
              <h1 className="mb-1">Last Name</h1>
              <input
                name="last_name"
                type="text"
                value={subscribeValues?.last_name}
                onChange={(e) => {
                  setSubscribeValues({
                    ...subscribeValues,
                    last_name: e?.target?.value,
                  });
                }}
                className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
              />
            </label>
          </div>

          <label htmlFor="" className="block w-full">
            <h1 className="mb-1">Mobile Number</h1>
            <input
              name="phone"
              type="number"
              value={subscribeValues?.phone_no}
              onChange={(e) => {
                setSubscribeValues({
                  ...subscribeValues,
                  phone_no: e?.target?.value,
                });
              }}
              className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border"
            />
          </label>

          <div className="flex justify-center gap-5">
            {/* country */}
            <label id="country" className="block w-full relative pb-2">
              <h1 className="mb-1">Country</h1>
              <div
                onClick={() => {
                  setAddressList({
                    city: false,
                    state: false,
                    country: !addressList?.country,
                  });
                }}
                className="w-full p-2 min-h-[40px] bg-white cursor-pointer border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border peer"
              >
                {" "}
                {subscribeValues?.country?.length > 0 ? (
                  subscribeValues?.country
                ) : (
                  <h1 className="text-gray-500">Select Country</h1>
                )}{" "}
              </div>

              <div
                className={` ${
                  addressList?.country ? "block" : "hidden"
                }  absolute top-[100%] left-0 w-full bg-white   `}
              >
                <div className="w-full mb-2 ">
                  <input
                    type="search"
                    name="country"
                    value={countrySearch}
                    onChange={(e) => {
                      setCountrySearch(e?.target?.value);
                    }}
                    placeholder=" Search country"
                    className=" w-full p-2 outline-none border-b border-b-gray-300 font-caladea "
                  />
                </div>

                <div className="h-[200px] overflow-y-scroll ">
                  {countryList
                    ?.filter((filtered_data) => {
                      if (countrySearch?.length > 0) {
                        if (
                          filtered_data
                            ?.toLowerCase()
                            ?.includes(countrySearch?.toLowerCase())
                        ) {
                          return filtered_data;
                        }
                      } else {
                        return filtered_data;
                      }
                    })
                    ?.map((data) => {
                      return (
                        <div
                          className={` ${
                            data === selectedCountryCode
                              ? "bg-[#FF9D7D] bg-opacity-40"
                              : "hover:bg-[#FF9D7D] hover:bg-opacity-20 "
                          }  font-caladea text-base  transition-all cursor-pointer text-gray-900 p-2`}
                          onClick={() => {
                            setSelectedCountryCode(data);
                            setSubscribeValues({
                              ...subscribeValues,
                              country: data,
                              state: "",
                              city: "",
                            });
                            setAddressList({
                              city: false,
                              state: false,
                              country: !addressList?.country,
                            });
                          }}
                        >
                          {data}
                        </div>
                      );
                    })}
                </div>
              </div>
            </label>

            {/* state */}
            <label id="state" className="block w-full relative pb-2">
              <h1 className="mb-1">State</h1>
              <div
                onClick={() => {
                  !disableFields?.state &&
                    setAddressList({
                      city: false,
                      country: false,
                      state: !addressList?.state,
                    });
                }}
                className={` ${
                  disableFields?.state
                    ? "bg-opacity-30 cursor-not-allowed"
                    : "bg-opacity-100"
                } w-full p-2 min-h-[40px] bg-white cursor-pointer border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border peer`}
              >
                {" "}
                {subscribeValues?.state?.length > 0 ? (
                  subscribeValues?.state
                ) : (
                  <h1 className="text-gray-500">Select State</h1>
                )}{" "}
              </div>

              <div
                className={` ${
                  addressList?.state ? "block" : "hidden"
                }  absolute top-[100%] left-0 w-full bg-white   `}
              >
                <div className="w-full mb-2 ">
                  <input
                    type="search"
                    name="state"
                    value={stateSearch}
                    onChange={(e) => {
                      setStateSearch(e?.target?.value);
                    }}
                    placeholder=" Search state"
                    className=" w-full p-2 outline-none border-b border-b-gray-300 font-caladea "
                  />
                </div>

                <div className="h-[200px] overflow-y-scroll ">
                  {!stateList?.length > 0 ? (
                    <div className="font-caladea text-base text-center h-full flex justify-center items-center   cursor-pointer text-gray-900 p-2">
                      -NA-
                    </div>
                  ) : (
                    <div>
                      {stateList
                        ?.filter((filtered_data) => {
                          if (stateSearch?.length > 0) {
                            if (
                              filtered_data
                                ?.toLowerCase()
                                ?.includes(stateSearch?.toLowerCase())
                            ) {
                              return filtered_data;
                            }
                          } else {
                            return filtered_data;
                          }
                        })
                        ?.map((data) => {
                          return (
                            <div
                              className={` ${
                                data === selectedStateCode
                                  ? "bg-[#FF9D7D] bg-opacity-40"
                                  : "hover:bg-[#FF9D7D] hover:bg-opacity-20 "
                              }  font-caladea text-base  transition-all cursor-pointer text-gray-900 p-2`}
                              onClick={(e) => {
                                setSelectedSateCode(data);
                                setSubscribeValues({
                                  ...subscribeValues,
                                  state: data,
                                  city: "",
                                });
                                setAddressList({
                                  city: false,
                                  country: false,
                                  state: !addressList?.state,
                                });

                                setCitySearch(e?.target?.value);
                                setSelectedCity("");
                              }}
                            >
                              {data}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            </label>

            {/* city */}
            <label id="city" className="block w-full relative pb-2">
              <h1 className="mb-1">City</h1>
              <div
                onClick={() => {
                  !disableFields?.city &&
                    setAddressList({
                      country: false,
                      state: false,
                      city: !addressList?.city,
                    });
                }}
                className={` ${
                  disableFields?.city
                    ? "bg-opacity-30 cursor-not-allowed"
                    : "bg-opacity-100"
                } w-full p-2 min-h-[40px] bg-white cursor-pointer border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border peer`}
              >
                {" "}
                {subscribeValues?.city?.length > 0 ? (
                  subscribeValues?.city
                ) : (
                  <h1 className="text-gray-500">Select City</h1>
                )}{" "}
              </div>

              <div
                className={` ${
                  addressList?.city ? "block" : "hidden"
                }  absolute top-[100%] left-0 w-full bg-white h-[200px] overflow-y-scroll   `}
              >
                <div className="w-full mb-2 ">
                  <input
                    type="search"
                    name="city"
                    value={citySearch}
                    onChange={(e) => {
                      setCitySearch(e?.target?.value);
                    }}
                    placeholder=" Search city"
                    className=" w-full p-2 outline-none border-b border-b-gray-300 font-caladea "
                  />
                </div>
                <div>
                  {!cityList?.length > 0 ? (
                    <div className="font-caladea text-base text-center h-full flex justify-center items-center   cursor-pointer text-gray-900 p-2">
                      -NA-
                    </div>
                  ) : (
                    <div>
                      {cityList
                        ?.filter((filtered_data) => {
                          if (citySearch?.length > 0) {
                            if (
                              filtered_data
                                ?.toLowerCase()
                                ?.includes(citySearch?.toLowerCase())
                            ) {
                              return filtered_data;
                            }
                          } else {
                            return filtered_data;
                          }
                        })
                        ?.map((data) => {
                          return (
                            <div
                              className={` ${
                                data === selectedCity
                                  ? "bg-[#FF9D7D] bg-opacity-40"
                                  : "hover:bg-[#FF9D7D] hover:bg-opacity-20 "
                              }  font-caladea text-base  transition-all cursor-pointer text-gray-900 p-2`}
                              onClick={() => {
                                setSelectedCity(data);
                                setSubscribeValues({
                                  ...subscribeValues,
                                  city: data,
                                });
                                setAddressList({
                                  country: false,
                                  state: false,
                                  city: !addressList?.city,
                                });
                              }}
                            >
                              {data}
                            </div>
                          );
                        })}
                    </div>
                  )}
                </div>
              </div>
            </label>
          </div>
          <label htmlFor="" className="block w-full">
            <h1 className="mb-1">Email</h1>
            <input
              name="email"
              type="email"
              value={subscribeValues?.email}
              onChange={(e) => {
                setSubscribeValues({
                  ...subscribeValues,
                  email: e?.target?.value,
                });
              }}
              className="w-full p-2 border-[#FF9D7D] outline-[#FF9D7D] rounded-lg border mb-4"
            />
          </label>

          <button className="bg-[#FC8D0B] rounded-lg  p-2 uppercase text-lg w-full text-white active:scale-95 transition-all">
            Submit
          </button>
        </form>
      </div>

      <div
        className={` ${currentPath?.pathname === "/login" ? "hidden" : " "} `}
      >
        {currentPath?.pathname?.includes("/admin") ? (
          <Admin_sidebar />
        ) : (
          <Sidebar />
        )}
      </div>
      <div
        className={` ${
          currentPath?.pathname === "/home" ||
          currentPath?.pathname === "/login"
            ? "pl-[0px]"
            : currentPath?.pathname?.includes("/admin/")
            ? "pl-[300px]"
            : "pl-0 md:pl-[60px]"
        } `}
      >
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<Landing />} />
          <Route
            path="/sub_page/:call_link/:page_id"
            element={<SecondaryLayout_1 />}
          />
          <Route path="/gallery" element={<SecondaryLayout_2 />} />
          <Route path="/gallery/:album" element={<SecondaryLayout_3 />} />
          <Route path="/gallery/:album/:year" element={<SecondaryLayout_4 />} />
          <Route
            path="/album/:album_id/:year_id"
            element={<SecondaryLayout_4 />}
          />
          <Route path="/jeeyars" element={<SecondaryLayout_5 />} />

          <Route element={<ProtectedRoutes />}>
            <Route
              path="/admin"
              element={<Navigate to="/admin/dashboard" replace={true} />}
            />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            {/* <Route path="/admin/home_edit/" element={<AdminHomePageV2 />} /> */}
            <Route path="/admin/home_edit/" element={<AdminHomePage />} />
            <Route
              path="/admin/sub_admin_page/:sub_admin_page_name"
              element={<AdminMainPageLayout1 />}
            />

            <Route
              path="/admin/sub_admin_page/:sub_admin_page_name/:sub_page_id"
              element={<AdminSubPageLayout1 />}
            />

            <Route
              path="/admin/sub_admin_page/jeeyars_edit"
              element={<AdminJeeyaMainPage />}
            />

            <Route
              path="/admin/sub_admin_page/gallery_edit"
              element={<AdminGalleryMainPage />}
            />
            <Route
              path="/admin/sub_admin_page/gallery_edit/:album_id"
              element={<AdminAlbumPage />}
            />
            <Route
              path="/admin/sub_admin_page/gallery_edit/:album_id/:sub_album_id"
              element={<AdminSubAlbumPage />}
            />
          </Route>

          <Route element={<ProtectedFromAdmin />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
