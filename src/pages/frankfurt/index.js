import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";
import WahlkreisBlogRoll from "../../components/WahlkreisBlogRoll";
import OnTourBlogRoll from "../../components/OnTourBlogRoll";

export default class FrankfurtIndexPage extends React.Component {
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
          id="frankfurt-cover"
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('img/IMG_20201102_184803.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 red-header"
          >
            Frankfurt
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <WahlkreisBlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/wahlkreis">
                Weiterlesen&nbsp;&rarr;
              </Link>
            </div>
          </div>
        </section>
        <section className="section greyBackground">
          <div className="container">
            <div className="content">
              <OnTourBlogRoll/>
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/ontour">
                Weiterlesen&nbsp;&rarr;
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
