import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image";

// eslint-disable-next-line
export const TermineBlogPostTemplate = ({
  content,
  contentComponent,
  title,
  date,
  eventlink,
  featuredImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredImage);

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <p style={{ fontWeight: "400", fontSize: "larger" }}>{ title }</p>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              { title }
            </h1>
            <h3>
              { title }
            </h3>
            <GatsbyImage
              image={ image }
              alt="alt2"
              style={{
                width: "100%",
                margin: "2vh 0"
              }}
            />
            <div className='finerInnerHTML' dangerouslySetInnerHTML={{ __html: content }}></div>
            {/* <PostContent content={content} /> */}
            <br /><br />
            <div>Lesen Sie den Artikel auf <a href={ eventlink } target="_blank">{ eventlink }</a></div>
          </div>
        </div>
      </div>
    </section>
  );
};

TermineBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  featuredImage: PropTypes.object,
  eventlink: PropTypes.string,
  helmet: PropTypes.object,
};

const TermineBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TermineBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={``}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        featuredImage={post.frontmatter.featuredimage}
        eventlink={post.frontmatter.eventlink}
      />
    </Layout>
  );
};

TermineBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default TermineBlogPost;

export const pageQuery = graphql`
  query TermineBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
            )
          }
        }
        eventlink
      }
    }
  }
`;
