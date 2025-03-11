import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { useLoading } from "../hooks/useLoading.jsx";
import { useContext } from "react";
import { searchContext } from "../Contexts/searchProvider.jsx";

export default function MainContainer() {
  const { state } = useContext(searchContext);
  const { data, loading } = useLoading(state.search);
  return (
    <>
      <main id="mainContainer">
        {state.counter == 0 && (
          <div className="iframeContainer">
            <p>Write a</p>
            <p>Channel's username</p>
            <p>in the bar!</p>
          </div>
        )}
        {loading && <div>{"Loading..."}</div>}
        {!loading && (
          <LiteYouTubeEmbed
            id={data.newVideoId}
            title={data.newchannelTitle}
          ></LiteYouTubeEmbed>
        )}
      </main>
    </>
  );
}
