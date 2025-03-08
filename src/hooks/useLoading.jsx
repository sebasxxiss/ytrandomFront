import { useContext, useEffect, useState } from "react";
import { searchContext } from "../Contexts/searchProvider.jsx";

function getRandomVideo(newData) {
  const randomIndex = Math.floor(Math.random() * newData.videos.length);
  const newVideo = newData.videos[randomIndex];
  const newchannelTitle = newVideo.snippet.channelTitle;
  const newVideoId = newVideo.snippet.resourceId.videoId;
  return { newchannelTitle, newVideoId };
}
async function fetchNewData(userName) {
  if (
    localStorage.getItem("fetch") == null ||
    localStorage.getItem("fetch") == undefined
  ) {
    const raw = await fetch(
      `https://random-yt-video-picker-production.up.railway.app/api/videos?userName=${userName}`
    );
    const newData = await raw.json();
    localStorage.setItem("fetch", JSON.stringify(newData));
  }
}
export function useLoading(userName) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { state } = useContext(searchContext);
  useEffect(() => {
    (async () => {
      setLoading(() => true);
      if (localStorage.getItem("fetch") == null && state.search != "") {
        await fetchNewData(userName);
        const { newchannelTitle, newVideoId } = getRandomVideo(
          JSON.parse(localStorage.getItem("fetch"))
        );
        setData({ newchannelTitle, newVideoId });
      }
      setLoading(() => false);
    })();
  }, [state.search]);
  useEffect(() => {
    (async () => {
      if (localStorage.getItem("fetch") == null) {
        return;
      } else {
        const { newchannelTitle, newVideoId } = getRandomVideo(
          JSON.parse(localStorage.getItem("fetch"))
        );
        setData({ newchannelTitle, newVideoId });
      }
    })();
  }, [state.counter]);
  return { data, loading };
}
