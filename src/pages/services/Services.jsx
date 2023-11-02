import React from "react";
import ServicesOnePage from "../../components/sevicesPages/servicesOnePage/ServicesOnePage";
import ServicesTwoPage from "../../components/sevicesPages/servicesTwoPage/ServicesTwoPage";
import ServicesThreePage from "../../components/sevicesPages/servicesThreePage/ServicesThreePage";
import ServicesFourPage from "../../components/sevicesPages/servicesFourPage/ServicesFourPage";
import ServicesFivePages from "../../components/sevicesPages/servicesFivePages/ServicesFivePages";

function Services() {
  return (
    <div className="container">
      <ServicesOnePage />
      <ServicesTwoPage />
      {/* <ServicesThreePage /> */}
      {/* <ServicesFourPage /> */}
      {/* <ServicesFivePages /> */}
    </div>
  );
}

export default Services;
