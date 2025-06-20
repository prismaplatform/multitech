 import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper'; 
import HomeThree from '@/components/homes/home-3';

export const metadata: Metadata = {
  title: "Home 3 - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default index;