

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Integration from '@/components/integration';

export const metadata: Metadata = {
  title: "Integration - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <Integration />
    </Wrapper>
  );
};

export default index;