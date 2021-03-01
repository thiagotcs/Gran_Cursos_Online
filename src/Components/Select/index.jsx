import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import homeImg from '../../assets/icons/home.svg';
import { Container } from './styles';

export default function Select() {
  return (
    <>
      <Container>
        <div>
          <FontAwesomeIcon icon="home" />
          <select defaultValue="">
            <option value="home">
              {/* <img src={homeImg} alt="home" /> */}
              Dashboard
            </option>
          </select>
        </div>
      </Container>
    </>
  );
}
