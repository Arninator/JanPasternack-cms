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
            className="red-header"
            style={{
              marginRight: "50%",
            }}
          >
            Warum ich kandidiere...
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
