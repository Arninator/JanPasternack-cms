import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { GatsbyImage } from "gatsby-plugin-image";
import $ from "jquery";

class TermineBlogRollTemplate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      columns: 3,
      frequency: 4,
      currentIndex: 0,
    };
  }

  componentWillMount() {

    if (typeof window !== "undefined" && window.location.href.includes("news")) {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 3,
          frequency: 3,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 7,
          frequency: 2,
        });
      } else {
        this.setState({
          columns: 10,
          frequency: 1,
        });
      }
    } else if (typeof window !== "undefined" && window.location.href.includes("termine")) {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 4,
          frequency: 99,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 8,
          frequency: 99,
        });
      } else {
        this.setState({
          columns: 12,
          frequency: 99,
        });
      }
    } else {
      if ( window.innerWidth > 992) {
        this.setState({
          columns: 3,
          frequency: 3,
        });
      } else if ( window.innerWidth > 700 ) {
        this.setState({
          columns: 7,
          frequency: 2,
        });
      } else {
        this.setState({
          columns: 10,
          frequency: 1,
        });
      }
    }
  }

  prev() {
    this.setState({
      currentIndex: this.state.currentIndex > 0 ? this.state.currentIndex - 1 : 0,
    })
    console.log(this.state);
  }
  next( max ) {
    this.setState({
      currentIndex: this.state.currentIndex < max - this.state.frequency ? this.state.currentIndex + 1 : max - this.state.frequency,
    })
    console.log(this.state);
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {this.state.frequency < 4 ? (
          <div
            className="flex-column flex-center invisible-button"
            style={{
              fontSize: "3vh",
              fontWeight: "400",
              color: `${ this.state.currentIndex == 0 ? "lightgrey" : "black"}`,
            }}
            onClick={ () => this.prev() }
          >
            &lt;
          </div>
        ) : ""}
        {posts.length > 0 ?
          posts.map(({ node: post }, index) => ( 
            index < ( this.state.currentIndex + this.state.frequency ) && index >= ( this.state.currentIndex ) ? (
            <div 
              className={`is-parent column is-${ this.state.columns }`} 
              key={post.id}
            >
              <article
                className={`blog-list-item tile is-child notification kachel ${
                  post.frontmatter.featuredpost ? 'is-featured' : ''
                }`}
              >
                <div style={{ fontWeight: "400" }}>{ post.frontmatter.title }<br /><br /><br /></div>
                <header className="flex-column flex-center">
                  <p 
                    className="post-meta blog-title"
                    style={{ 
                      fontWeight: "600",
                      fontSize: "24px"
                    }}
                  >
                    { post.frontmatter.title }
                  </p>
                  { post.frontmatter.featuredimage ? (
                    <div
                      className=""
                      style={{ 
                        margin: "0 0 2vh 0",
                      }}
                    >
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        }}
                      />
                    </div>
                  ) : null}
                  <p style={{ margin: "0vh", fontWeight: "400" }}>
                    { post.frontmatter.title }
                  </p>
                </header>
                <p style={{ fontWeight: "100"}} >
                  { post.excerpt }
                  <br />
                  <br />
                </p>
                <div className="flex-row flex-center">
                  <Link className="button" to={ post.fields.slug }>
                    Weiterlesen &rarr;
                  </Link>
                </div>
              </article>
            </div>
          ): (""))) : 
          <div 
            className="is-parent column is-12"
            style={{
              margin: "1vw",
              color: "darkolivegreen"
            }}
          >
            Aktuell stehen keine Termine an...
          </div>}
          {this.state.frequency < 4 ? (
          <div
            className="flex-column flex-center invisible-button"
            style={{
              fontSize: "3vh",
              fontWeight: "400",
              color: `${ this.state.currentIndex == posts.length - this.state.frequency ? "lightgrey" : "black"}`,
            }}
            onClick={ () => this.next( posts.length ) }
          >
            &gt;
          </div>
        ) : ""}
      </div>
    )
  }
}

TermineBlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}


export default function TermineBlogRoll() {

  // console.log("aktuellesBlogroll")
  return (
    <StaticQuery
      query={graphql`
        query TermineBlogRollQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "termine-page" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        layout: CONSTRAINED
                      )
                    }
                  }
                  eventlink
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <TermineBlogRollTemplate data={data} count={count} />}
    />
  );
}
