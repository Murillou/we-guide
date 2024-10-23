import logoWeGuide from '../assets/we-guide-extenso.png';
import './Login.css';

export function Login() {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 custom-background">
      <img src={logoWeGuide} alt="" />
      <form className="d-flex flex-column bg-white py-5 px-3 custom-rounded custom-shadow">
        <p className="custom-gray-strong-color">Faça login</p>
        <p className="custom-gray-neutral-color">
          Vamos embarcar juntos nessa jornada!
        </p>
        <label></label>
        <input type="e-mail" className="form-control" />
        <label></label>
        <input type="password" className="form-control" />
        <a href="#"> Esqueci minha senha </a>
        <input type="submit" value="Entrar" />
      </form>
    </section>
  );
}
