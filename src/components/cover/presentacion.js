import React from "react";
import "./presentacion.css";

function Presentacion() {
  const noticias=[
    {
      title:"titulosdad",
      info:"informacion",
    },
    {
      title:"titulo",
      info:"informacion",
    }
  ]
  
  return (
    <div className="presentacion-container">

      <div className="cover-container text-center d-flex flex-column justify-content-center align-items-center">
        <header className="mb-5">
          <h1 className="cover-heading">Welcome to Bug Solutions</h1>
          <p className="lead">We solve your bugs, so you don't have to.</p>
        </header>

        <div className="info-card">
        {noticias.map((noticias,i)=>(
          <div key={i} className="col-md-2 mb-2">
            <div className="card-body">
              <p className="card-title">{noticias.title}</p>
              <p className="card-text">{noticias.info}</p>
            </div>
          </div>
        )
        )}
      </div>
      </div>

      
    </div>
  );
}

export default Presentacion;
// const services = [
//   {
//     title: "Desarrollo Web",
//     description: "Creamos sitios web personalizados, modernos y optimizados para cualquier dispositivo.",
//     image: robotImage,
//   },
//   {
//     title: "Consultoría Tecnológica",
//     description: "Te ayudamos a tomar las mejores decisiones tecnológicas para tu negocio.",
//     image: robotImage,
//   },
//   {
//     title: "Soporte Técnico",
//     description: "Ofrecemos soporte técnico especializado para garantizar el funcionamiento de tus sistemas.",
//     image: robotImage,
//   },
// ];

// return (
//   <section id="services" className="py-5 bg-light">
//     <div className="container">
//       <h2 className="text-center mb-4">Nuestros Servicios</h2>
//       <p className="text-center text-muted mb-5">
//         Ofrecemos soluciones tecnológicas personalizadas para que tu negocio alcance su máximo potencial.
//       </p>
//       <div className="row">
//         {services.map((service, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card h-100 shadow-sm text-center">
//               <div className="card-body">
//                 {service.image ? (
//                   <img src={service.image} alt={service.title}
//                     className="img-fluid mb-4"
//                     style={{ maxHeight: "150px", objectFit: "contain" }}
//                   />
//                 ) : (
//                   <i className={`bi ${service.icon} display-4 text-primary mb-4`}></i>
//                 )}
//                 <h5 className="card-title">{service.title}</h5>
//                 <p className="card-text">{service.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>)
