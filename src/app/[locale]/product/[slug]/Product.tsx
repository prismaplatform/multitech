import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import CtaAreaHomeOne from "@/components/homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ProductPage from "./ProductPage";

const Product = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Hidraulikus Kotrógép" subtitle="Product" />
      <ProductPage />
      {/* <CtaAreaHomeOne style_2={true} /> */}
      <FooterOne />
    </>
  );
};

export default Product;
