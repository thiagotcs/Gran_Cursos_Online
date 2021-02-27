import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/images/LogoGranCursos.svg';
import landingImg from '../../assets/images/landing.svg';

import './styles.css';

export default function Landing() {
  return (
    <>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="Logo Gran Cursos Online" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

          <div className="buttons-container">
            <a href="/" className="study">
              <FontAwesomeIcon icon="book-open" />
              Estudar
            </a>

            <a href="/" className="give-classes">
              <FontAwesomeIcon icon="chalkboard-teacher" />
              Cursos
            </a>
          </div>
          <span className="total-connections">
            Total de 1000 conexões já realizadas <FontAwesomeIcon icon="heart" />
          </span>
        </div>
      </div>
    </>
  );
}
