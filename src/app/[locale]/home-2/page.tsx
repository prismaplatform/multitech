
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';
import HomeTwo from '@/components/homes/home-2';

export const metadata: Metadata = {
  title: "Home 2 - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;