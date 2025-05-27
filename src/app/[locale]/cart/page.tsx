import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import Cart from "./Cart";

export const metadata: Metadata = {
  title: "Sign in - Lonyo - IT Solution & Technology Temaptle",
  description: "Lonyo - IT Solution & Technology Temaptle",
};

const index = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
};

export default index;
