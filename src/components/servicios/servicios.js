import React from "react";
import "./servicios.css";
import robotImage from "../../img/robot.jpg";

function Servicios() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web personalizados, modernos y optimizados para cualquier dispositivo.",
      image: robotImage, 
    },
    {
      title: "Consultoría Tecnológica",
      description: "Te ayudamos a tomar las mejores decisiones tecnológicas para tu negocio.",
      image: robotImage, 
    },
    {
      title: "Soporte Técnico",
      description: "Ofrecemos soporte técnico especializado para garantizar el funcionamiento de tus sistemas.",
      image: robotImage, 
    },
  ];

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nuestros Servicios</h2>
        <p className="text-center text-muted mb-5">
          Ofrecemos soluciones tecnológicas personalizadas para que tu negocio alcance su máximo potencial.
        </p>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  {service.image ? (
                    <img src={service.image} alt={service.title}
                      className="img-fluid mb-4"
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                  ) : (
                    <i className={`bi ${service.icon} display-4 text-primary mb-4`}></i>
                  )}
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
