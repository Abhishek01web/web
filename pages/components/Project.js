import React from 'react';

const Project = () => {

  const Data = [
    {
      img: "./images/pro-one.png",
      imgf: "./images/p-one.png",
      title: "marketing agency",
      discription: "These days are have greate opertunities for marketing agency"
    },
    {
      img: "./images/pro-two.png",
      imgf: "./images/p-two.png",
      title: "Portfolio Websites",
      discription: "If you wanna show your skills then you must have a Portfolio Websites"
    },
    {
      img: "./images/pro-three.png",
      imgf: "./images/p-three.png",
      title: "Mentors Websites",
      discription: "A great mentor alway have know what is best so discribe yourself with a web"
    }
  ]
  return (
    <>
      <div className="Project" id='Project'>
        <div className="heading">
          <h2>Project</h2>
          <p>What i am doing ?</p>
        </div>
        <div className="main">
          {
            Data.map((data) => {
              return (
                <div className="p one">
                  <div className="img">
                    <img src={data.img} alt={data.img} />
                  </div>
                  <div className="pf">
                    <img src={data.imgf} alt={data.imgf} />
                    <div className="cont">
                      <h4>{data.title}</h4>
                      <p>{data.discription}</p>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default Project;