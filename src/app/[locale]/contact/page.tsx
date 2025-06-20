
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper'; 
import Contactus from '@/components/contact-us';

export const metadata: Metadata = {
  title: "Contact us - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Contactus />
    </Wrapper>
  );
};

export default index;