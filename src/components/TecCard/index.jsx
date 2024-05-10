const TecCard = ({info}) => {

  return (
    <div className="tec-card">
      <div>
        <img src={`/img/tecnologias/${info.img}`} alt={info.alt} />
        <p>{info.nombre}</p>
      </div>
    </div>
  );
};

export default TecCard;
