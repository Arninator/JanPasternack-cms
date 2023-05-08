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
              <article
                id="kontakt-article"
                className="flex-row space-between full-width"
              >
                {/* {console.log(post.frontmatter.socialmedia)} */}
                <div className="finerInnerHTML largerInnerHTML" dangerouslySetInnerHTML={{__html: post.html}}></div>
                <div
                  id="social-media-container"
                  className="flex-row space-around full-width"
                  style={{
                    margin: "15% 0",
                    alignItems: "center",
                    flexWrap: "wrap"
                  }}
                >
                  { post.frontmatter.socialmedia.map(media => (
                    <div className="flex-row flex-center" style={{ fontWeight: "600", fontSize: "2vh"}}>
                      <a 
                        className="footer-item flex-column flex-center" 
                        href={ media.link }
                        target="_blank"
                        style={{
                          margin: "1vw",
                          fontSize: "3vh",
                          color: "white",
                          width: "4vh",
                          height: "4vh",
                          backgroundColor: "rgb(227, 0, 15)",
                          borderRadius: "50%"
                        }}
                      >                      
                        {console.log(post.frontmatter.socialmedia.length)}
                        <i className={`fa fa-${media.name.toLowerCase()}`}></i>
                      </a>
                      Jan auf { media.name }
                    </div>
                  ))}
                </div>
              </article>
            </div>
          ))}
          <Link 
            className="button column is-4 plain-button" 
            to="/pressebilder"
            style={{
              margin: "5vh auto"
            }}
          >
            Pressebilder &rarr;
          </Link>
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
