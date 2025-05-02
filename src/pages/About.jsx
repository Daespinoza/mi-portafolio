import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre Mí</h1>
      
      {/* Sección de introducción */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">¡Hola! Soy [Tu Nombre]</h2>
        <p className="text-lg mb-4">
          Desarrollador web apasionado por crear experiencias digitales hermosas y funcionales.
          Con más de [X] años de experiencia en desarrollo frontend y backend, disfruto
          convirtiendo ideas complejas en interfaces intuitivas y accesibles.
        </p>
        <p className="text-lg">
          Cuando no estoy codificando, me gusta [tus hobbies/intereses: por ejemplo, "explorar nuevos lugares, leer 
          sobre tecnologías emergentes y tocar la guitarra"].
        </p>
      </div>
      
      {/* Sección de habilidades */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="mr-2" size={24} />
          Mis Habilidades
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Desarrollo Frontend</h3>
            <ul className="space-y-2">
              <li>HTML5, CSS3, JavaScript (ES6+)</li>
              <li>React, Vue.js</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Desarrollo Backend</h3>
            <ul className="space-y-2">
              <li>Node.js, Express</li>
              <li>Python, Django</li>
              <li>APIs RESTful</li>
              <li>SQL y NoSQL databases</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-3">Herramientas</h3>
            <ul className="space-y-2">
              <li>Git, GitHub</li>
              <li>Docker</li>
              <li>Webpack, Vite</li>
              <li>CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Sección de experiencia */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Briefcase className="mr-2" size={24} />
          Experiencia Profesional
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium">Desarrollador Senior en [Empresa]</h3>
            <p className="text-gray-600 mb-2">Enero 2022 - Presente</p>
            <p>
              Responsable del desarrollo frontend de múltiples aplicaciones web utilizando React y Tailwind CSS.
              Colaboración estrecha con el equipo de diseño para implementar interfaces de usuario responsivas y optimizadas.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium">Desarrollador Web en [Empresa]</h3>
            <p className="text-gray-600 mb-2">Marzo 2019 - Diciembre 2021</p>
            <p>
              Desarrollo de aplicaciones web full-stack utilizando Node.js y Vue.js.
              Implementación de API RESTful y optimización de bases de datos para mejorar el rendimiento.
            </p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-xl font-medium">Desarrollador Junior en [Empresa]</h3>
            <p className="text-gray-600 mb-2">Junio 2017 - Febrero 2019</p>
            <p>
              Desarrollo frontend con HTML, CSS y JavaScript.
              Mantenimiento y mejora de sitios web existentes.
            </p>
          </div>
        </div>
      </div>
      
      {/* Sección de educación */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <GraduationCap className="mr-2" size={24} />
          Educación
        </h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium">Ingeniería en Sistemas Computacionales</h3>
            <p className="text-gray-600 mb-2">[Universidad], 2013 - 2017</p>
            <p>
              Especialización en desarrollo de software y sistemas distribuidos.
              Proyecto final: Plataforma de e-learning con tecnologías web modernas.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-medium">Certificaciones</h3>
            <ul className="space-y-2 mt-2">
              <li>AWS Certified Developer - Associate</li>
              <li>MongoDB Certified Developer</li>
              <li>React Certification - Frontend Masters</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;