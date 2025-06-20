

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Service from '@/components/service';

export const metadata: Metadata = {
  title: "Service - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <Service />
    </Wrapper>
  );
};

export default index;