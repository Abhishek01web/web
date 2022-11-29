import React from 'react';

const Blog = () => {
    const Data = [
        {
            img: "./images/blog-one.png",
            title: "night Vision",
            discription: "We only think about dreams but vision is more powerful."
        },
        {
            img: "./images/blog-two.png",
            title: "Robert Downey Jr.",
            discription: "My super hero is Iron Man and how have art of become Iron man ?"
        },
        {
            img: "./images/blog-three.png",
            title: "cycling Importance",
            discription: "If you have a body then the cycling is for you! let's enjoy."
        },
        {
            img: "./images/blog-four.png",
            title: "blogging with me",
            discription: "We live in the age of the internet, blogging is awesome for you."
        },
        {
            img: "./images/blog-five.png",
            title: " what is Night ?",
            discription: "When we are go to bad for seelping at night, something is get up ..."
        },
        {
            img: "./images/blog-six.png",
            title: "Girls Power",
            discription: "In this age girls get more chances to grow and they do best, get super"
        },
    ]
    return (
        <>
            <div className="Blog" id='Blog'>
                <div className="heading">
                    <h2>Blog</h2>
                    <p>It is for you ?</p>
                </div>
                <div className="main">

                    {
                        Data.map((data) => {
                            return (
                                <div className="b">
                                    <div className="img">
                                        <img src={data.img} alt={data.img} />
                                    </div>
                                    <div className="cont">
                                        <h4>{data.title}</h4>
                                        <p>{data.discription}</p>
                                        <a href="">Read More...</a>
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

export default Blog;