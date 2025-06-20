

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import CoomingSoon from '@/components/cooming-soon';

export const metadata: Metadata = {
  title: "Cooming Soon - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <CoomingSoon />
    </Wrapper>
  );
};

export default index;