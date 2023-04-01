import * as React from "react";

import Layout from "../../components/Layout";
import OnTourBlogRoll from "../../components/OnTourBlogRoll";

export default class OnTourIndexPage extends React.Component {
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
            backgroundImage: `url('/img/20220504pj230.jpg')`,
            backgroundPosition: "0 25%"
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 red-header"
            style={{
            }}
          >
            Jan unterwegs
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <OnTourBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
