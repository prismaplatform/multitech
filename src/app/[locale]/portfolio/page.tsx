
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import Portfolio from '@/components/portfolio';

export const metadata: Metadata = {
  title: "Portfolio - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Portfolio />
    </Wrapper>
  );
};

export default index;