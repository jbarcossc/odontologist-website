import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Services from '../components/Services';
import Agenda from '../components/Agenda';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {

    return (
      <div id="home">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <Navbar></Navbar>
        <About></About>
        <Services></Services>
        <Agenda></Agenda>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    )
}

export default Home