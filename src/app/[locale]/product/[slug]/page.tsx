import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Product from "./Product";

export const metadata: Metadata = {
  title: "Sign in - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
};

const index = () => {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  );
};

export default index;
