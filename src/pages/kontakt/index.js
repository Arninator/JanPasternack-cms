import * as React from "react";

import Layout from "../../components/Layout";
import KontaktBlogRoll from "../../components/KontaktBlogRoll";

export default class KontaktIndexPage extends React.Component {
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
            backgroundPosition: "0% 100%",
          }}
        >
          
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1
                className="has-text-weight-bold is-size-1 column is-9"
                style={{
                  color: "rgb(227, 0, 15)",
                }}
              >
                Kontakt
              </h1>
              <KontaktBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
