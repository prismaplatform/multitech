
import React from 'react';
import HomeOne from '@/components/homes/home-1';

import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';
export const metadata: Metadata = {
  title: "Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default index;