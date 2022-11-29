import React from 'react';

const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev', 'HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const SER = ['design', 'development', 'seo', 'graphics', 'editing'];

const Data = [
    {
        "id": 1,
        "title": "design",
        "discription": "the process and skill of making drawings that show how something should be made, how it will work, etc."
    },
    {
        "id": 2,
        "title": "development",
        "discription": "the process of creating something more advanced; a more advanced product"
    },
    {
        "id": 3,
        "title": "seo",
        "discription": "the process of getting traffic from free, organic, editorial, or natural search results in search engines."
    },
    {
        "id": 4,
        "title": "graphics",
        "discription": "Graphics are an important part of Design because they can help communicate ideas and messages to users. "
    },
    {
        "id": 5,
        "title": "editing",
        "discription": "Editing is used to structure and present all video & images information,"
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
