import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const LebenslaufBlogPostTemplate = ({
  content,
  contentComponent,
  entries,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  // console.log(content);

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {/* {title} */}
              TITLE
            </h1>
            <PostContent content={ content } />
          </div>
        </div>
      </div>
    </section>
  );
};

LebenslaufBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // startdate: PropTypes.string,
  // enddate: PropTypes.string,
  entries: PropTypes.object,
};

const LebenslaufBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <LebenslaufBlogPostTemplate
        content={post.html}
        // content={post.frontmatter.intro.blurbs[0].body.html}
        contentComponent={HTMLContent}
        // contentComponent={post.frontmatter.intro.blurbs[0].body.html}
        // description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`Lebenslauf`}</title>
            <meta
              name="description"
              // content={`${post.frontmatter.description}`}
              content=''
            />
          </Helmet>
        }
        // tags={post.frontmatter.tags}
        // title={post.frontmatter.title}
        // startdate={post.frontmatter.startdate}
        // enddate={post.frontmatter.enddate ? post.frontmatter.enddate : ""}
        // intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

LebenslaufBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
  // data: PropTypes.object.isRequired,
};

export default LebenslaufBlogPost;

// OLD
export const pageQuery = graphql`
  query LebenslaufBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
    }
  }
`;
