import './footer.css';
import logo from '../navbar/Images/logo.png';
import { Link } from 'react-router-dom';


import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  TelephoneFill,
  EnvelopeFill,
} from 'react-bootstrap-icons';

function Footer() {
 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="footer_footerbody">
        <footer>
          <div className="footer_container1">
            <div className="footer_sec footer_aboutus">
              <div className='footer_logo'>
                <img src={logo} alt="" />
                <h2 style={{fontSize: '2rem'}}>GYWS</h2>
              </div>
              <p>Gopali Youth Welfare Society is a registered voluntary non-governmental organisation run by IIT Kharagpur students along with some faculty members with the support of local members from Gopali.
              </p>
              <ul className="footer_sci">
                <li>
                  <a href="https://www.facebook.com/gyws.iitkgp">
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/gyws_ngo.iitkgp/">
                    <Instagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/gopali-youth-welfare-society/mycompany/">
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/gopali_youth">
                    <Twitter />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_sec footer_quicklinks">
              <h2>QUICK LINKS</h2>
              <ul>
                <li>
                  <Link to="/" onClick={scrollToTop}>
                    Home
                  </Link><hr />
                </li>
                <li>
                  <Link to="/about" onClick={scrollToTop}>
                    About Us
                  </Link>  <hr />
                </li>
                <li>
                  <Link to="/jvm" onClick={scrollToTop}>
                    Initiative
                  </Link> <hr />
                </li>
                <li>
                  <Link to="/media" onClick={scrollToTop}>
                    Media
                  </Link> <hr />
                </li>
                <li>
                  <Link to="/member" onClick={scrollToTop}>
                    Members
                  </Link> <hr />
                </li>
                <li>
                  <Link to="/donate" onClick={scrollToTop}>
                    Donate
                  </Link> <hr />
                </li>
              </ul>
            </div>

            <div className="footer_sec footer_contact">
              <h2>CONTACT US</h2>
              <ul className="footer_info">
                <li>
                  <p>Gopali (No-shooting Area)</p>
                  <p><strong>P.O.:</strong> Salua <br /><strong>Dist.:</strong> Paschim Medinipur</p>
                  <p>West Bengal, 721145</p>
                </li>
                <a href="tel:+918158878735">
                  <li>
                    <TelephoneFill className='logo-footercontact'/> +91 8158878735
                  </li>
                </a>
                <a href="mailto:gywsociety@gmail.com">
                  <li>
                    <EnvelopeFill className='logo-footercontact'/> gywsociety@gmail.com
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <div className="footer_copyrightText">
            <p>©  2024 GYWS. All Right Reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
