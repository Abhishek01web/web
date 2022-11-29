import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Head from 'next/head';
import About from './components/About';
import Project from './components/Project';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const index = () => {

  return (
    <>
      <Head>
        <title>Abhishek : creative developer and designer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="./images/p-one.png" />
        <link rel="apple-touch-icon" href="./images/p-one.png" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Abhishek : creative developer and designer"
        />
      </Head>
      <Nav />
      <Home />
      <About />
      <Project />
      <Blog />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default index;