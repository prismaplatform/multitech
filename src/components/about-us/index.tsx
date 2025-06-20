import Breadcrumb from "@/common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeOne from "../homes/home-1/CtaAreaHomeOne";
import FaqAreaHomeOne from "../homes/home-1/FaqAreaHomeOne";
import SpendingSmarterAreaHomeThree from "../homes/home-3/SpendingSmarterAreaHomeThree";
import IntegrationArea from "../integration/IntegrationArea";
import AboutBanner from "./AboutBanner";
import AboutEquipment from "./AboutEquipment";
import AboutFeatures from "./AboutFeatures";
import AboutTeam from "./AboutTeam";
import VideoAreaHomeOne from "../homes/home-1/VideoAreaHomeOne";
import AboutCustom from "./AboutSectionCustom";

const AboutUs = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Despre noi" subtitle="Despre noi" />
      <AboutBanner />
      {/* <TestimonialAreaHomeThree style_2={true} /> */}
      <AboutEquipment />
      <IntegrationArea />
      <SpendingSmarterAreaHomeThree />
      <VideoAreaHomeOne />
      {/* <AboutFeatures /> */}
      <AboutCustom
        title="Consultanță în aplicații"
        image="about_section_applications.jpg"
        desc="Există echipamente specifice pentru industrii sau aplicații specifice. De multe ori, este necesar efectuarea unor teste sau măsurători pentru a determina ce sisteme sunt adecvate. Consultanța individuală și apropierea de clienți sunt prioritățile noastre cele mai importante. Împreună cu dumneavoastră, experții noștri găsesc soluția optimă, care este apoi personalizată pentru aplicația respectivă. În acest scop, avem capacitatea de a efectua teste cu produsele dumneavoastră la sediul nostru din Săcele – Brașov în cel mai scurt timp."
        imageLeft={true}
      />
      <AboutCustom
        title="
Service"
        image="about_section_service.jpg"
        desc="Avem clienți în întreaga țară, iar tehnicienii noștri de service sunt capabili să ajungă rapid la locația dorită, fie că sunt deja pe teren sau sunt stabiliți foarte aproape de clienți. Echipa noastră de service este calificată pentru a efectua reparații rapide și pentru a instala și întreține sistemele într-un mod eficient. Diferitele noastre pachete de întreținere garantează o funcționare fără probleme a echipamentelor dumneavoastră și asigură reducerea timpilor de întrerupere."
        imageLeft={false}
      />
      <AboutCustom
        title="Consumabile și piese de schimb"
        image="about_section_logistics.jpg"
        desc="Produsele din sortimentul vast de consumabile și piese de schimb vă sunt puse la dispoziție rapid, datorită depozitării în cantități optime în depozitul nostru central din Săcele – Brașov. Experții noștri din departamentul de logistică sunt disponibili să vă ajute să determinați care produse vă sunt necesare iar comenzile plasate vor ajunge la destinația dorită într-un timp scurt."
        imageLeft={true}
      />
      <AboutCustom
        title="Asistență clienți"
        image="about_section_support.jpg"
        desc="Linia noastră de asistență este primul loc pentru toate întrebările legate de toată gama de echipamente comercializate și pentru solicitările de service. Angajații noștri sunt în măsură să vă sfătuiască și să vă asiste în orice moment la telefon, prin e-mail sau chat. Chiar de la preluarea cererilor de oferte și până la analiza erorilor sau suportul inițial pentru înlăturarea defecțiunilor tehnice."
        imageLeft={false}
      />

      <AboutTeam />
      <FaqAreaHomeOne style_2={true} />
      <CtaAreaHomeOne />
      <FooterOne />
    </>
  );
};

export default AboutUs;
