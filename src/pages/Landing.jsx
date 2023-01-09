// react
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// api calls
import axios from "axios";

//  state manegaement (recoil js)
import { useRecoilState } from "recoil";
import LandingPageDataAtom from "../recoil/pages/landingPage/LandingPageDataAtom";

// components

import Footer from "../components/globalComponents/Footer";
import EventSection from "../components/landingPage/EventSection";
import Section from "../components/landingPage/Section";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const Landing = () => {
  // Global variables
  const [landingPageData, setLandingPageData] =
    useRecoilState(LandingPageDataAtom);

  useEffect(() => {
    axios
      .get(VITE_BASE_LINK + "landingPage")
      .then(function (response) {
        setLandingPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      {landingPageData?.data?.map((sectionData, sectionIndex) => {
        return (
          <div key={sectionIndex} className="">
            <Section apiData={sectionData} />
          </div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Landing;
