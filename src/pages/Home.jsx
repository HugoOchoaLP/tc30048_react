import React from "react";

const Home = () => {
  const productos = [
    { id: 1, nombre: "Arroz", precio: 25 },
    { id: 2, nombre: "Frijoles", precio: 30 },
    { id: 3, nombre: "Aceite", precio: 50 },
    { id: 4, nombre: "Azúcar", precio: 28 },
    { id: 5, nombre: "Sal", precio: 10 },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Página de Inicio</h1>
      <p>Bienvenido a la página de inicio de Abarrotes Ochoa.</p>
      <img
        src="https://almomento.mx/wp-content/uploads/2018/04/abarrotes.jpg"
        alt="Logo de Abarrotes Ochoa"
        style={{ width: "600px", height: "auto" }}
      />
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio} MXN
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
