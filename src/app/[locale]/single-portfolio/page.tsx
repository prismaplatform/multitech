import React from "react";
import type { Metadata } from "next";
import Wrapper from "@/layouts/Wrapper";
import SinglePortfolio from "@/components/single-portfolio";

export const metadata: Metadata = {
	title: "Portfolio Details - Multitech | Efficiency on the Production Line",
	description: "Multitech | Efficiency on the Production Line",
};

const index = () => {
	return (
		<Wrapper>
			<SinglePortfolio />
		</Wrapper>
	);
};

export default index;
