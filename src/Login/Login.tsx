import logoWeGuide from '../assets/we-guide-extenso.png';

export function Login() {
  return (
    <section className="d-flex flex-column align-items-center justify-items-center min-vh-100">
      <img src={logoWeGuide} alt="" />
      <form className="d-flex flex-column  ">
        <p>Faça login</p>
        <p>Vamos embarcar juntos nessa jornada!</p>
        <label></label>
        <input type="e-mail" />
        <label></label>
        <input type="password" />
        <a> Esqueci minha senha </a>
        <input type="submit" />
      </form>
    </section>
  );
}
