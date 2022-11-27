import React from 'react';

const Home = () => {
  return (
    <>
      <div className='Home' id="Home">
        <div className="content">
          <h1>Designer & Developer</h1>
          <p><span>Hy !</span> I'm Abhishek chauhan . A creative developer and designer. I like to create unique and more creative website and graphics that live on internet.
            <br /><span>"Let's Make"</span></p>
          <a href="tel:6378933312">Call</a>
        </div>
        <div className="img">
          <img src="./images/home.png" alt="home-img-transformed.png" />
        </div>
      </div>
    </>
  )
}

export default Home;

// npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome