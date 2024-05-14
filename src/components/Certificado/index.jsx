const Certificado = ({data}) => {
  return (
    <div className="certificado">
      <div className="certificado-contenido">
        <div className="cert-nombre">
          <p>{data.nombre}</p>
          <hr className="separador2" />
        </div>
        <a href={`/img/certificaciones/${data.img}`} target="_blank">
          <img src={`/img/certificaciones/${data.img}`} alt={data.alt} />
        </a>
      </div>
    </div>
  );
};

export default Certificado;
