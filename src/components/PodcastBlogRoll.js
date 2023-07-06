import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class PodcastBlogRollTemplate extends React.Component {

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article>

                <h1 className="is-flex is-flex-row" style={{ fontSize: "3rem", marginBottom: "2rem", fontWeight: "600"}}>{ post.frontmatter.title }</h1>

                <div 
                  className="finerInnerHTML" 
                  dangerouslySetInnerHTML={{__html: post.excerpt}}
                  style={{
                    fontWeight: "400"
                  }}
                >
                  {/* {post.excerpt} */}
                </div>
                
              </article>
            </div>
          ))} 
      </div>
    )
  }
}

PodcastBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function PodcastBlogRoll() {

  // console.log("podcastBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query PodcastBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "podcast-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100000)
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
      render={(data, count) => <PodcastBlogRollTemplate data={data} count={count} />}
    />
  );
}
