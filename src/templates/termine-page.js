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
  location,
  featuredImage,
  helmet,
}) => {
  const PostContent = contentComponent || Content;
  const image = getImage(featuredImage);

  return (
    <section className="section greyBackground" style={{ minHeight: "95vh"}}>
      {helmet || ""}
      { typeof window !== "undefined" && window.innerWidth > 700 ? (
      <div className="container content" style={{ marginTop: "5vh"}}>
        <div className="flex-row space-between whiteBackground" style={{ margin: "auto", padding: "5%"}}>
          <div className="flex-column space-between full-width">
            <div>
              <p className="subtitle is-size-3">{ date.substring(0,10) }<br/></p>
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{ title }<br/></h1>
              <div className='finerInnerHTML' dangerouslySetInnerHTML={{ __html: content }}></div>
              <br/>
              <br/>
              <br/>
            </div>
            <div>
              {eventlink ? <div className="flex-row space-between"><div>Link</div><div><a href={ eventlink } target="_blank">{ eventlink }</a></div></div> : ""}
              <div className="flex-row space-between"><div>Wo</div><div><a href={ location.link } target="_blank">{ location.name }</a></div></div>
              <div className="flex-row space-between"><div>Wann</div><div>{ date.substring(0,10) }&nbsp;{ date.substring(10) }</div></div>
            </div>
          </div>
          <div className="flex-column start-end full-width">
            <GatsbyImage
              className=""
              image={ image }
              alt="alt2"
              style={{
                margin: "0 0 8% 8%",
                aspectRatio: "0.6/ 0.5"
              }}
            />
          </div>
        </div>
      </div>) : (
      <div className="container content" style={{ marginTop: "5vh"}}>
        <div className="flex-row space-between whiteBackground" style={{ margin: "auto", padding: "5%"}}>
          <div className="flex-column space-between full-width">
            <div>
              <p className="subtitle is-size-3">{ date.substring(0,10) }<br/></p>
              <div className="flex-column start-end full-width">
                <GatsbyImage
                  className=""
                  image={ image }
                  alt="alt2"
                  style={{
                    margin: "0",
                    aspectRatio: "0.6/ 0.5"
                  }}
                />
            	</div>
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{ title }<br/></h1>
              <div className='finerInnerHTML' dangerouslySetInnerHTML={{ __html: content }}></div>
              <br/>
              <br/>
              <br/>
            </div>
            <div>
              {eventlink ? <div className="flex-row space-between"><div>Link</div><div><a href={ eventlink } target="_blank">{ eventlink }</a></div></div> : ""}
              <div className="flex-row space-between"><div>Wo</div><div><a href={ location.link } target="_blank">{ location.name }</a></div></div>
              <div className="flex-row space-between"><div>Wann</div><div>{ date.substring(0,10) }&nbsp;{ date.substring(10) }</div></div>
            </div>
          </div>
          
        </div>
      </div>
      )}
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
        location={post.frontmatter.location}
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
        date (formatString: "DD.MM.YYYY HH:mm")
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
            )
          }
        }
        location {
          name
          link
        }
      }
    }
  }
`;
