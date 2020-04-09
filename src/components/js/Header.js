import React from 'react';
import logo from '../images/logo.svg';


import '../sass/_header.scss';

function Header() {
  function toggleMenu() {
    let menuBtn = document.querySelector('.fn_menutrigger');
    let menu = document.querySelector('.fn_menu')
    menu.classList.toggle('is-open')
    menuBtn.classList.toggle('is-active')
  }
  function closeMenu() {
    let menuBtn = document.querySelector('.fn_menutrigger');
    let menu = document.querySelector('.fn_menu')
    menu.classList.remove('is-open')
    menuBtn.classList.remove('is-active')
  }
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <div className="header__logo" href="">
            <img src={logo} className="header__logo-img" alt="logo" />
            <span className="header__logo-name">SOCIAL</span>
          </div>
          <nav className="menu fn_menu">
            <a className="menu__close fn_menu_close" onClick={closeMenu}>
              <span>Close</span>
              <i className="fa fa-times"></i>
            </a>
            <div className="menu__list">
              <a className="menu__list-item active" href="#"> Home</a>
              <a className="menu__list-item" href="#">Contact</a>
              <a className="menu__list-item" href="#">About</a>
              <a className="menu__list-item" href="#">News</a>
            </div>
          </nav>
          <div className="header__search">
            <div className="header__search-trigger">
              <i className="fa fa-fw fa-search"></i>
            </div>
            <form action="#" className="search">
              <input className="search__input" type="text" placeholder="Search.."/>
              <i className="fa fa-fw fa-search"></i>
            </form>
          </div>
          <a className="header__login" href="" alt="LogIn">
            <i className="fa fa-user"></i>
            <span>Login|Register</span>
          </a>
          <button className="header__menu fn_menutrigger" type="button" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
     
      </div>
     
    </header>
  );
}

export default Header;