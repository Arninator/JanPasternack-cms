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
export const PressebilderCoverTemplate = ({
  content,
  contentComponent,
  info,
  title,
  subtitle,
  date,
  link,
  featuredImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(image);

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {/* { info ? <p style={{ fontWeight: "400", fontSize: "larger" }}>{ info }</p> : ""}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              { title }
            </h1>
            <h3>
              { subtitle }
            </h3> */}
            <GatsbyImage
              image={ image }
              alt="alt2"
              style={{
                width: "100%",
                margin: "2vh 0"
              }}
            />
            {/* <div className='finerInnerHTML' dangerouslySetInnerHTML={{ __html: content }}></div>*/}
            {/* <PostContent content={content} />
            <br /><br />
            <div><a href={ link } target="_blank">{ link }</a></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

PressebilderCoverTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // info: PropTypes.string,
  // title: PropTypes.string,
  // subtitle: PropTypes.string,
  image: PropTypes.object,
  // link: PropTypes.string,
  // helmet: PropTypes.object,
};

const PressebilderCover  = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PressebilderCoverTemplate
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
        // info={post.frontmatter.info}
        // title={post.frontmatter.title}
        // subtitle={post.frontmatter.subtitle}
        image={post.frontmatter.image}
        // link={post.frontmatter.link}
      />
    </Layout>
  );
};

PressebilderCover .propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PressebilderCover ;

export const pageQuery = graphql`
  query PressebilderCoverByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`;