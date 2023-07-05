import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";

import logo from "../img/SPD_Logo_Weiss.png";
import logoBlack from "../img/SPD_Logo_Schwarz_RGB.png";
import logoRed from "../img/SPD_Logo_Rot_RGB.png";

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
    this.toggleHamburger = this.toggleHamburger.bind(this);
  }

  componentDidMount () {

    $("#news-link").hover( function() {
      // console.log("width: " + $("#news-dropdown").width())
      $("#news-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": "6vh",
        "left": ($(this).offset().left + ($(this).width() / 2)) - ($("#news-dropdown").width() / 2.),
      });
      // console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#news-dropdown").css({
        "display": "none"
      });
    });
    $("#ueber-link").hover( function() {
      $("#ueber-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": "6vh",
        "left": ($(this).offset().left + ($(this).width() / 2)) - ($("#ueber-dropdown").width() / 2.),
      });
      // console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#ueber-dropdown").css({
        "display": "none"
      });
    });
    $("#frankfurt-link").hover( function() {
      $("#frankfurt-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": "6vh",
        "left": ($(this).offset().left + ($(this).width() / 2)) - ($("#frankfurt-dropdown").width() / 2.),
      });
      // console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#frankfurt-dropdown").css({
        "display": "none"
      });
    });
    $("#kontakt-link").hover( function() {
      $("#kontakt-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": "6vh",
        "left": ($(this).offset().left + ($(this).width() / 2)) - ($("#kontakt-dropdown").width() / 2.),
      });
      // console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#kontakt-dropdown").css({
        "display": "none"
      });
    });
    $("#themen-link").hover( function() {
      $("#themen-dropdown").css({
        "position": "absolute",
        "display": "block",
        "top": "6vh",
        "left": ($(this).offset().left + ($(this).width() / 2)) - ($("#themen-dropdown").width() / 2.),
      });
      // console.log($(this).offset().top + " " + $(this).offset().left);
    }, function() {
      $("#themen-dropdown").css({
        "display": "none"
      });
    });

    /* change color, when reload and scrolled down */
    if ( document.documentElement.scrollTop > 0 ) {

      $(".navbar").css("background-color", "rgb(227, 0, 15)");
      $(".dropdown").css("background-color", "rgb(227, 0, 15)");
      $(".dropdown").css("border-top", "1px solid black");
          
      $(".navbarItem").css("color", "white");
      $(".burger-bar").css("border", "1px solid white");
      $("#open-burger").css("background-color", "rgb(227, 0, 15)")

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
      $(".dropdown").css("background-color", "white");

      $(".navbarItem").css("color", "black");
      $(".burger-bar").css("border", "1px solid black");
      $("#open-burger").css("background-color", "white")

      $(".navbarItem").hover(function () {
        $(this).css("color", "rgb(227, 0, 15)");
      }, function () {
        $(this).css("color", "black");
      });
          
      $("#spd-logo").attr("src", logoBlack);
      $("#spd-logo").hover(function() {
        $( this ).attr("src", logoRed);
      }, function() {
        $( this ).attr("src", logoBlack);
      });
    }

    $(function() {
      $(window).scroll(function() {

        /* sticky menu */
        $(".navbar").each(function() {
            var window_top = $(window).scrollTop();

            if (window_top > ($(window).height()) / 90.) {
              $(this).css("background-color", "rgb(227, 0, 15)");
              $(".dropdown").css("background-color", "rgb(227, 0, 15)");
              $(".dropdown").css("border-top", "1px solid black");
                  
              $(".navbarItem").css("color", "white");
              $(".burger-bar").css("border", "1px solid white");
              $("#open-burger").css("background-color", "rgb(227, 0, 15)")

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
              $(".dropdown").css("background-color", "white");
              $(".dropdown").css("border-top", "1px solid rgb(227, 0, 15)");

              $(".navbarItem").css("color", "black");
              $(".burger-bar").css("border", "1px solid black");
              $("#open-burger").css("background-color", "white")

              $(".navbarItem").hover(function () {
                $(this).css("color", "rgb(227, 0, 15)");
              }, function () {
                $(this).css("color", "black");
              });
                  
              $("#spd-logo").attr("src", logoBlack);
              $("#spd-logo").hover(function() {
                $( this ).attr("src", logoRed);
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

              /* if half of the screen is the object, fade it in */
              if (object_top < (window_bottom - ($(window).height() / 2.) / 2.)){
              // if (window_bottom - object_top > ($(this).outerHeight() / 2.)){
                  $(this).css("opacity", "1");
              } else {
                  $(this).css("opacity", "0");
              }
          });
      });
    });

    $("#spd-logo").hover(function() {
      $( this ).attr("src", logoRed);
    }, function() {
      $( this ).attr("src", logoBlack);
    });
  }

  toggleHamburger() {

    if (!this.state.active) {
      let x = $("body").width() - $("#open-burger").width() - ($("body").width() / 10.);

      $("#open-burger")
        .css("display", "block")
        .css("position", "absolute")
        .css("top", "7vh")
        .css("left", `${ x }px`)
        .css("background-color", document.documentElement.scrollTop > 0 ? "rgb(227, 0, 15)" : "white" )
    } else {
      $("#open-burger").css("display", "none")
    }

    this.setState({
      active: !this.state.active,
    })
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
            // borderBottom: "1px solid black"
          }}
        >
          <div
            className="flex-row column flex-center"
            style={{
              // width: "100vw",
            }}
          >
            <div 
              className="flex-row space-between"
              style={{
                maxHeight: "4.8vh",
                minHeight: "40px"
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
                    // height: "7vh",
                    backgroundColor: "transparent",
                    // backgroundColor: "rgb(227, 0, 15)"
                  }}
                >
                  <img
                    id="spd-logo"
                    className=""
                    src={ logoBlack } 
                    alt="SPD Logo"
                  />
                </a>
              </div>

              {/* Hamburger menu */}
              <div
                id="burger-menu"
                className=""
                style={{
                  minHeight: "30px",
                  alignSelf: "flex-end",
                }}
                onKeyPress={this.toggleHamburger}
                onClick={this.toggleHamburger}
              >
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
              </div>

              <div
                id="open-burger"
                className="flex-column endEnd navbar"
                style={{
                  display: "none"
                }}
              >
                <Link className="navbarItem burgerItem flex-row endEnd" to="/">Home</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/news">News</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/lebenslauf">Lebenslauf</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/lebenslauf">Podcast</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/themen">Themen</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/wahlkreis">Wahlkreis</Link>
                <Link className="navbarItem burgerItem flex-row endEnd" to="/kontakt">Kontakt</Link>
              </div>

              <div
                id="navMenu"
                // className="border"
                // className={`navbar-menu ${this.state.navBarActiveClass}`}
                style={{
                  width: "50%",
                  marginRight: "2vw"
                }}
              >
                <div 
                  className="navbar-start has-text-centered flex row center"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div
                    id="home-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem column" to="/">
                      Home
                    </Link>
                  </div>
                  
                  <div
                    id="news-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem newsItem column" to="/news">
                      News
                    </Link>
                    <div
                      id="news-dropdown"
                      className="flex row center dropdown"
                      style={{
                        display: "none",
                      }}
                    >
                      <Link className="navbarItem newsItem column startStart" to="/aktuelles">
                        Aktuelles / Presse
                      </Link>
                      {/* <Link className="navbarItem newsItem column startStart" to="/presse">
                        Pressemitteilungen
                      </Link> */}
                      <Link className="navbarItem newsItem column startStart" to="/termine">
                        Termine
                      </Link>
                    </div>
                  </div>

                  <div
                    id="podcast-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem newsItem column" to="/podcast">
                      Podcast
                    </Link>
                  </div>

                  <div
                    id="lebenslauf-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem newsItem column" to="/lebenslauf">
                      Lebenslauf
                    </Link>
                  </div>

                  <div
                    id="themen-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem themenItem column" to="/themen">
                      Meine&nbsp;Themen
                    </Link>
                    <div
                      id="themen-dropdown"
                      className="dropdown"
                      style={{
                        display: "none"
                      }}
                    >
                      <Link className="navbarItem themenItem flex column" to="/themen/bildung">
                        Bildung
                      </Link>
                      <Link className="navbarItem themenItem column endEnd" to="/themen/sicherheit">
                        Sicherheit
                      </Link>
                      <Link className="navbarItem themenItem column" to="/themen/bezahlbares-leben">
                        Bezahlbares&nbsp;Leben
                      </Link>
                    </div>
                  </div>

                  {/* <div
                    id="ueber-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem ueberItem column" to="/ueber">
                      Über&nbsp;mich
                    </Link>
                    <div
                      id="ueber-dropdown"
                      className="dropdown"
                      style={{
                        display: "none"
                      }}
                    >
                      <Link className="navbarItem ueberItem flex column" to="/vorstellung">
                        Warum ich kandidiere
                        <span className="flex column flexStart" style={{margin: "0px"}}>Warum ich für den</span>
                        <span className="flex column flexStart" style={{margin: "0px"}}>Hessischen Landtag</span>
                        <span className="flex column flexStart" style={{margin: "0px"}}>kandidiere</span>
                      </Link>
                      <Link className="navbarItem ueberItem column endEnd" to="/politik">
                        Politik
                      </Link>
                      <Link className="navbarItem ueberItem column" to="/lebenslauf">
                        Lebenslauf
                      </Link>
                    </div>
                  </div>   */}
                  {/* <Link className="navbarItem flex row center" to="/blog">
                    Presse
                  </Link> */}
                  <div
                    id="frankfurt-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem frankfurtItem column endEnd" to="/wahlkreis">
                      Wahlkreis
                    </Link>
                    <div
                      id="frankfurt-dropdown"
                      className="flex row center dropdown"
                      style={{
                        display: "none"
                      }}
                    >
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/bockenheim">
                        Bockenheim
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/hausen">
                        Hausen
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/heddernheim">
                        Heddernheim
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/niederursel">
                        Niederursel
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/nordweststadt">
                        Nordweststadt
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/praunheim">
                        Praunheim
                      </Link>
                      <Link className="navbarItem wahlkreisItem column endEnd" to="/wahlkreis/rödelheim">
                        Rödelheim
                      </Link>
                    </div>
                  </div>
                  <div
                    id="kontakt-link"
                    className="flex row center"
                  >
                    <Link className="navbarItem kontaktItem column" to="/kontakt">
                      Kontakt
                    </Link>
                    <div
                      id="kontakt-dropdown"
                      className="flex row center dropdown"
                      style={{
                        display: "none"
                      }}
                    >
                      <Link className="navbarItem kontanktItem column endEnd" to="/kontakt">
                        Kontakt
                      </Link>
                      <Link className="navbarItem kontanktItem column endEnd" to="/pressebilder">
                        Pressebilder
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
  }
};

export default Navbar;
