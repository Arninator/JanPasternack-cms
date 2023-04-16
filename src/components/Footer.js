import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="whiteBackground">
        <div className="content">
          <div className="container">
            <div id="footer-section" className="flex-row flex-center" style={{ padding: "1vh", borderTop: "1px solid black" }}>
              <div className="">
                <section className="flex-row flex-center">
                  <Link className="footer-item" to="/">
                    <i className="fa fa-home"></i>
                  </Link>
                  <Link className="footer-item" to="/impressum">
                    Impressum
                  </Link>
                  <Link className="footer-item" to="/datenschutz">
                    Datenschutz
                  </Link>
                  <Link className="footer-item" to="/kontakt">
                    Kontakt
                  </Link>
                  <a
                    className="footer-item"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </a>
                </section>
              </div>
              <div className="flex row center">
                <a 
                  className="footer-item greyBackground" 
                  href="https://www.instagram.com"
                  target="_blank"
                >
                  <i className="fa fa-instagram greyBackground"></i>
                  </a>
                <a 
                  className="footer-item" 
                  href="https://www.twitter.com"
                  target="_blank"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a 
                  className="footer-item" 
                  href=""
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a 
                  className="footer-item" 
                  href=""
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
