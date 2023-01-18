import * as React from "react";
import { Link } from "gatsby";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="greyBackground flex row center">
        <div className="content flex row center">
          <div className="container flex row center">
            <div className="flex row center" style={{ margin: "2vh"}}>
              <div className="flex row center">
                <section className="flex row center">
                  <ul className="flex row center" style={{ margin: "0", padding: "0", width: "100%"}}>
                    <li>
                      <Link className="footer-item" to="/">
                        <i className="fa fa-home"></i>
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/impressum">
                        Impressum
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/datenschutz">
                        Datenschutz
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/contact">
                        Kontakt
                      </Link>
                    </li>
                    {/* <li>
                      <Link className="footer-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li> */}
                    <li>
                      <a
                        className="footer-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="flex row center">
                {/* <a className="footer-item" title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a className="footer-item" title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a className="footer-item" title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a> */}
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
