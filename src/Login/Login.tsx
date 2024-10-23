import logoWeGuide from '../assets/we-guide-extenso.png';
import './Login.css';

export function Login() {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 custom-background">
      <img
        src={logoWeGuide}
        alt="Logo We Guide"
        className="custom-margin-bottom-logo"
      />
      <form className="d-flex flex-column bg-white custom-padding-vertical-forms px-3 custom-rounded custom-shadow">
        <h6 className="custom-gray-strong-color text-center">Faça login</h6>
        <p className="custom-gray-neutral-color">
          Vamos embarcar juntos nessa jornada!
        </p>

        <div className="d-flex flex-column gap-3">
          <input
            type="e-mail"
            className="custom-input-forms"
            placeholder="E-mail"
          />

          <div className="position-relative">
            <input
              type="password"
              className="custom-input-forms"
              placeholder="Senha"
            />
            <i className="fas fa-eye-slash custom-eye-icon"></i>
          </div>
        </div>

        <a href="#"> Esqueci minha senha </a>

        <input type="submit" value="Entrar" />
      </form>
    </section>
  );
}
