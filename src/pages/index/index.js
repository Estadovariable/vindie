import './index.css';
import fullpage from 'fullpage.js';
import $ from 'jquery';
import 'fullpage.js/dist/fullpage.min.css';
import { useRef, useEffect } from 'react';
import 'fullpage.js/dist/fullpage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRightToBracket, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { db, auth } from '../../server/firebaseConfig.js';

library.add(faRightToBracket, faChevronDown);

function Index() {
  const handleClick = () => {
    window.location.href = 'https://ejemplo.com';
  };
  
  const fullpageRef = useRef(null);
  
  useEffect(() => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      fitToSection: false,
      fitToSectionDelay: 300,
      easing: 'easeInOutCubic',
      scrollingSpeed: 700,
      css3: true,
      easingcss3: 'ease-out',
      loopBottom: false,
      navigation: true,
      menu: '#menu',
      anchors: ['index', 'footer', 'login', 'register'],
      navigationTooltips: ['Inicio', 'Contacto', 'Ingresar', 'Registrar'],
      showActiveTooltip: false,
    });
  }, []);
  
  return (
    <div className="App">
      <nav className='nav'>
        <a href='#index' className='marca'>Vindie</a>
        <ul id='menu' className='menu'>
          <li data-menuanchor="index">
            <a href='#index'>Inicio</a>
          </li>
          <li data-menuanchor="footer">
            <a href='#footer'>Contacto</a>
          </li>
          <li data-menuanchor="login">
            <a href='#login'>Ingresar</a>
          </li>
          <li data-menuanchor="register">
            <a href='#register'>Registrar</a>
          </li>
        </ul>
      </nav>
      <main className='main' id='fullpage' ref={fullpageRef}>
        <header className='section active header'>
          <div className='container-title'>
            <h1 className='title'>
              <span className='text-orange'>VIN</span>
              <span className='text-white'>DIE</span>
            </h1>
            <p className='text-white'></p>
          </div>
          <div className='container-icon'>
            <p><a href='#footer' className='text-white' onClick={handleClick}><FontAwesomeIcon icon="chevron-down" className='text-orange'/></a></p>
            <p className='text-white ingresar' >INGRESAR/REGISTRAR</p>
          </div>
        </header>
        <footer className='section'>
          <h1>Footer</h1>
        </footer>
        <div className='section login'>
          <h1>Login</h1>
        </div>
        <div className='section register'>
          <h1>Register</h1>
        </div>
      </main>
    </div>
  );
}

export default Index;
