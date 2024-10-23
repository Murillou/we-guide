import logoWeGuide from '../assets/we-guide-extenso.png';
import divisor from '../assets/traco.png';
import facebookLogo from '../assets/Facebook.png';
import googleLogo from '../assets/Google.png';
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

        <a href="#" className="custom-links-text my-3">
          Esqueci minha senha
        </a>

        <input
          type="submit"
          value="Entrar"
          className="custom-input-forms custom-submit-input"
        />

        <div className="d-flex align-items-center my-3">
          <img src={divisor} alt="traço" />
          <span className="mx-2">ou</span>
          <img src={divisor} alt="traço" />
        </div>

        <div className="d-flex mx-auto gap-3">
          <img src={googleLogo} alt="Logo da Google" />
          <img src={facebookLogo} alt="Logo do Facebook" />
        </div>

        <div className="mx-auto my-2 ">
          <span className="custom-pattern-text">Ainda não tem uma conta?</span>{' '}
          {''}
          <a href="#" className="custom-links-text">
            Cadastre-se
          </a>
        </div>
      </form>
    </section>
  );
}
