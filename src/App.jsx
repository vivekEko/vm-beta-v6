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

function App() {
  const [currentPath, setCurrentPath] = useRecoilState(currentPathAtom);
  const [sidebarStatus, setSidebarStatus] = useRecoilState(sidebarStatusAtom);
  const location = useLocation();

  useEffect(() => {
    // console.log("pathname:");
    // console.log(location?.pathname);
    setCurrentPath(location);
  }, [location]);

  return (
    <div className="font-oswald cursor-default">
      <div
        className={` ${
          sidebarStatus ? "block" : "hidden"
        } z-[9000] bg-black bg-opacity-40 fixed inset-0`}
        onClick={() => setSidebarStatus(false)}
      ></div>

      <button
        className={`  ${
          currentPath?.pathname?.includes("/home")
            ? "fixed z-[10000] top-9 left-2 md:left-5 lg:left-8 xl:left-10 text-xl  font-bold cursor-pointer"
            : "hidden"
        } 
          
          ${sidebarStatus ? "text-[#630000]" : "text-[#630000]"}

         

          `}
        onClick={() => setSidebarStatus(!sidebarStatus)}
      >
        MENU
      </button>
      {/* <marquee
        width="100%"
        direction="right"
        className="font-caladea  text-[#fb7e4a] text-lg font-semibold bg-yellow-200 mb-[-5px] sticky top-0 left-0 right-0  "
      >
        <div className="flex justify-between items-center gap-32">
          <p>This website is under construction.</p>
          <p>This website is under construction.</p>
          <p>This website is under construction.</p>
          <p>This website is under construction.</p>
          <p>This website is under construction.</p>
          <p>This website is under construction.</p>
        </div>
      </marquee> */}
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
