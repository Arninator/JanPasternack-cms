import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class KontaktCoverTemplate extends React.Component {


  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      // <div>
      //   {posts.length > 0 ?
      //     posts.map(({ node: post }) => (
      //       <div className="full-width-image-container" style={{ maxHeight: "1vh"}}>
      //         { console.log(post)}
      //         <GatsbyImage image= { getImage(post.frontmatter.image) } alt="" height="5vh"/>
      //       </div>
      //     )): ""}
      // </div>
      <div>
        {posts.length > 0 ?
          posts.map(({ node: post }) => (
            <div
              id="kontakt-cover"
              className="full-width-image-container margin-top-0"
              style={{
                backgroundImage: `url("${ post.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src }")`,
                // backgroundPosition: "0% 91%",
                // height: "66vh"
              }}
            >
                <h1
                  className="red-header"
                  style={{
                    marginTop: "10%",
                  }}
                >
                   { post.frontmatter.title }
                </h1>
              </div>
          )): ""}
      </div>
    )
  }
}

 KontaktCover.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function KontaktCover() {

  return (
    <StaticQuery
      query={graphql`
        query KontaktCoverQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "kontakt-cover" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  image {
                    childImageSharp {
                      gatsbyImageData(
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
      render={(data, count) => < KontaktCoverTemplate data={data} count={count} />}
    />
  );
}
