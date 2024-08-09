import 'bootstrap/dist/css/bootstrap.min.css';
import './products.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// fuer Sternebewertung
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState({ marke: '', standort: '', autofarbe: '' });

    // priceDesc da standardmaessig so sortiert sein soll:
    const [sortType, setSortType] = useState('priceDesc');

    // fuer Elektro Button Toggler
    const [motor, setMotor] = useState('all');

    //Daten holen
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://8080-simonklausludwig-base-61cuh9pbd1p.ws-eu82.gitpod.io/api/cars');
            setData(result.data);
        };
        fetchData();
    }, []);

    //update Suche bei neuen Filtern
    const handleChange = (event) => {
        setFilter({ ...filter, [event.target.name]: event.target.value });
    };

    // nur verfügbare Autos
    const availableCars = data.filter(cars => cars.verfügbar === true);

    // Daten filtern 
    const filteredData = availableCars
        .filter(cars =>
            (motor === 'all' || cars.motor.toLowerCase().includes(motor.toLowerCase())) &&
            cars.marke.toLowerCase().includes(filter.marke.toLowerCase()) &&
            cars.standort.toLowerCase().includes(filter.standort.toLowerCase()) &&
            cars.autofarbe.toLowerCase().includes(filter.autofarbe.toLowerCase())
        );

    // gefilterte Daten sortieren
    // Funktion vergleicht jedes Element des Arrays mit seinem Nachbarn und tauscht ihre Positionen aus, wenn sie nicht in der richtigen Reihenfolge sind.
    // Dieser Vorgang wiederholt sich, bis das gesamte Array sortiert ist.
    const sortedData = filteredData.sort((a, b) => {
        if (sortType === 'ps') {
            return a.ps - b.ps;
        } else if (sortType === 'psDesc') {
            return b.ps - a.ps;
        } else if (sortType === 'price') {
            return a.preis - b.preis;
        } else if (sortType === 'priceDesc') {
            return b.preis - a.preis;
        } else if (sortType === 'starsDesc') {
            return b.stars - a.stars;
        }
        return 0;
    });

    // fuer Sterneausgabe und Sternekonvertierung
    function showStars(rating) {
        let stars = []
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
            {/* Reihe 1 */}
            <div className='form-group row mt-3'>
                {/* Standort wählen */}
                <div className='col-3 position-relative'>
                    <select id='standort' name='standort' value={filter.standort} onChange={handleChange} className='form-select' aria-label='Standort select'>
                        <option value=''>Standort wählen</option>
                        <option value='kaefertal'>Käfertal</option>
                        <option value='HD Kirchheim'>HD Kirchheim</option>
                    </select>
                </div>
                {/* Farbe wählen */}
                <div className='col-3'>
                    <select id='autofarbe' name='autofarbe' value={filter.autofarbe} onChange={handleChange} className='form-select' aria-label='Default select example'>
                        <option value=''>Farbe wählen</option>
                        <option value='schwarz'>schwarz</option>
                        <option value='weiss'>weiß</option>
                        <option value='grau'>grau</option>
                    </select>
                </div>
            </div>

            {/* Reihe 2  */}
            <div className='form-group row mt-3'>
                {/* Automarke wählen */}
                <div className='col-3 center-block'>
                    <select id='marke' name='marke' value={filter.marke} onChange={handleChange} className='form-select' aria-label='Default select example' defaultValue={true}>
                        <option value=''>Automarke wählen</option>
                        <option value='mercedes'>Mercedes</option>
                        <option value='porsche'>Porsche</option>
                        <option value='byd'>BYD</option>
                    </select>
                </div>

                {/* Elektro Switch */}
                <div className='col-1'>
                    <label className='switch'>
                        <input type='checkbox' onChange={() => setMotor(prevMotor => prevMotor === 'Elektro' ? 'all' : 'Elektro')} />
                        <span className='slider round'></span>
                    </label>
                    <p>Elektro</p>
                </div>

                {/* Autos sortieren */}
                <div className='col-2'>
                    <select id='sortType' name='sortType' className='form-select' onChange={(e) => setSortType(e.target.value)} defaultValue={sortType}>
                        <option value='price'>Preis aufsteigend</option>
                        <option value='priceDesc'>Preis absteigend</option>
                        <option value='ps'>PS aufteigend</option>
                        <option value='psDesc'>PS absteigend</option>
                        <option value='starsDesc'>Bewertung absteigend</option>
                    </select>
                </div>
            </div>

            {/* Bootstrapkarten für Autos mit Daten aus der Datenbank generieren */}
            {/* Bootstrap Grid mithilfe von css */}
            <div className='container'>
                <div className='row-Autos mt-3'>
                    {/* Falls keine Elemente vorhanden wird alternativer Text ausgegeben  */}
                    {sortedData.length > 0 ?
                        sortedData.map(cars => (
                            // Fuer jede Autokarte den Link zur Detailseite
                            <Link to={`/Cars/${cars.id}`} key={cars.id} className='LinkProducts'>
                                <div className='card col-12'>
                                    <div className='card-body col-12'>
                                        <div className='row'>
                                            {/* siehe ordnerstruktur */}
                                            <img src={require('../../pictures/car' + cars.id + '/1.jpg')} className='imghoehe' alt='loading error' />
                                            <div className='col-12 mt-3'>
                                                {/* Autofeatures */}
                                                <h5 className='card-title'>{cars.marke + ' ' + cars.modell}</h5>
                                                <h6 className='card-subtitle mb-2 text-muted'>{cars.standort.replace('ae', 'ä')}</h6>
                                                <p className='card-text'>
                                                    {showStars(cars.stars)}
                                                </p>
                                                <p className='card-text'>Motor: {cars.motor}</p>
                                                <p className='card-text'>PS: {cars.ps}</p>
                                                <p className='card-text'>Autofarbe: {cars.autofarbe}</p>
                                                <p className='card-text'>Preis: {cars.preis}€/Tag</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                        // alternative Ausgabe, falls keine Autos gefunden wurden
                        : <h3 className='keinergebnis'>Bitte Suchkriterien anpassen</h3>
                    }

                </div>
            </div>
        </>
    );
}


export default Products;