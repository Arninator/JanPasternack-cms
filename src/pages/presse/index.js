import * as React from "react";

import Layout from "../../components/Layout";
import PresseBlogRoll from "../../components/PresseBlogRoll";

export default class PresseIndexPage extends React.Component {
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
            backgroundImage: `url('/img/20220504pj156.jpg')`,
            backgroundPosition: "0% 45%",
            height: "45vh"
          }}
        >
          <h1
            className="red-header"
            style={{
              // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              // color: "white",
              padding: "1rem",
              marginLeft: "33%",
            }}
          >
            Pressemitteilungen
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <PresseBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
