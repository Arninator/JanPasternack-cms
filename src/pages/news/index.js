import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";
import AktuellesBlogRoll from "../../components/AktuellesBlogRoll";
import TermineBlogRoll from "../../components/TermineBlogRoll";
import NewsCover from "../../components/NewsCover";


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
        <NewsCover />
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/20220504pj181.jpg')`,
            backgroundPosition: "0% 25%"
          }}
        >
          <h1
            className="red-header"
            style={{
              marginTop: "10%",
            }}
          >
            News
          </h1>
        </div> */}
        <section className="section whiteBackground">
          <div className="container">
            <h2 className="has-text-weight-semibold is-size-2 flex-row flex-center">Aktuelles & Presse</h2><br /><br />
            <div className="content">
              <AktuellesBlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/aktuelles">
                Mehr... &rarr;
              </Link>
            </div>
          </div>
        </section>
        {/* <section className="section greyBackground">
          <div className="container">
            <h2 className="has-text-weight-semibold is-size-2 flex-row flex-center">Presse</h2>
            <div className="content">
              <PresseBlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/presse">
                Mehr... &rarr;
              </Link>
            </div>
          </div>
        </section> */}
        <section className="section greyBackground">
          <div className="container">
          <h2 className="has-text-weight-semibold is-size-2 flex-row flex-center">Nächste Termine</h2><br /><br />
            <div className="content">
              <TermineBlogRoll />
            </div>
            <div className="column is-12 has-text-centered">
              <Link className="plain-button" to="/termine">
                Alle ansehen &rarr;
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}