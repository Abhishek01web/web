import React from 'react';

const Nav = () => {

  const menu = () => {
    let iconf = document.querySelector('.one');
    let icons = document.querySelector('.two');
    let ul = document.querySelector('ul');
    iconf.classList.toggle('f');
    icons.classList.toggle('s');
    ul.classList.toggle('active');
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img src="./images/s.logo.png" alt="s.logo.png" />
        </div>
        <div className="menu" onClick={menu}>
          <div className="m one"></div>
          <div className="m two"></div>
        </div>
        <ul className='active'>
          <li><a href="#Home">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Blog">Blog</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav;