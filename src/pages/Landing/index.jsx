import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/home" className="study">
              <FontAwesomeIcon icon="book-open" />
              Estudar
            </Link>

            <Link to="/home" className="give-classes">
              <FontAwesomeIcon icon="chalkboard-teacher" />
              Cursos
            </Link>
          </div>
          <span className="total-connections">
            Total de 1000 conexões já realizadas <FontAwesomeIcon icon="heart" />
          </span>
        </div>
      </div>
    </>
  );
}
