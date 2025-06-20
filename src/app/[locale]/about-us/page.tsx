
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import AboutUs from '@/components/about-us';

export const metadata: Metadata = {
  title: "About Us - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <AboutUs />
    </Wrapper>
  );
};

export default index;