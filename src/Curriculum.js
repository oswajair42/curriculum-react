import React from "react";
import "./styles.css"; // Importamos los estilos

/**
 * Componente Curriculum
 * Este componente encapsula todo el contenido del currículum en una sola estructura.
 * Se utilizan etiquetas semánticas de HTML dentro de React.
 */
const Curriculum = () => {
  return (
    // Inicio del componente Curriculum
    <div className="curriculum-container">
      {/* ENCABEZADO: Contiene el título del currículum */}
      <header className="curriculum-header">
        <h1>Currículum de Oswaldo Martinez</h1>
      </header>
      
      {/* MENÚ DE NAVEGACIÓN: Permite moverse entre las secciones */}
      <nav className="curriculum-nav">
        <ul>
          <li><a href="#perfil">Perfil</a></li>
          <li><a href="#experiencia">Experiencia</a></li>
          <li><a href="#educacion">Educación</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
      
      {/* CONTENIDO PRINCIPAL */}
      <main className="curriculum-content">
        {/* Sección de Perfil */}
        <section id="perfil">
          <h2>Perfil</h2>
          <p>Soy Oswaldo Martinez, un profesional con experiencia en desarrollo web y diseño multiplataforma.</p>
        </section>
        
        {/* Sección de Experiencia */}
        <section id="experiencia">
          <h2>Experiencia</h2>
          <p>He trabajado en varias empresas de tecnología, desempeñándome como desarrollador web y líder de proyectos. Mis roles incluyeron la gestión de equipos, la planificación y ejecución de proyectos, y el desarrollo de aplicaciones web utilizando tecnologías modernas.</p>
        </section>
        
        {/* Sección de Educación */}
        <section id="educacion">
          <h2>Educación</h2>
          <p>Estudié Ingeniería en Sistemas en la UJAT, donde adquirí conocimientos en programación, bases de datos, y sistemas operativos.</p>
        </section>
        
        {/* Sección de Habilidades */}
        <section id="habilidades">
          <h2>Habilidades</h2>
          <p>Tengo habilidades en HTML, CSS, JavaScript, React, Node.js, y gestión de proyectos. Además, poseo habilidades blandas como liderazgo, trabajo en equipo, y comunicación efectiva.</p>
        </section>
        
        {/* Sección de Contacto */}
        <section id="contacto">
          <h2>Contacto</h2>
          <p>Puedes contactarme en <strong>jairoswaldo16@gmail.com</strong></p>
        </section>
      </main>
      
      {/* PIE DE PÁGINA */}
      <footer className="curriculum-footer">
        <p>&copy; 2025 - Oswaldo Martinez - Todos los derechos reservados</p>
      </footer>
    </div>
    // Fin del componente Curriculum
  );
};

// Exportamos el componente para que pueda ser usado en otros archivos
export default Curriculum;

/**
 * Encapsulación:
 * Este componente encapsula todo el contenido del currículum dentro de un solo archivo.
 * React permite modularizar la UI en componentes reutilizables, lo que facilita su mantenimiento.
 * 
 * Nodos utilizados:
 * - <div className="curriculum-container">: Contenedor principal que engloba todo el contenido del currículum.
 * - <header className="curriculum-header">: Encabezado que contiene el título del currículum.
 * - <nav className="curriculum-nav">: Menú de navegación que permite moverse entre las diferentes secciones del currículum.
 * - <main className="curriculum-content">: Contenido principal del currículum, que incluye varias secciones.
 * - <section id="perfil">: Sección que describe el perfil profesional.
 * - <section id="experiencia">: Sección que detalla la experiencia laboral.
 * - <section id="educacion">: Sección que describe la formación académica.
 * - <section id="habilidades">: Sección que enumera las habilidades técnicas y blandas.
 * - <section id="contacto">: Sección que proporciona información de contacto.
 * - <footer className="curriculum-footer">: Pie de página que incluye información de derechos de autor.
 * 
 * Fin de cada nodo:
 * - <div>: Contiene y organiza todos los elementos del currículum.
 * - <header>: Muestra el título del currículum.
 * - <nav>: Facilita la navegación entre las diferentes secciones del currículum.
 * - <main>: Agrupa el contenido principal del currículum.
 * - <section>: Divide el contenido en secciones temáticas para una mejor organización y legibilidad.
 * - <footer>: Proporciona información adicional, como los derechos de autor.
 * 
 * Cómo encapsula:
 * El componente Curriculum encapsula toda la lógica y la estructura del currículum en un solo archivo. 
 * Esto permite que el componente sea reutilizable y fácil de mantener. Al modularizar la UI en componentes, se facilita la gestión del código y se promueve la reutilización en diferentes partes de la aplicación.
 * Además, el uso de etiquetas semánticas de HTML dentro de React mejora la accesibilidad y la legibilidad del código.
 */
