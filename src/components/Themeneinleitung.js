import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class ThemeneinleitungTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="" style={{ marginBottom: "3rem"}}>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article>

                <h1 className="is-flex is-flex-row" style={{ fontSize: "3rem", marginBottom: "2rem" }}>{ post.frontmatter.title }</h1>

                <div 
                  className="finerInnerHTML" 
                  // dangerouslySetInnerHTML={{__html: post.excerpt}}
                  style={{
                    fontWeight: "400"
                  }}
                >
                  {post.excerpt}
                </div>
                
              </article>
              {/* <div className="flex-row flex-center" style={{ margin: "2rem"}}>
                <Link className="plain-button" to={ post.fields.slug }>
                  Weiterlesen &rarr;
                </Link>
              </div> */}
            </div>
          ))}
      </div>
    )
  }
}

Themeneinleitung.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function Themeneinleitung() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query ThemeneinleitungQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "themeneinleitung-page" } } }
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
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ThemeneinleitungTemplate data={data} count={count} />}
    />
  );
}
