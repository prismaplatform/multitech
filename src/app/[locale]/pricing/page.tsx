
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Pricing from '@/components/pricing';

export const metadata: Metadata = {
  title: "Pricing - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;