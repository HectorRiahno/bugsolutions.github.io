import React from "react";
import "./footer.css"; 

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          {/* Columna de navegación */}
          <div className="col-md-4 mb-3">
            <h5>Navegación</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p>
              <i className="bi bi-geo-alt-fill me-2"></i> Calle Falsa 123, Ciudad, País
            </p>
            <p>
              <i className="bi bi-envelope-fill me-2"></i> contacto@ejemplo.com
            </p>
            <p>
              <i className="bi bi-telephone-fill me-2"></i> +57 123 456 789
            </p>
          </div>

          {/* Columna de redes sociales */}
          <div className="col-md-4 mb-3">
            <h5>Síguenos</h5>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white me-3"
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
        {/* Línea divisoria */}
        <hr className="bg-white" />
        {/* Créditos */}
        <div className="text-center">
          <p className="mb-0">© 2024 Bug Solutions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
