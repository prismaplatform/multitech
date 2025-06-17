import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import FeaturesAreaHomeOne from "./FeaturesAreaHomeOne";
import FinancialDecisionsAreaHomeOne from "./FinancialDecisionsAreaHomeOne";
import FinancialUpdateHomeOne from "./FinancialUpdateHomeOne";
import VideoAreaHomeOne from "./VideoAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import FaqAreaHomeOne from "./FaqAreaHomeOne";
import CtaAreaHomeOne from "./CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import BrandAreaHomeTwo from "../home-2/BrandAreaHomeTwo";
import AboutMission from "@/components/about-us/AboutMission";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroAreaHomeOne />
      <FeaturesAreaHomeOne />
      <BrandAreaHomeTwo />
      <AboutMission />
      <FinancialDecisionsAreaHomeOne />
      <FinancialUpdateHomeOne />
      <VideoAreaHomeOne />
      <TestimonialAreaHomeOne />
      <FaqAreaHomeOne />
      {/* <CtaAreaHomeOne /> */}
      <FooterOne />
    </>
  );
};

export default HomeOne;
