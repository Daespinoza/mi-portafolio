import React, { useState } from 'react';
import { Github, ExternalLink, Code, Search } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('todos');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsivo',
      description: 'Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración.',
      image: '/api/placeholder/600/400',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      github: 'https://github.com/tusitio/ecommerce',
      demo: 'https://ecommerce-demo.ejemplo.com',
    },
    {
      id: 2,
      title: 'App de Seguimiento Fitness',
      description: 'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.',
      image: '/api/placeholder/600/400',
      tech: ['React Native', 'Firebase', 'Redux'],
      category: 'móvil',
      github: 'https://github.com/tusitio/fitness-app',
      demo: 'https://fitness-app.ejemplo.com',
    },
    {
      id: 3,
      title: 'Dashboard Analítico',
      description: 'Panel de control interactivo con visualizaciones de datos complejos y filtros personalizables.',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
      category: 'web',
      github: 'https://github.com/tusitio/dashboard',
      demo: 'https://dashboard.ejemplo.com',
    },
    {
      id: 4,
      title: 'Chatbot Inteligente',
      description: 'Asistente virtual basado en IA para resolver consultas de clientes y proporcionar recomendaciones.',
      image: '/api/placeholder/600/400',
      tech: ['Python', 'TensorFlow', 'Flask', 'WebSockets'],
      category: 'ia',
      github: 'https://github.com/tusitio/chatbot',
      demo: 'https://chatbot.ejemplo.com',
    },
    {
      id: 5,
      title: 'Aplicación de Gestión de Tareas',
      description: 'Sistema de organización de tareas con recordatorios, etiquetas y colaboración en equipo.',
      image: '/api/placeholder/600/400',
      tech: ['Angular', 'NestJS', 'MySQL', 'Socket.io'],
      category: 'web',
      github: 'https://github.com/tusitio/task-manager',
      demo: 'https://tasks.ejemplo.com',
    },
    {
      id: 6,
      title: 'Juego Móvil Educativo',
      description: 'Juego interactivo para dispositivos móviles que enseña conceptos de programación a niños.',
      image: '/api/placeholder/600/400',
      tech: ['Unity', 'C#', 'Firebase'],
      category: 'juego',
      github: 'https://github.com/tusitio/educational-game',
      demo: 'https://play.google.com/store/apps/details?id=com.ejemplo',
    }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Mis Proyectos</h1>
      
      {/* Filtros */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm bg-white">
          <button
            onClick={() => setFilter('todos')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              filter === 'todos' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'web' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('móvil')}
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'móvil' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Móvil
          </button>
          <button
            onClick={() => setFilter('ia')}
            className={`px-4 py-2 text-sm font-medium ${
              filter === 'ia' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            IA
          </button>
          <button
            onClick={() => setFilter('juego')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              filter === 'juego' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Juegos
          </button>
        </div>
      </div>
      
      {/* Buscador */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            placeholder="Buscar proyectos..."
            className="w-full p-3 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 text-gray-400" size={18} />
        </div>
      </div>
      
      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md flex items-center"
                  >
                    <Code size={12} className="mr-1" />
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-black transition-colors"
                >
                  <Github size={18} className="mr-1" />
                  <span>Código</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Demo</span>
                  <ExternalLink size={18} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Mensaje si no hay proyectos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl text-gray-600">No se encontraron proyectos en esta categoría</h3>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;