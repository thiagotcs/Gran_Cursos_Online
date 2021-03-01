/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoImg from '../../assets/images/LogoGranCursos.svg';
import './styles.css';
import cursoImg from '../../assets/images/cursoImg.svg';
import addToCartImg from '../../assets/icons/shopping-bag.svg';
import shoppingCart from '../../assets/icons/shopping-cart.svg';
import Sidebar from '../../Components/Sidebar';
import Navbar from '../../Components/Navbar';
import Filters from '../../Components/Filters';
// import Search from '../../Components/Search';

export default function Home() {
  return (
    <>
      <div id="page-teacher-list" className="container">
        <div id="containerSideBar">
          <Sidebar />
          <div>
            <Navbar />
            <Filters />
            {/* <Search /> */}
          </div>
        </div>

        <header className="page-header">
          <div className="top-bar-container">
            <div>
              <img src={logoImg} alt="Logo Gran Cursos Online" />
              <Link to="/">
                <FontAwesomeIcon icon="cart-plus" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <FontAwesomeIcon icon="star" />
              </Link>
              <Link to="/">
                <FontAwesomeIcon icon="user-circle" />
              </Link>
            </div>
          </div>
          <div className="header-content">
            <strong>Esstes são os cursos disponíveis.</strong>
            <form id="search-teachers">
              <div className="input-block">
                <input type="text" placeholder="Qual curso você está procurando" />
                <FontAwesomeIcon icon="search" />
              </div>
            </form>
          </div>
          <div className="filter-container">
            <Link to="/">
              <FontAwesomeIcon icon="list-ul" />
              Categoria
            </Link>
            <Link to="/">
              <FontAwesomeIcon icon="filter" />
              Filtros
            </Link>
          </div>
        </header>

        <main>
          <article className="teacher-item">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <strong>Apple Watch Series 4 GPS</strong>
                <span>By Apple</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <footer>
              <article>
                <span className="star">
                  3.4
                  <Link to="/">
                    <FontAwesomeIcon icon="star" />
                  </Link>
                </span>
                <p>
                  <strong>$399</strong>
                  <img src={shoppingCart} alt="shopping Cart" />
                  Free Shipping
                </p>
              </article>
              <div className="buttonContainer">
                <button type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
          <article className="teacher-item">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <strong>Apple Watch Series 4 GPS</strong>
                <span>By Apple</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <footer>
              <article>
                <span className="star">
                  3.4
                  <Link to="/">
                    <FontAwesomeIcon icon="star" />
                  </Link>
                </span>
                <p>
                  <strong>$399</strong>
                  <img src={shoppingCart} alt="shopping Cart" />
                  Free Shipping
                </p>
              </article>
              <div className="buttonContainer">
                <button type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
          <article className="teacher-item">
            <header>
              <img src={cursoImg} alt="curso" />
              <div>
                <strong>Apple Watch Series 4 GPS</strong>
                <span>By Apple</span>
              </div>
            </header>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industrys standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <footer>
              <article>
                <span className="star">
                  3.4
                  <Link to="/">
                    <FontAwesomeIcon icon="star" />
                  </Link>
                </span>
                <p>
                  <strong>$399</strong>
                  <img src={shoppingCart} alt="shopping Cart" />
                  Free Shipping
                </p>
              </article>
              <div className="buttonContainer">
                <button type="button">
                  <FontAwesomeIcon icon="heart" />
                  WISHLIST
                </button>
                <button type="button">
                  <img src={addToCartImg} alt="add to cart" />
                  ADD TO CART
                </button>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  );
}
