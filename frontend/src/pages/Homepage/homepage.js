import { Link } from 'react-router-dom';
import React from 'react';
import './homepage.css';
import Footer from '../../Components/footer';

function App() {

    return (
        <>
            {/* Hero-Bereich */}
            <header className='masthead'>
                <div className='container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center'>
                    <div className='d-flex justify-content-center'>
                        <div className='text-center'>
                            <h1 className='mx-auto my-0 text-uppercase'>Car4You</h1>
                            <h2 className='text-white-50 mx-auto mt-2 mb-5'>Dank unserer vielfach ausgezeichneten Autovermietung nie wieder zu Fuss unterwegs.</h2>
                            <Link to='/Cars' className='btn btn-primary' id='btnhero'>Jetzt Auto finden!</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Kurzbeschreibung */}
            <section className='about-section text-center'>
                <div className='container px-4 px-lg-5'>
                    <div className='row gx-4 gx-lg-5 justify-content-center'>
                        <div className='col-lg-8'>
                            <h2 className='text-white mb-4'>Von Elektro bis Verbrenner</h2>
                            <p className='text-white-50'>
                                An unseren Standorten in Mannheim und Heidelberg bieten wir zahlreiche Autos an.<br /> Überzeugen Sie sich selbst von unseren Angeboten!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* interaktive Karte */}
            <section className='map-section bg-light'>
                <div className='container'>
                    <h2>Unsere Standorte</h2>
                    <iframe title='Standorte' src='https://my.atlistmaps.com/map/b2b8b692-b269-4add-82df-44975ad4f890?share=true' allow='geolocation' width='100%' height='400px' frameborder='0' scrolling='no' allowfullscreen></iframe>
                </div>
            </section>

            <Footer />

        </>
    );
}

export default App;
