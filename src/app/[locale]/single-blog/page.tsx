
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import SingleBlog from '@/components/single-blog';

export const metadata: Metadata = {
  title: "Blog Details - Multitech | Efficiency on the Production Line",
  description: "Multitech | Efficiency on the Production Line",
}

 
const index = () => {
  return (
    <Wrapper>
      <SingleBlog />
    </Wrapper>
  );
};

export default index;