import { Link } from 'react-router-dom';
import './notfound.css';

// Falls ungültige Links eingefügt werden
export default function NotFound() {
    return (
        <div className='containerNotFound'>
            <h1>Oops! You seem to be lost.</h1>
            <p>Back to the HomePage</p>
            <Link to='/'>Home</Link>
        </div>
    )
}
