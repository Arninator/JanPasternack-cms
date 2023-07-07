import * as React from "react";

import Layout from "../../components/Layout";
import DatenschutzBlogRoll from "../../components/DatenschutzBlogRoll";

export default class DatenschutzBlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <DatenschutzBlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
