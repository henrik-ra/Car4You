import 'bootstrap/dist/css/bootstrap.min.css';
import './cardetails.css'

import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Footer from '../../Components/footer';

// fuer Sternebewertung
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Imaga-Wechsel bei Klick auf anderes Bild
function changeImage(element) {
    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
}


// main Funktion
function Products() {

    const [data, setData] = useState([]);

    // Daten von Datenbank holen
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://8080-simonklausludwig-base-61cuh9pbd1p.ws-eu82.gitpod.io/api/cars');
            setData(result.data);
        };
        fetchData();
    }, []);

    const { carsid } = useParams();

    // damit jeweils das richtige Auto aufgerufen wird
    const thisCar = data.filter(car => car.id === carsid);

    // Funktion, die aufgerufen wird, um das Attribut stars von Wert 1-5 aus der Datenbank zu Bildern zu konvertieren
    function showStars(rating) {
        let stars = []
        // Floor gibt groesste Ganzzahl zurück, die kleiner oder gleich der angegebenen Dezimalzahl ist.
        let fullStars = Math.floor(rating)
        for (let i = 1; i <= fullStars; i++) {
            stars.push(<FontAwesomeIcon icon={faStar} />)
        }
        if (rating - fullStars >= 0.5) {
            stars.push(<FontAwesomeIcon icon={faStarHalfStroke} />)
        }
        for (let i = 1; i <= 5 - fullStars - (rating - fullStars >= 0.5 ? 1 : 0); i++) {
            stars.push(<FontAwesomeIcon icon={farStar} className='leererStern' />)
        }
        return stars
    };

    return (
        <>
            {thisCar.map(thisProduct => (
                <div className='bg'>
                    <div className='container'>
                        {/* Zurueck Button  */}
                        <Link to='/Cars' className='MDBNavbarLink backButtonCarDetails'><button className='btn btn-primary'>Zurück</button></Link>
                        <div className='card cardmainabstandunten'>
                            <div className='row'>
                                {/* Linke Seite der Reihe  */}
                                <div className='col-md-6 border-end'>
                                    <div className='d-flex flex-column justify-content-center'>
                                        {/* Standardbild einfuegen  */}
                                        <div className='main_image'>
                                            <img src={require('../../pictures/car' + carsid + '/1.jpg')} id='main_product_image' width='500' alt='Fail' />
                                        </div>
                                        {/* Bilderwechsel:  */}
                                        <div className='thumbnail_images'>
                                            <ul id='thumbnail'>
                                                <li>
                                                    <img onClick={(event) => changeImage(event.target)} src={require('../../pictures/car' + carsid + '/1.jpg')} width='70' alt='loading failed' />
                                                </li>
                                                <li>
                                                    <img onClick={(event) => changeImage(event.target)} src={require('../../pictures/car' + carsid + '/2.jpg')} width='70' alt='loading failed' />
                                                </li>
                                                <li>
                                                    <img onClick={(event) => changeImage(event.target)} src={require('../../pictures/car' + carsid + '/3.jpg')} width='70' alt='loading failed' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Autoinformationen (rechte Seite der Reihe) */}
                                <div className='col-md-6'>
                                    <div className='p-3 right-side'>

                                        <div className='d-flex justify-content-between align-items-center mt-5'>
                                            <h3>{thisProduct.marke + ' ' + thisProduct.modell}</h3>
                                        </div>

                                        <h4 className='mt-2'>{thisProduct.preis}€/Tag</h4>

                                        <div className='ratings'>
                                            <div className='d-flex flex-row'>
                                                {showStars(thisProduct.stars)}
                                            </div>
                                        </div>

                                        <div className='mt-3'>
                                            <span> <b>Details:</b><br /> PS: {thisProduct.ps} <br /> </span>
                                            <span> Motor: {thisProduct.motor} <br /> </span>
                                            <span> Standort: {thisProduct.standort.replace('ae', 'ä')} <br /> </span>
                                        </div>

                                        <div className='mt-5'>
                                            <span className='fw-bold'>Color</span>
                                            <p> {thisProduct.autofarbe}</p>
                                        </div>

                                        {/* reservieren Button  */}
                                        <div className='buttons d-flex flex-row mt-5 gap-3'>
                                            <button className='btn btn-dark'>Jetzt Reservieren</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Footer einfuegen  */}
            <Footer />
        </>

    );
}
export default Products;


