import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import ContactusArea from "./ContactusArea";

const Contactus = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactusArea />

      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default Contactus;
