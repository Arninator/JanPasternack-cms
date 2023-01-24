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
  title,
  startdate,
  enddate,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  console.log(content);

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
            <PostContent content={ content } />
            {/* <div
              className="border"
              dangerouslySetInnerHTML={{ __html: intro.blurbs[0].body }} 
            >
            </div> */}
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4 className="border">Tags</h4>
                <ul className="taglist border">
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

LebenslaufBlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  // description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  startdate: PropTypes.string,
  enddate: PropTypes.string,
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
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              // content={`${post.frontmatter.description}`}
              content=''
            />
          </Helmet>
        }
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        startdate={post.frontmatter.startdate}
        enddate={post.frontmatter.enddate}
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

export const pageQuery = graphql`
  query LebenslaufBlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        startdate(formatString: "MMMM DD, YYYY")
        enddate(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
