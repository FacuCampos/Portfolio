import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const FormContacto = () => {
  const { t, i18n } = useTranslation("global");

  const MySwal = withReactContent(Swal);

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
      MySwal.fire({
        title: <h2>{i18n.language === "en" ? "Sent!" : "¡Enviado!"}</h2>,
        html: (
          <p>
            {i18n.language === "en"
              ? "The message has been sent successfully"
              : "El mensaje ha sido enviado exitosamente"}
          </p>
        ),
        buttonsStyling: false,
        allowOutsideClick: false,
        allowEnterKey: false,
        allowEscapeKey: false,
        stopKeydownPropagation: false,
        showCloseButton: true,
        showClass: {
          popup: `
            animate__animated
            animate__zoomIn
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__zoomOut
            animate__faster
          `,
        },
        customClass: {
          popup: "emailSendToast",
        },
      }).then(event.target.reset());
    } else {
      MySwal.fire({
        title: "Error!",
        text: "Ha ocurrido un error al intentar enviar el mensaje",
        icon: "error",
        customClass: {
          popup: "emailSendToast",
        },
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="formulario">
      <div className="tituloFormBox">
        <h3 className="tituloForm">{t("contact.form.title")}</h3>
        <hr className="separador" />
      </div>
      <div className="inputBox">
        <label>{t("contact.form.name.label")}:</label>
        <input
          title="Nombre"
          name="name"
          type="text"
          className="campo"
          placeholder={t("contact.form.name.placeholder")}
          required
        />
      </div>
      <div className="inputBox">
        <label>{t("contact.form.email.label")}:</label>
        <input
          title="Correo electrónico"
          name="email"
          type="text"
          className="campo"
          placeholder={t("contact.form.email.placeholder")}
          required
        />
      </div>
      <div className="inputBox">
        <label>{t("contact.form.phone.label")}:</label>
        <input
          title="Teléfono"
          name="phone"
          type="text"
          className="campo"
          placeholder={t("contact.form.phone.placeholder")}
        />
      </div>
      <div className="inputBox">
        <label>{t("contact.form.message.label")}:</label>
        <textarea
          title="Mensaje"
          name="message"
          className="campo campoMensaje"
          placeholder={t("contact.form.message.placeholder")}
        ></textarea>
      </div>
      <button type="submit" className="boton1">
        {t("contact.form.button")}
      </button>
    </form>
  );
};

export default FormContacto;
