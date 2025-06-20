import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import Career from '@/components/career';

export const metadata: Metadata = {
  title: "Career - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <Career />
    </Wrapper>
  );
};

export default index;