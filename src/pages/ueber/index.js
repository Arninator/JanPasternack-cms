import * as React from "react";

import Layout from "../../components/Layout";
import VorstellungBlogRoll from "../../components/VorstellungBlogRoll";
import PolitikBlogRoll from "../../components/PolitikBlogRoll";
import LebenslaufBlogRoll from "../../components/LebenslaufBlogRoll";

export default class UeberIndexPage extends React.Component {
  componentDidMount() {

    if (document.location.href.includes("blog")) {
      for (let i = 0; i < document.getElementsByClassName("is-4").length; i++) {
        document.getElementsByClassName("is-4")[i].classList.add("is-12");
      }
    }
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/IMG-20220505-WA0001.jpg')`,
            backgroundPosition: "0 25%"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              // backgroundColor: "#f40",
              color: "white",
              padding: "1rem",
            }}
          >
            Über
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <VorstellungBlogRoll />
            </div>
          </div>
          <div className="container">
            <div className="content">
              <PolitikBlogRoll />
            </div>
          </div>
          <div className="container border">
            <div className="content">
              <LebenslaufBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
