import Swal from "sweetalert2";

const FormContacto = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b641713-ab75-44b9-8183-8c93d444755d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "¡Enviado!",
        text: "El mensaje ha sido enviado exitosamente",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Ha ocurrido un error al intentar enviar el mensaje",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="formulario">
      <div className="tituloFormBox">
        <h3 className="tituloForm">Enviar correo</h3>
        <hr className="separador" />
      </div>
      <div className="inputBox">
        <label>Nombre:</label>
        <input
          title="Nombre"
          name="name"
          type="text"
          className="campo"
          placeholder="Ingrese su nombre"
          required
        />
      </div>
      <div className="inputBox">
        <label>Correo:</label>
        <input
          title="Correo electrónico"
          name="email"
          type="text"
          className="campo"
          placeholder="Ingrese su correo electrónico"
          required
        />
      </div>
      <div className="inputBox">
        <label>Teléfono:</label>
        <input
          title="Teléfono"
          name="phone"
          type="text"
          className="campo"
          placeholder="Ingrese su número de teléfono"
        />
      </div>
      <div className="inputBox">
        <label>Mensaje:</label>
        <textarea
          title="Mensaje"
          name="message"
          className="campo campoMensaje"
          placeholder="Ingrese el mensaje"
        ></textarea>
      </div>
      <button type="submit" className="boton1">
        Enviar
      </button>
    </form>
  );
};

export default FormContacto;
