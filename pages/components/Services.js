import React from 'react';

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev', 'HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const SER = ['design', 'development', 'seo', 'graphics', 'editing'];

const Data = [
    {
        "id": 1,
        "title": "design",
        "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempore!"
    },
    {
        "id": 2,
        "title": "development",
        "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempore!"
    },
    {
        "id": 3,
        "title": "seo",
        "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempore!"
    },
    {
        "id": 4,
        "title": "graphics",
        "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempore!"
    },
    {
        "id": 5,
        "title": "editing",
        "discription": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, tempore!"
    }
]


const Services = () => {

    return (
        <>
            <div className="Services" id='Services'>
                <div className="heading">
                    <h2>Services</h2>
                    <p>What i provide !</p>
                </div>
                <div className="main">
                    <div className="services">

                        {Data.map(({ id, title, discription }) => (
                            <div className="main">
                                <span>{id}</span>
                                <h2>{title}</h2>
                                <p>{discription}</p>
                                <a href="#">Hire</a>
                            </div>
                        )
                        )
                        }

                    </div>
                    <div className="skills">
                        {TAGS.map(tag => (
                            <div className="skill">
                                <span>#{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;
