import * as React from "react";

import Layout from "../../components/Layout";
// import PodcastBlogRoll from "../../components/PodcastBlogRoll";

export default class PodcastBlogIndexPage extends React.Component {
  render() {
;
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/podcast-cover.jpg')`,
            backgroundPosition: "0% 33%"
          }}
        >
          <h1 
            className="red-header"
            style={{
              marginTop: "10%"
            }}
          >
            Podcast
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <h2
              className="has-text-weight-bold is-size-4 flex"
              style={{
                // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                // backgroundColor: "transparent",
                color: "black",
                padding: "1rem",
                marginBottom: "8vh"
              }}
            >
              Podcast
            </h2>
            <div className="content">
              {/* <PodcastBlogRoll /> */}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
