

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import SingleService from '@/components/single-service';

export const metadata: Metadata = {
  title: "Service Details - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

const index = () => {
  return (
    <Wrapper>
      <SingleService />
    </Wrapper>
  );
};

export default index;