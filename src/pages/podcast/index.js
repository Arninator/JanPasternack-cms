import * as React from "react";
import $ from "jquery";

import Layout from "../../components/Layout";
// import PodcastBlogRoll from "../../components/PodcastBlogRoll";

export default class PodcastBlogIndexPage extends React.Component {

  componentDidMount() {
    let i = 1;
    let allI = [];
    let result = $.ajax({
      type: 'HEAD',
      url: `https://gudezukunft.podigee.io/${ i }-new-episode/embed?context=website`,
      success: function() {
          return true
      },
      error: function() {
          return false
      }
    })
    
    console.log(result);
    allI.map(( number ) => {
      $("#podcast-episodes").append(`<iframe id="actPodcast" src="https://gudezukunft.podigee.io/${ number }-new-episode/embed?context=website" height="" width="100%"></iframe>`)
    })
  }

  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/Twitter Header.jpg')`,
            backgroundPosition: "0% 33%"
          }}
        >
          <h1 
            className="red-header"
            style={{
              marginTop: "10%"
            }}
          >
            Podcast
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <h2
              className="has-text-weight-bold is-size-4 flex"
              style={{
                // boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                // backgroundColor: "transparent",
                color: "black",
                padding: "1rem",
                marginBottom: "8vh"
              }}
            >
              Podcast
            </h2>
            
            <div id="asd" className="content" style={{ height: ""}}>
              {/* <PodcastBlogRoll /> */}
              <iframe src="https://open.spotify.com/embed/show/4MNRVmUE0Sx552xTez27Fn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe src="https://open.spotify.com/embed/episode/0vuVGNjbC6ZFMgxTGM4NdG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe src="https://open.spotify.com/embed/episode/7HibTfW5zmjeNAyDmShV52?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              
              
              
              
              <iframe id="actPodcast" src="https://gudezukunft.podigee.io/45-new-episode/embed?context=website" height="150%" width="100%"></iframe>
              
            </div>
            <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/1DkMPXzanSWh5F8PdO8rQQ?utm_source=generator&theme=0" width="100%" height="500vh" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div id="podcast-episodes">

            </div>
            {/* {  
            $.ajax({
                type: 'HEAD',
                url: `https://gudezukunft.podigee.io/${ i }-new-episode/embed?context=website`,
                success: function() {
                    return (
                        <iframe src={`https://gudezukunft.podigee.io/${ i }-new-episode/embed?context=website`} border="0" height="100" width="100%"></iframe>
                    )
                },
                error: function() {
                    return (
                      ""
                    )
                }
              })
            } */}
          </div>
        </section>
      </Layout>
    );
  }
}
