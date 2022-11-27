import React from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Head from 'next/head';

const index = () => {

  return (
    <>
      <Head>
        <title>Abhishek : creative developer and designer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script src="https://kit.fontawesome.com/9e22600841.js" crossorigin="anonymous"></script>
      </Head>
      <Nav />
      <Home />
    </>
  )
}

export default index;