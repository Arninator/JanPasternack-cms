import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";
import VorstellungBlogRoll from "../../components/VorstellungBlogRoll";
import VorstellungBlogRollExcerpt from "../../components/VorstellungBlogRollExcerpt";
import LebenslaufBlogRoll from "../../components/LebenslaufBlogRoll";
import LebenslaufBlogRollExcerpt from "../../components/LebenslaufBlogRollExcerpt";

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
            backgroundPosition: "0 25%",
          }}
        >
          <h1
            className="red-header"
            style={{
              marginLeft: "33%",
            }}
          >
            Über mich
          </h1>
        </div>
        {/* <section className="section whiteBackground fade-in">
          <div className="container">

          </div>
        </section> */}
        <section className="section whiteBackground fade-in">
          <div className="container">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-2 flex-row flex-center">
                Warum ich für den Hessischen Landtag kandidiere
              </h2>
              <VorstellungBlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/vorstellung">
                Weiterlesen... &rarr;
              </Link>
            </div>
          </div>
        </section>
        <section className="section greyBackground fade-in">
          <div className="container">
            <div className="content">
              <h2 className="has-text-weight-semibold is-size-2 flex-row flex-center">
                Lebenslauf
              </h2>
              <LebenslaufBlogRollExcerpt/>
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/lebenslauf">
                Weiterlesen&nbsp;&rarr;
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}