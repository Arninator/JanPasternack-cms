import React from "react";
import PropTypes from "prop-types";
import { indexOf, kebabCase, lastIndexOf } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const TermineBlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  locationname,
  locationlink,
  featuredimage
}) => {
  const PostContent = contentComponent || Content;
  const featImg = getImage(featuredimage) || featuredimage;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            {/* <p>{description}</p> */}
            <PostContent content={content} />
            <br />
            <GatsbyImage
              image={ featImg }
              alt="alt"
              style={{
                width: "100%",
                // height: "100%"
              }}
            />
            <br />
            <br />
            <br />

            <a 
              className="hover"
              href={ locationlink }
              target="_blank"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              { locationname }
            </a>
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

TermineBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  locationname: PropTypes.string,
  locationlink: PropTypes.string,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const TermineBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TermineBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={`Termine | ` + post.frontmatter.date}>
            <title>{`${post.frontmatter.date}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        locationname={post.frontmatter.locationname}
        locationlink={post.frontmatter.locationlink}
        featuredimage={post.frontmatter.featuredimage}
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
        description
        tags
        locationname
        locationlink
        featuredimage {
          childImageSharp {
            gatsbyImageData( quality: 100, layout: CONSTRAINED )
          }
        }
      }
    }
  }
`;
