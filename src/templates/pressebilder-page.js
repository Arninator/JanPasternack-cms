import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Content, { HTMLContent } from "../components/Content";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import $ from "jquery";

// eslint-disable-next-line
export const PressebilderBlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  image,
  intro,
}) => {
  const PostContent = contentComponent || Content;
  const presseImages = [];
  for ( let i = 0; i < intro.blurbs.length; i++) presseImages.push(getImage(intro.blurbs[i].image) || intro.blurbs[i].image);
  // for (let i = 0; i < intro.blurbs.length; i++) presseImages.ad
  console.log("Array: " + presseImages);

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            {/* <Features gridItems={intro.blurbs} /> */}
            {/* <GatsbyImage 
              image= { presseImages[0] }
              alt= "{ presseImages[0] }"
              style={{
              // height: "50vh",
              border: "1px solid red"
              }}
            /> */}
            {/* {console.log("mapping: " + presseImages[0])} */}
            {presseImages.map((foto, index) => (
              <div
                className="border"
                style={{
                  backgroundImage: `url(${foto.images.fallback.src})`,
                  backgroundPosition: "cover",
                  width: "",
                  // height: "100%",
                  // margin: "3%",
                }}

                onMouseEnter={() => console.log(foto.images.fallback.src)}
                // onMouseEnter={() => $("#image-" + index).addClass("border")}
                onMouseLeave={() => $("#image-" + index).removeClass("border")}
              >
                {/* <GatsbyImage 
                  id={`image-${index}`}
                  className="downloadable"
                  image= { foto }
                  alt= { intro.blurbs[index].alt }
                  
                  style={{
                  // height: "50vh",
                  // border: "1px solid red"
                  // width: "100%",
                  // height: "75vh",
                  width: "100%",
                  // height: "content",
                  margin: "3%",
                  }}

                  onMouseEnter={() => $("#image-" + index).addClass("border")}
                  onMouseLeave={() => $("#image-" + index).removeClass("border")}
                /> */}
                <div
                  style={{
                    position: "absolute",
                    // alignSelf: "center"
                  }}>
                  <a 
                    className="footer-item" 
                    href=""
                    target="_blank"
                  >
                    <i className="fa fa-download"></i>
                  </a>
                </div>
              </div>
            ))}
            <PostContent content={content} />
            {/* {tags && tags.length ? (
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
            ) : null} */}
          </div>
        </div>
      </div>
    </section>
  );
};

PressebilderBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const PressebilderBlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PressebilderBlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        intro={post.frontmatter.intro}
      />
    </Layout>
  );
};

PressebilderBlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default PressebilderBlogPost;

export const pageQuery = graphql`
  query PressebilderBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        intro {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(quality: 100, layout: FULL_WIDTH)
              }
            }
            alt
          }
        }
      }
    }
  }
`;
