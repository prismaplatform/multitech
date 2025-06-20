
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import Team from '@/components/team';

export const metadata: Metadata = {
  title: "Team - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <Team />
    </Wrapper>
  );
};

export default index;