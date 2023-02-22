import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class KontaktBlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark


    return (
      <div className="">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="" key={post.id}>
              <article>
                {/* {console.log(post.frontmatter.socialmedia)} */}
                <div dangerouslySetInnerHTML={{__html: post.html}}></div>
                <div
                  className="flex-column"
                >
                  {post.frontmatter.socialmedia.map(media => (
                    <a 
                      className="" 
                      href={ media.link }
                      target="_blank"
                    >
                      <i className={`fa fa-${media.name.toLowerCase()}`}></i>
                    </a>
                  ))}
                </div>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

KontaktBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function KontaktBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query KontaktBlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "kontakt-page" } } }
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
                  socialmedia {
                    name
                    link
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <KontaktBlogRollTemplate data={data} count={count} />}
    />
  );
}
