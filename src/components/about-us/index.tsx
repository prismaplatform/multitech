
import Breadcrumb from '@/common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import CtaAreaHomeOne from '../homes/home-1/CtaAreaHomeOne';
import FaqAreaHomeOne from '../homes/home-1/FaqAreaHomeOne';
import SpendingSmarterAreaHomeThree from '../homes/home-3/SpendingSmarterAreaHomeThree';
import IntegrationArea from '../integration/IntegrationArea';
import AboutBanner from './AboutBanner';
import AboutEquipment from './AboutEquipment';
import AboutFeatures from './AboutFeatures';
import AboutTeam from './AboutTeam';
import VideoAreaHomeOne from '../homes/home-1/VideoAreaHomeOne';

const AboutUs = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Despre noi" subtitle="Despre noi" />
      <AboutBanner />
      {/* <TestimonialAreaHomeThree style_2={true} /> */}
      <AboutEquipment />
      <IntegrationArea/>  
      <SpendingSmarterAreaHomeThree/>
      <VideoAreaHomeOne/>
      <AboutFeatures />
      <AboutTeam />
      <FaqAreaHomeOne style_2={true} />
      <CtaAreaHomeOne />
      <FooterOne /> 
    </>
  );
};

export default AboutUs;