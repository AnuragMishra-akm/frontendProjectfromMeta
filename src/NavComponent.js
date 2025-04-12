import { Link } from 'react-router-dom';

function NavComponent() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bookingPage">BookingPage</Link>
                </li>
                <li>
                    <Link to="/chicago">Chicago</Link>
                </li>
                <li>
                    <Link to="/customersSay">CustomersSay</Link>
                </li>
                <li>
                    <Link to="/specials">Specials</Link> {/* Corrected here */}
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavComponent;