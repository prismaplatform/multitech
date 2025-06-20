import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Cart from "./Cart";

export const metadata: Metadata = {
  title: "Sign in - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
};

const index = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
};

export default index;
