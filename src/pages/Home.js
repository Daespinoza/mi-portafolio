import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Inicio</h1>
      <p>Bienvenido a mi portafolio.</p>
      <Link to="/data">Ir a Datos</Link>
    </div>
  );
}
