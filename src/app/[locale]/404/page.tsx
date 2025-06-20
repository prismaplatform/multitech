
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import NotFound from '@/components/not-found';

export const metadata: Metadata = {
  title: "Error || 404 - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 

const index = () => {
  return (
    <Wrapper>
      <NotFound />
    </Wrapper>
  );
};

export default index;