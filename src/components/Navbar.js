import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";
import { reduce } from "lodash";
import SPDLogoWhite from "../img/SPD_Logo_Weiss.png";
import JanCover from "../img/janCover.jpg"
import "../components/style.css";

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

import $ from "jquery";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  componentDidMount () {

    // apiCalendar.handleAuthClick();
    fetch("https://www.googleapis.com/calendar/v3/calendars/ar.maxnold@gmail.com/events?key=AIzaSyB7GfNxM4TXXtDue-64TMEzOViC8dTIgmA")
    // fetch("https://www.googleapis.com/calendar/v3/calendars/sechzehngeteiltdurchneun@gmail.com/events?key=AIzaSyD3HySl2mo7m_5cjUwhltGmDt29yJ4U5uU")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            termine: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )


    $(document).ready(function() {
      $(window).scroll(function() {

          /* sticky menu */
          $("#menu-div").each(function() {
              var menu_top = $(this).offset().top;
              var window_top = $(window).scrollTop();

              if (window_top > ($(window).height()) / 90.) {
                  $(this).css("background-color", "rgb(227, 0, 15)");
                  $("ul").addClass("menu-row");
                  $("ul").removeClass("menu-column");
                  $(".spd-logo").css("height", "3vh");
              } else {
                  $(this).css("background-color", "transparent");
                  $("ul").addClass("menu-column");
                  $("ul").removeClass("menu-row");
                  $(".spd-logo").css("height", "5vh");
              }
          })

          /* position of fade in and out objects */
          $('.fade-in').each(function(index){

              var object_top = $(this).offset().top;
              var object_bottom = $(this).offset().top + $(this).outerHeight();
              var window_top = $(window).scrollTop();
              var window_bottom = $(window).scrollTop() + $(window).height();

              /* if its half seen, fade it in */
              if (window_bottom - object_top > ($(this).outerHeight() / 2.)){
                  $(this).css("opacity", "1");
              } else {
                  $(this).css("opacity", "0");
              }
          });

      });

      // $(".spd-logo").hover(function() {
      //     $(".spd-logo").attr("src", logoBlack);
      // }, function() {
      //     $(".spd-logo").attr("src", logoWhite);
      // });
    });
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      //NEW
      <header
        style={{

        }}>
        <div
          id="menu-div"
          style={{
            position: "-webkit-sticky",
            position: "sticky",
            top: "0",
          }}
        >
          <nav>
            <img
              className="spdLogo"
              src={ SPDLogoWhite }
              alt="SPD Logo"
              style={{
                diplay: "flex"
              }}
            />
              <ul className="menu-column">
                <li>Programm</li>
                <li>Über</li>
                <li>Bilder</li>
                <li>Kontakt</li>
                <li><i className="fa fa-facebook-official"></i></li>
                <li><i className="fa fa-instagram"></i></li>
                <li><i className="fa fa-twitter"></i></li>
              </ul>
            </nav>
          </div>
        </header>

      // OLD
      // <nav
      //   className="navbar is-transparent"
      //   role="navigation"
      //   aria-label="main-navigation"
      // >
      //   <div className="container">
      //     <div className="navbar-brand">
      //       <Link to="/" className="navbar-item" title="Logo">
      //         <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
      //       </Link>
      //       {/* Hamburger menu */}
      //       <div
      //         className={`navbar-burger burger ${this.state.navBarActiveClass}`}
      //         data-target="navMenu"
      //         role="menuitem"
      //         tabIndex={0}
      //         onKeyPress={() => this.toggleHamburger()}
      //         onClick={() => this.toggleHamburger()}
      //       >
      //         <span />
      //         <span />
      //         <span />
      //       </div>
      //     </div>
      //     <div
      //       id="navMenu"
      //       className={`navbar-menu ${this.state.navBarActiveClass}`}
      //       style={{
      //         backgroundColor: "red"
      //       }}
      //     >
      //       <div className="navbar-start has-text-centered">
      //         <Link className="navbar-item" to="/about">
      //           About
      //         </Link>
      //         <Link className="navbar-item" to="/products">
      //           Products
      //         </Link>
      //         <Link className="navbar-item" to="/blog">
      //           Blog
      //         </Link>
      //         <Link className="navbar-item" to="/contact">
      //           Contact
      //         </Link>
      //         <Link className="navbar-item" to="/contact/examples">
      //           Form Examples
      //         </Link>
      //         <Link className="navbar-item" to="/contact/examples">
      //           TESTTESTTEST
      //         </Link>
      //       </div>
      //       <div className="navbar-end has-text-centered">
      //         <a
      //           className="navbar-item"
      //           href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           <span className="icon">
      //             <img src={github} alt="Github" />
      //           </span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </nav>
    );
  }
};

export default Navbar;
