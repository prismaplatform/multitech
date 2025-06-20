 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';     
import SingleIntegration from '@/components/single-integration';

export const metadata: Metadata = {
  title: "Integration Details - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <SingleIntegration />
    </Wrapper>
  );
};

export default index;