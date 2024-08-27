import React from "react";

const Titulo = ({titulo}) => {
  return (
    <div className="titulo">
      <h2>{titulo}</h2>
      <hr className="separadorTitulo" />
    </div>
  );
};

export default Titulo;
