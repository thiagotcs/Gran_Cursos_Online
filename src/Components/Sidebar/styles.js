import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  left: 0;
  top: 0;
`;

export const Container = styled.aside`
  width: 280px;
  min-height: 100vh;
  background: #fff;
  padding: 2rem;

  p {
    font: 400 1.6rem 'Montserrat', sans-serif;

    img {
      width: 0.8rem;
      margin: 0 1rem;
    }
  }

  ul {
    list-style: none;
    flex-flow: column nowrap;
    transition: transform 0.3s ease-in-out;

    span {
      margin: 0.1rem;
      display: block;
      padding: 4.8rem 0 1.2rem;
      color: var(--color-dark600);
    }

    li {
      width: 100%;
      height: 3.8rem;
      list-style-type: none;
      position: relative;
      transition: 0.2s;

      /* margin: 0%; */

      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      /* transition: background-color 0.2s; */

      &:hover {
        cursor: pointer;
        opacity: 0.6;
        background: var(--color-mid500);
        color: var(--color-light100);
      }

      img {
        margin: 1rem;

        &:nth-child(2) {
          right: 0;
          position: absolute;
        }
      }
    }
  }
`;

export const Logo = styled.img`
  margin: 15px;
  width: 80%;
`;
