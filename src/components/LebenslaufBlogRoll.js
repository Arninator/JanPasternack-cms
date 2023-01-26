import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class LebenslaufBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log(posts);

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article>
                <div 
                  className='flex row space-between full-width border'
                  
                >
                  <h3>{ (post.frontmatter.startdate) + (post.frontmatter.enddate != "00-00-0000" ? " - " + post.frontmatter.enddate : "")}</h3>
                  <div 
                    className="flex column center border"
                    style={{
                      marginLeft: "20%"
                    }}
                  >
                    <h1 className='border'>{ post.frontmatter.title }</h1>
                    <p className='border'>{ post.excerpt }</p>
                  </div>
                  
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

LebenslaufBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function LebenslaufBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query LebenslaufBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "lebenslauf-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  startdate
                  enddate
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <LebenslaufBlogRollTemplate data={data} count={count} />}
    />
  );
}
