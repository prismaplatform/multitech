import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Product from "./Product";

export const metadata: Metadata = {
  title: "Sign in - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
};

const index = () => {
  return (
    <Wrapper>
      <Product />
    </Wrapper>
  );
};

export default index;
