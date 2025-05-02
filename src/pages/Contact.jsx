import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Github } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState({ success: false, message: '' });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitResult({
        success: true,
        message: '¡Gracias por tu mensaje! Te responderé a la brevedad.'
      });
      
      // Limpiar formulario después de envío exitoso
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitResult({ success: false, message: '' });
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Contacto</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Información de contacto */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">¡Hablemos!</h2>
          <p className="text-lg mb-8">
            Estoy interesado en oportunidades freelance, especialmente proyectos ambiciosos o grandes.
            Sin embargo, si tienes otra petición o pregunta, no dudes en contactarme.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-gray-600">tucorreo@ejemplo.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Teléfono</h3>
                <p className="text-gray-600">+123 456 7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Ubicación</h3>
                <p className="text-gray-600">Ciudad de México, México</p>
              </div>
            </div>
          </div>
          
          {/* Redes sociales */}
          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Sígueme en</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <Linkedin className="text-gray-700" size={24} />
              </a>
              <a 
                href="https://twitter.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <Twitter className="text-gray-700" size={24} />
              </a>
              <a 
                href="https://github.com/tuusuario" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
              >
                <Github className="text-gray-700" size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Formulario de contacto */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-6">Envíame un mensaje</h2>
          
          {submitResult.success && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6">
              {submitResult.message}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Asunto del mensaje"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={18} className="mr-2" />
                  Enviar Mensaje
                </>
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Mapa (opcional) */}
      <div className="mt-16">
        <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin size={40} className="mx-auto text-gray-500 mb-2" />
            <p className="text-gray-600">Aquí puedes integrar un mapa de Google Maps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;