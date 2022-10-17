import React from "react";
import Formulario from "./Formulario";

const Titulo = () => {
  return (
    <div>
      <h1 className="text-center my-5" style={{ background: "red" }}>
        Formulario
      </h1>
      <Formulario></Formulario>
    </div>
  );
};

export default Titulo;
