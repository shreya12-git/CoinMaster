import React from 'react';
import NavbarComponent from '../components/NavbarComponent';
import SlideShow from '../components/SlideShow';
import AboutUsHome from '../components/AboutUsHome';
import CardsHome from '../components/CardsHome';
import InsightsHome from '../components/InsightsHome';
import ContactUsHome from '../components/ContactUsHome';
import Footer from '../components/Footer';

const HomePage=()=>{
 return(
    <div className='homepage'>
        <NavbarComponent />
        <SlideShow></SlideShow>
        <br></br>
        <br></br>
         <AboutUsHome></AboutUsHome>
        <CardsHome></CardsHome>
        <InsightsHome></InsightsHome>
        <ContactUsHome></ContactUsHome>
        <Footer></Footer>
    </div>
 )
}
export default HomePage;