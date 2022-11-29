import React from 'react';

const About = () => {

  const Data = [
    {
      title: "Developer",
      discription: "As a Developer i'm just think “First solve the problem. Then, write the code.”"
    },
    {
      title: "Designer",
      discription: 'As a Designer i am just think "Everything is designed. Few things are designed well.”'
    }
  ]

  return (
    <>
      <div className="About" id='About'>
        <div className="heading">
          <h2>About</h2>
          <p>Who i am ?</p>
        </div>
        <div className="main">
          <div className="img">
            <img src="./images/about-main-0-removebg-preview.png" alt="./images/about-main-0-removebg-preview.png" />
          </div>

          {
            Data.map((data) => {
              return (
                <>
                  <div className="dev">
                    <h3>{data.title}</h3>
                    <p>{data.discription}</p>
                    <a href="#Contact">Hire</a>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default About;