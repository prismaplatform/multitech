

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import ResetPassword from '@/components/reset-password';

export const metadata: Metadata = {
  title: "Reset Password - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <ResetPassword />
    </Wrapper>
  );
};

export default index;