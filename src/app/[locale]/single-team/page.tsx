 
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';   
import SingleTeam from '@/components/single-team';

export const metadata: Metadata = {
  title: "Team  Details - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}


const index = () => {
  return (
    <Wrapper>
      <SingleTeam />
    </Wrapper>
  );
};

export default index;