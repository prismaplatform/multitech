import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import Breadcrumb from "@/common/Breadcrumb";
import MultitechEventsTable from "@/components/table/EventTable";
import EventsTable from "@/components/table/EventTable";

const Event = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Evenimente" subtitle="Evenimente" />
      <MultitechEventsTable />
      {/* <CtaAreaHomeOne style_2={true} /> */}
      <FooterOne />
    </>
  );
};

export default Event;
