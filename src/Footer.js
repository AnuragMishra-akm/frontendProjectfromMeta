import icon from './logo.svg'
function Footer() {
    return (
        <footer className="footer">
<img src={icon} alt='logo of little lemon'/>
        <div className="nav-section">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="contact-section">
          <h3>Contact</h3>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div className="social-section">
          <h3>Social Media Links</h3>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        </footer>
    )
}
export default Footer;
