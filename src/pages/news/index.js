import * as React from "react";

import Layout from "../../components/Layout";
import AktuellesBlogRoll from "../../components/AktuellesBlogRoll";
import PresseBlogRoll from "../../components/PresseBlogRoll";
import TermineBlogRoll from "../../components/TermineBlogRoll";

export default class NewsIndexPage extends React.Component {
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
            backgroundImage: `url('/img/20220504pj181.jpg')`,
            backgroundPosition: "0% 25%"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "rgb(277, 0, 15)",
              color: "white",
              padding: "1rem",
            }}
          >
            News
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <h2>Aktuelles</h2>
            <div className="content">
              <AktuellesBlogRoll />
            </div>
            <h2>Presse</h2>
            <div className="content">
              <PresseBlogRoll />
            </div>
            <h2>Termine</h2>
            <div className="content">
              <TermineBlogRoll />
            </div>
          </div>
        </section>
       
      </Layout>
    );
  }
}
