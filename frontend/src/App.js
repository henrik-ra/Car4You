import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

import logo from './pictures/logo.jpg';
import HomePage from './pages/Homepage/homepage.js';
import Cars from './pages/Autosuche/products';
import DetailsCar1 from './pages/CarDetails/CarDetails';
import NotFound from './pages/NotFound/NotFound';
import FAQ from './pages/FAQ/FAQ';
import Login from './pages/Login/Login';


import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';


function App() {
    // Konstante für Navbar mit MDB:
    const [showBasic, setShowBasic] = useState(false);

    //Ausgabe auf Bildschirm durch JSX:
    return (

        <>  {/* <> verwendet, da nur ein Element ausgegeben werden kann */}
            {/* Navbar mit MaterialDesignBootstrap (MDB) erstellt und selbst designt: */}
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    {/* Logo */}
                    <MDBNavbarBrand className='leftabstand'>
                        <Link to='/' className='MDBNavbarLink'>
                            <img src={logo} alt='' loading='lazy' className='imgnav' />
                        </Link>
                    </MDBNavbarBrand>

                    {/* navigation small width */}
                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        a
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <i class='fa fa-align-justify'></i>
                    </MDBNavbarToggler>

                    {/* Zusätzlich zum Logo restliche Links in der Navbar */}
                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>

                            <MDBNavbarItem className='NavbarLink'>
                                <Link to='/Cars' className='MDBNavbarLink'>Auto mieten</Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className='NavbarLink'>
                                <Link to='/FAQ' className='MDBNavbarLink'>FAQ</Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>

                        <Link to='/Login' className='MDBNavbarLink'>
                            <button class='btn btn-lg btn-primary' type='submit'>Login/Registrieren</button>
                        </Link>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>



            {/* alle Routen der App */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Cars' element={<Cars />} />
                <Route path='/Cars/:carsid' element={<DetailsCar1 />} />    {/*für jede Autodetailseite */}
                <Route path='/FAQ' element={<FAQ />} />
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<NotFound />} /> {/*Falls eine ungültige URL eingegeben wird */}
            </Routes>

            {/* Footer nicht hier, da er nicht auf allen Seiten sein soll */}

        </>
    )
}


export default App;
