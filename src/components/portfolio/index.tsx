import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "@/common/Breadcrumb";
import PortfolioArea from "./PortfolioArea";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Industrii" subtitle="Industrii" />
      <PortfolioArea />
      <CtaAreaHomeOne/>
      <FooterOne />
    </>
  );
};

export default Portfolio;
