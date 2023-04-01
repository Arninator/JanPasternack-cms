import React from "react";
import PropTypes from "prop-types";
import { indexOf, kebabCase, lastIndexOf } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";

import "../components/style.css";

// eslint-disable-next-line
export const TermineBlogPostTemplate = ({
  content,
  contentComponent,
  date,
  eventlink,
  tags,
  title,
  helmet,
  location,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;
  const featImg = getImage(featuredimage) || featuredimage;

  return (
    <section 
      className="section flex row center greyBackground"
      style={{
        height: "90vh",
      }}
    >
      {helmet || ""}
      <div 
        className="container content whiteBackground"
        style={{
          padding: "5vw",
          border: "1px solid lightgrey",
        }}
      >
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="flex row space-between ">
              <div 
                className="flex column endEnd"
                style={{
                  height: "100%",
                }}
              >
                <h3>{date}</h3>
                <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{eventlink ? "Link: " : ""}<a className="link" href={ eventlink ? eventlink : ""} target="_blank">{ eventlink ? eventlink : ""}</a></p>
                <PostContent content={content} />
                <br />
                Ort:&nbsp;
                <a 
                  className="link"
                  href={ location.link }
                  target="_blank"
                >
                  { location.name }
                </a>
              </div>
              <div 
                style={{
                  maxWidth: "20vw",
                }}
              >
                <GatsbyImage
                  image={ featImg }
                  alt="alt"
                />
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TermineBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  date: PropTypes.string,
  eventlink: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  location: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const TermineBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TermineBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate={`Termine | ` + post.frontmatter.date}>
            <title>{`${post.frontmatter.date}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        location={post.frontmatter.location}
        featuredimage={post.frontmatter.featuredimage}
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
        date(formatString: "MMMM DD, YYYY")
        title
        eventlink
        tags
        location {
          name
          link
        }
        featuredimage {
          childImageSharp {
            gatsbyImageData( quality: 100, layout: CONSTRAINED )
          }
        }
      }
    }
  }
`;
