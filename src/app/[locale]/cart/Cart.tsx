import Breadcrumb from "@/common/Breadcrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import CtaAreaHomeOne from "@/components/homes/home-1/CtaAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import CartPage from "./CartPage";

const Cart = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Cart" subtitle="Cart" />
      <CartPage />
      {/* <CtaAreaHomeOne style_2={true} /> */}
      <FooterOne />
    </>
  );
};

export default Cart;
