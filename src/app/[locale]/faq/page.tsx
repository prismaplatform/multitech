

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper'; 
import Faq from '@/components/faq';

export const metadata: Metadata = {
  title: "Faq - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;