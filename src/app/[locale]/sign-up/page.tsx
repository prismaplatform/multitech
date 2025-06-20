
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Signup from '@/components/sign-up';

export const metadata: Metadata = {
  title: "Sign up - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Signup />
    </Wrapper>
  );
};

export default index;