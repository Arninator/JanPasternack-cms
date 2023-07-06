import * as React from "react";

import Layout from "../../components/Layout";
import PressebilderBlogRoll from "../../components/PressebilderBlogRoll";
import PressebilderCover from "../../components/PressebilderCover";

export default class PressebilderIndexPage extends React.Component {
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
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/20220504pj275.jpg')`,
            backgroundPosition: "0 33%"
          }}
        >
          <h1
            className="red-header"
            style={{
              marginRight: "50%",
            }}
          >
            Pressebilder
          </h1>
        </div> */}
        <PressebilderCover />
        <section className="section">
          <div className="container">
            <div className="content">
              <PressebilderBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
