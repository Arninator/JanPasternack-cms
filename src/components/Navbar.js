import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/SPD_Logo_Weiss.png";
import logoBlack from "../img/SPD_Logo_Schwarz_RGB.png";
import { reduce } from "lodash";
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

    $(".newsItem").hover( function() {
      $("#news-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": $(this).offset().top,
        "left": $(this).offset().left,
      });
      console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#news-dropdown").css({
        "display": "none"
      });
    });
    $(".überItem").hover( function() {
      console.log($(this).get);
      $("#über-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": $(this).offset().top,
        "left": $(this).offset().left,
      });
      console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#über-dropdown").css({
        "display": "none"
      });
    });
    $(".frankfurtItem").hover( function() {
      console.log($(this).get);
      $("#frankfurt-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": $(this).offset().top,
        "left": $(this).offset().left,
      });
      console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#frankfurt-dropdown").css({
        "display": "none"
      });
    });
    $(".kontaktItem").hover( function() {
      console.log($(this).get);
      $("#kontakt-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": $(this).offset().top,
        "left": $(this).offset().left,
      });
      console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#kontakt-dropdown").css({
        "display": "none"
      });
    });


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


    $(function() {
      $(window).scroll(function() {

          /* sticky menu */
          $(".navbar").each(function() {
              var menu_top = $(this).offset().top;
              var window_top = $(window).scrollTop();

              if (window_top > ($(window).height()) / 90.) {
                  $(this).css("background-color", "rgb(227, 0, 15)");
                  // $(this).css("background", "linear-gradient(to bottom, rgb(227, 0, 15) 0%, rgba(255, 255, 255, 0) 100%)");
                  
                  $(".navbarItem").css("color", "white");
                  $(".navbarItem").hover(function () {
                    $(this).css("color", "black");
                  }, function () {
                    $(this).css("color", "white");
                  });

                  $("#spd-logo").attr("src", logo);
                  $("#spd-logo").hover(function() {
                    $( this ).attr("src", logoBlack);
                  }, function() {
                    $( this ).attr("src", logo);
                  });                  
              } else {
                  $(this).css("background-color", "transparent");
                  $(".navbarItem").css("color", "black");
                  $(".navbarItem").hover(function () {
                    $(this).css("color", "rgb(227, 0, 15)");
                  }, function () {
                    $(this).css("color", "black");
                  });
                  
                  $("#spd-logo").attr("src", logoBlack);
                  $("#spd-logo").hover(function() {
                    $( this ).attr("src", logo);
                  }, function() {
                    $( this ).attr("src", logoBlack);
                  });
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
    });

    $("#spd-logo").hover(function() {
      $( this ).attr("src", logo);
    }, function() {
      $( this ).attr("src", logoBlack);
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
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
          style={{
            position: "sticky",
            top: "0",
            margin: "0",
            padding: "0",
            backgroundColor: "transparent",
          }}
        >
          <div
            className="flex column center"
            style={{
              width: "100vw",
            }}
          >
            <div 
              // className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "space-between",

                width: "100vw",
              }}
              >
              <div 
                className="navbar-brand container"
              >
                <a 
                  href="https://www.spd.de/" 
                  className="navbar-item" 
                  title="SPD-Logo"
                  target="_blank"
                  style={{
                    margin: "0 5vw",
                    padding: "2vh 2vw",
                    height: "7vh",
                    backgroundColor: "transparent"
                    // backgroundColor: "rgb(227, 0, 15)"
                  }}
                >
                  <img
                    id="spd-logo"
                    className="spd-logo-class"
                    src={ logoBlack } 
                    alt="SPD Logo"
                  />
                </a>
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  role="menuitem"
                  tabIndex={0}
                  onKeyPress={() => this.toggleHamburger()}
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div 
                  className="navbar-start has-text-centered flex row center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",

                    width: "100%"
                  }}
                >
                  <Link className="navbarItem flex row center" to="/">
                    Home
                  </Link>
                  <Link className="navbarItem newsItem flex row center" to="/news">
                      News
                  </Link>                
                  <Link className="navbarItem überItem flex row center" to="/products">
                    Über
                  </Link>
                  <Link className="navbarItem flex row center" to="/blog">
                    Presse
                  </Link>
                  <Link className="navbarItem frankfurtItem flex row center" to="/frankfurt">
                    Frankfurt
                  </Link>
                  <Link className="navbarItem kontaktItem flex row center" to="/contact">
                    Kontakt
                  </Link>
                  {/* <Link className="navbarItem flex row center" to="/contact/examples">
                    Form Examples
                  </Link> */}
                  <div
                    className="navbarItem flex row"
                    style={{
                      width: "8vw",
                      justifyContent: "space-between"
                    }}
                  >
                    <a 
                      className="navbarItem flex row center grey" 
                      href="https://www.instagram.com"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a 
                      className="navbarItem flex row center grey" 
                      href="https://www.twitter.com"
                      target="_blank"
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a 
                      className="navbarItem flex row center grey" 
                      href=""
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a 
                      className="navbarItem flex row center grey" 
                      href=""
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </div>
                </div>
                {/* <div className="navbar-end has-text-centered">
                  <a
                    className="navbar-item"
                    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          <div
            id="dropdown"
            className="flex column center"
            style={{
                 border: "1px solid red"
            }}
          >
            {/* NEWS */}
            <div
              id="news-dropdown"
              className="flex column endEnd"
            >
              <Link className="navbarItem newsItem flex row center" to="/aktuelles">
                Aktuelles
              </Link>
              <Link className="navbarItem newsItem flex row center" to="/presse">
                Presse
              </Link>
              <Link className="navbarItem newsItem flex row center" to="/termine">
                Termine
              </Link>
            </div>
            
            {/* ÜBER */}
            <div
              id="über-dropdown"
              className="flex column endEnd"
            >
              <Link className="navbarItem überItem flex row center" to="/vorstellung">
                Vorstellung
              </Link>
              <Link className="navbarItem überItem flex row center" to="/politik">
                Politik
              </Link>
              <Link className="navbarItem überItem flex row center" to="/lebenslauf">
                Lebenslauf
              </Link>
            </div>
            
            {/* FRANKFURT */}
            <div
              id="frankfurt-dropdown"
              className="flex column endEnd"
            >
              <Link className="navbarItem frankfurtItem flex row center" to="/wahlkreis">
                Wahlkreis
              </Link>
              <Link className="navbarItem frankfurtItem flex row center" to="/ontour">
                on tour
              </Link>
            </div>
            
            {/* KONTAKTK */}
            <div
              id="kontakt-dropdown"
              className="flex column endEnd"
            >
              <Link className="navbarItem kontanktItem flex row center" to="/contakt">
                Kontakt
              </Link>
              <Link className="navbarItem kontanktItem flex row center" to="/pressebilder">
                Pressebilder
              </Link>
            </div>
          </div>
        </nav>

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
