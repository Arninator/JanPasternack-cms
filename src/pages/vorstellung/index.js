import * as React from "react";

import Layout from "../../components/Layout";
import VorstellungBlogRoll from "../../components/VorstellungBlogRoll";

export default class VorstellungIndexPage extends React.Component {
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
            backgroundImage: `url('/img/20220504pj209.jpg')`,
            backgroundPosition: "0 33%"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 column is-6"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              // backgroundColor: "#f40",
              // border: "1px solid red",
              color: "white",
              padding: "1rem",
            }}
          >
            Vorstellung
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <VorstellungBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
