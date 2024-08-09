// Dieser Code ist keine Funktion des Backlogs und wird daher wie besprochen nicht bewertet

import './login.css';

import logo from '../../pictures/logo.jpg';

import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useForm } from 'react-hook-form';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';


function App() {

    const { register } = useForm();
    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };


    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }


    return (
        <MDBContainer className='p-3 my-5 d-flex flex-column'>

            <MDBTabs pills justify className='mb-3 mt-5 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Anmelden
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Registrieren
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane show={justifyActive === 'tab1'}>

                    <div className='row'>
                        <div className='col-6'>
                            <p> Email Adresse</p>
                            <MDBInput wrapperClass='mb-4' id='form1' type='email' />
                            <p> Passwort</p>
                            <MDBInput wrapperClass='mb-4 ' id='form2' type='password' />

                            <MDBBtn className='mb-4 w-50 mt-4'>Login</MDBBtn>
                        </div>
                        <div className='col-6'>
                            <img src={logo} alt='Logo' />
                        </div>
                    </div>
                </MDBTabsPane>

                <MDBTabsPane show={justifyActive === 'tab2'}>


                    <div className='row'>
                        <div className='col-6'>
                            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
                        </div>
                        <div className='col-6'>
                            <MDBInput wrapperClass='mb-4' label='Vorname' id='form1' type='text' />
                            <input {...register('maxPreis')} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Enter email' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-8'>
                            <MDBInput wrapperClass='mb-4' label='Straße' id='form1' type='text' />
                        </div>
                        <div className='col-4'>
                            <MDBInput wrapperClass='mb-4' label='Hausnummer' id='form1' type='number' />
                        </div>
                    </div>
                    <Select options={options} value={value} onChange={changeHandler} className='text-dark' />
                    <div className='row'>
                        <div className='col-6'>
                            <MDBInput wrapperClass='mb-4' label='PLZ' id='form1' type='number' />
                        </div>
                        <div className='col-6'>
                            <MDBInput wrapperClass='mb-4' label='Wohnort' id='form1' type='text' />
                        </div>
                    </div>
                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

                    <div className='d-flex justify-content-center mb-4'>
                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
                    </div>

                    <MDBBtn className='mb-4 w-100'>Sign up</MDBBtn>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer >

    );
}

export default App;