import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ThemenBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <section>
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article>

                <h1 className="is-flex is-flex-row" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>{ post.frontmatter.title }</h1>

                <div
                  // className="finerInnerHTML"
                  dangerouslySetInnerHTML={{__html: post.frontmatter.description}}
                  style={{
                    fontWeight: "400",
                    fontSize: "1.2rem"
                  }}
                >
                  {/* {post.excerpt} */}
                </div>

              </article>
              <div className="flex-row flex-center" style={{ margin: "2rem"}}>
                <Link className="plain-button" to={ post.fields.slug }>
                  Weiterlesen &rarr;
                </Link>
              </div>
            </div>
          ))}
      </div></section>
    )
  }
}

ThemenBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ThemenBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query ThemenBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "themen-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 500)
                html
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ThemenBlogRollTemplate data={data} count={count} />}
    />
  );
}
