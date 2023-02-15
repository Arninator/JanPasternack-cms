import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class OnTourBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts);

    return (
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent" key={post.id}>
              <article>
                <h1>
                    { post.frontmatter.title }
                </h1>
                <div className='' dangerouslySetInnerHTML={{ __html: post.html }}></div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

OnTourBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function OnTourBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query OnTourBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "ontour-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                html
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 120
                        quality: 100
                        layout: CONSTRAINED
                      )

                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <OnTourBlogRollTemplate data={data} count={count} />}
    />
  );
}
