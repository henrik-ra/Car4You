import '../pages/Homepage/homepage';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

function FAQ() {
    return (
        <>
            <section className='contact-section bg-black'>
                <div className='container px-4 px-lg-5'>
                    {/* Reihe mit 3 Spalten */}
                    <div className='row gx-4 gx-lg-5'>
                        {/* Karte 1 */}
                        <div className='col-md-4 mb-3 mb-md-0'>
                            <div className='card py-4 h-100'>
                                <div className='card-body text-center'>
                                    <i className='fa fa-map text-primary mb-2'></i>
                                    <h4 className='text-uppercase m-0'>Addresse Zentrale</h4>
                                    <hr className='my-4 mx-auto' />
                                    <div className='small text-black-50'>68168 Mannheim, Germany</div>
                                </div>
                            </div>
                        </div>

                        {/* Karte 2 */}
                        <div className='col-md-4 mb-3 mb-md-0'>
                            <div className='card py-4 h-100'>
                                <div className='card-body text-center'>
                                    <i className='fa fa-envelope text-primary mb-2'></i>
                                    <h4 className='text-uppercase m-0'>Email</h4>
                                    <hr className='my-4 mx-auto' />
                                    <div className='small text-black-50'><a href='mailto:henrikra@car4you.com'>henrikra@car4you.com</a></div>
                                </div>
                            </div>
                        </div>

                        {/* Karte 3 */}
                        <div className='col-md-4 mb-3 mb-md-0'>
                            <div className='card py-4 h-100'>
                                <div className='card-body text-center'>
                                    <i className='fa fa-mobile text-primary mb-2' id='phone'></i>
                                    <h4 className='text-uppercase m-0'>Phone</h4>
                                    <hr className='my-4 mx-auto' />
                                    <div className='small text-black-50'>+49 1234 567 891</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social-Media Links  */}
                    <div className='social d-flex justify-content-center'>
                        <a className='mx-2' href='https://twitter.com/'><i className='fa fa-twitter' /></a>
                        <a className='mx-2' href='https://de-de.facebook.com/www.startseite.de/'><i className='fa fa-facebook-f' /></a>
                        <a className='mx-2' href='https://github.com/SimonKlausLudwig'><i className='fa fa-github' /></a>
                    </div>

                </div>
            </section>

            {/* unterster Teil vom Footer  */}
            <footer className='footer bg-black small text-center text-white-50'><div className='container px-4 px-lg-5'>Copyright &copy; Car4You GmbH 2023</div></footer>

        </>
    )
}

export default FAQ;