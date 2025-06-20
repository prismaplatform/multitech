 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';      
import SingleCareer from '@/components/single-career';

export const metadata: Metadata = {
  title: "Career Details - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <SingleCareer />
    </Wrapper>
  );
};

export default index;