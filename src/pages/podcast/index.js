import * as React from "react";
// import $ from "jquery";

import Layout from "../../components/Layout";
import PodcastCover from "../../components/PodcastCover";
import PodcastBlogRoll from "../../components/PodcastBlogRoll";

export default class PodcastBlogIndexPage extends React.Component {

  componentDidMount() {
    let i = 1;
    let allEpisodes = [];
    let result = true;

    // while (result && i < 50) {
    //  var request = new XMLHttpRequest();  
    //   // console.log(request)
    //   request.open('GET', `https://gudezukunft.podigee.io/${ i }-new-episode/embed?context=website`, true);
    //   request.onreadystatechange = function(){
    //     // console.log("whatsGoingOn? " + request.status)
    //     if (request.readyState === 4){
    //         if (request.status === 200) {
    //           console.log(i);
    //           allEpisodes.push(i);
    //           i++;
    //         } else {
    //           result = false;
    //         }
    //     } else {
    //       result = false;
    //     }
    //   }
    //   request.send();
    // }
  }

  render() {
    return (
      <Layout>
        {/* <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/Twitter Header.jpg')`,
            backgroundPosition: "0% 91%",
            height: "66vh"
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
        </div> */}
        <PodcastCover />
        <section className="section">
          <div className="container">
            <PodcastBlogRoll />
            <br />
            <br />
            <br />
            <div id="asd" className="content">
              <p style={{ fontWeight: "400", fontSize: "1.5rem"}}>
                Hier gibt es die aktuelle Folge zum Reinhören:
              </p>
              <iframe src="https://open.spotify.com/embed/show/4MNRVmUE0Sx552xTez27Fn?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              {/* <iframe src="https://open.spotify.com/embed/episode/0vuVGNjbC6ZFMgxTGM4NdG?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe src="https://open.spotify.com/embed/episode/7HibTfW5zmjeNAyDmShV52?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              */}
              
              
              
              {/* <iframe id="actPodcast" src="https://gudezukunft.podigee.io/45-new-episode/embed?context=website" height="400px" width="100%"></iframe> */}
              
            </div>
            <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/1DkMPXzanSWh5F8PdO8rQQ?utm_source=generator&theme=0" width="100%" height="500vh" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div id="podcast-episodes">

            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
