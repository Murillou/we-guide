import logoWeGuide from '../assets/we-guide-extenso.png';
import divisor from '../assets/traco.png';
import facebookLogo from '../assets/Facebook.jpg';
import googleLogo from '../assets/Google.jpg';
import './Login.css';
import { useState } from 'react';

export function Login() {
  // Estado feito para armazenar o valor da senha
  const [showPassword, setShowPassword] = useState(false);

  // Função que altera o valor do estado para que possamos mostrar a senha para o usuário
  function togglePasswordVisibility() {
    setShowPassword(prev => !prev);
  }

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
              // Operador ternário para alterar o tipo do input conforme o valor do estado
              type={showPassword ? 'text' : 'password'}
              className="custom-input-forms"
              placeholder="Senha"
            />

            <i
              // Operador ternário para alterar o icone conforme o valor do estado
              className={`fas ${
                showPassword ? 'fa-eye' : 'fa-eye-slash'
              } custom-eye-icon`}
              onClick={togglePasswordVisibility}
            ></i>
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

        <div className="d-flex aligns-items-center justify-content-center mx-auto gap-3">
          <a href="#">
            <img src={googleLogo} alt="" className="custom-social" />
          </a>

          <a href="#">
            <img
              src={facebookLogo}
              alt=""
              className="custom-logo-social-facebook custom-social"
            />
          </a>
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
