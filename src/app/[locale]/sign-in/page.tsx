
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Signin from '@/components/sign-in';

export const metadata: Metadata = {
  title: "Sign in - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Signin />
    </Wrapper>
  );
};

export default index;