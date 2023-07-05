import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class VorstellungBlogRollExcerptTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div 
        className="columns is-multiline" 
      >
        {posts.length > 0 ? 
          posts.map(({ node: post }) => (
            <div className="is-parent column is-12" key={post.id}>
              <article
                className={`blog-list-item tile is-child`}
              >
                <div className='finerInnerHTML' dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
              </article>
            </div>
          )) : 
          <div 
            className="is-parent column is-4"
            style={{
              margin: "1vw",
              color: "darkolivegreen"
            }}
          >
            Aktuell gibt es leider keine Neuigkeiten...
          </div>
        }
      </div>
    )
  }
}

VorstellungBlogRollExcerpt.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function VorstellungBlogRollExcerpt() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query VorstellungBlogRollExcerptQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "vorstellung-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 800)
              }
            }
          }
        }
      `}
      render={(data, count) => <VorstellungBlogRollExcerptTemplate data={data} count={count} />}
    />
  );
}