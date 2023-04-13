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

  let currHeight = 0;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="column is-12">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <div 
            className="flex-row greyBackground"
            style={{
              flexWrap: "wrap"
            }}>
            {presseImages.map((foto, index) => (
              foto.height < foto.width ?
              <div
                id={ `container-${index}` }
                className="flex-row flex-center"
                style={{
                  backgroundImage: `url(${foto.images.fallback.src})`,
                  width: `45vw`,
                  height: `${foto.height * 45}vw`,
                  // maxHeight: `${foto.height * 100}vh`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  margin: "3vw auto",
                }}
              >
                <a 
                  className="download-button flex-row flex-center" 
                  href={ foto.images.fallback.src }
                  download
                  style={{
                    width: "100%",
                    height: "100%",
                    fontSize: "4vh",
                    fontWeight: "100"
                  }}
                >
                  <i className="fa fa-download"></i>
                  {/* &nbsp;&nbsp;&rarr;&nbsp;download */}
                </a>
              </div> 
              :
              <div
                id={ `container-${index}` }
                className="flex-row flex-center"
                style={{
                  backgroundImage: `url(${foto.images.fallback.src})`,
                  width: `24vw`,
                  height: `${foto.height * 24}vw`,
                  // maxHeight: `${foto.height * 100}vh`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  margin: "4vw auto",
                }}
              >
                <a 
                  className="download-button flex-row flex-center" 
                  href={ foto.images.fallback.src }
                  download
                  style={{
                    width: "100%",
                    height: "100%",
                    fontSize: "4vh",
                    fontWeight: "100"
                  }}
                >
                  <i className="fa fa-download"></i>
                  {/* &nbsp;&nbsp;&rarr;&nbsp;download */}
                </a>
              </div> 
              // /* <GatsbyImage 
              //     id={`image-${index}`}
              //     className="after"
              //     image= { foto }
              //     alt= { intro.blurbs[index].alt }
                  
              //     style={{
              //     width: "100%",
              //     height: "auto",
              //     }}

              //     onMouseEnter={() => {
              //       currHeight = $("#image-" + index).offset().top + $("#image-" + index).height();
              //       console.log("after " + currHeight);
              //     }}
              //     onMouseLeave={() => {
              //       $("#image-" + index).removeClass("after")                    
              //     }}
              //   /> */             
            ))}
            <PostContent content={content} />
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
