import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: "/images/icon-it.svg",
    title: "IT & SOFTWARE",
    description: "Custom development and digital solutions",
  },
  {
    icon: "/images/icon-bpo.svg",
    title: "BPO & SUPPORT",
    description: "Scalable customer and back-office support",
  },
  {
    icon: "/images/icon-finance.svg",
    title: "FINANCE & CONSULTING",
    description: "Strategic advisory and financial expertise",
  },
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <h3>OUR CORE SERVICES</h3>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <img src={service.icon} alt={service.title} />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
