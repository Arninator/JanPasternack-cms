import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ThemenCoverTemplate extends React.Component {


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
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url("${ post.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src }")`,
                  backgroundPosition: "50% 0%"
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

 ThemenCover.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function ThemenCover() {

  return (
    <StaticQuery
      query={graphql`
        query ThemenCoverQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "themen-cover" } } }
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
      render={(data, count) => < ThemenCoverTemplate data={data} count={count} />}
    />
  );
}
