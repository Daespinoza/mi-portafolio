import React from 'react';
import { Link } from 'react-router-dom';

export default function Data() {
  return (
    <div>
      <h1>Datos</h1>
      <p>Esta es la página de datos.</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
}
