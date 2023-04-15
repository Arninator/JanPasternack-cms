import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import "../components/style.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import $ from "jquery";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Helmet>
        <html lang="de" />
        <title>{ title }</title>
        <meta name="description" content={ description } />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* INSTAGRAM */}
        {/* <script async src="//www.instagram.com/embed.js"></script> */}
      </Helmet>
      <div 
        id="placeholder"
        style={{
          height: "5vh"
        }}
        onClick={ () =>  $("#open-burger").css("display", "none") }
      >
      </div>
      <Navbar />
      <div
        style={{
          minHeight: "95vh"
        }}
        onClick={ () =>  $("#open-burger").css("display", "none") }
      >
        { children }
      </div>
      <div
        onClick={ () =>  $("#open-burger").css("display", "none") }
      >
        <Footer />
      </div>
    </div>
  );
};

export default TemplateWrapper;
