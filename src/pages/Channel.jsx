import { useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import VideoList from "../components/VideoList";
import { getChannelById, videos } from "../data/videos";
import { usePlay } from "../context/PlayContext";
import "./SimplePages.css";

export default function Channel() {
  const { id } = useParams();
  const channel = getChannelById(id);
  const channelVideos = videos.filter((video) => video.channelId === id);
  const name = channel?.name || channelVideos[0]?.channel || "Channel";
  const { isSubscribed, toggleSubscribe } = usePlay();

  return (
    <>
      <div className="channel-banner">
        <Avatar name={name} size={84} />
        <div>
          <h1>{name}</h1>
          <p className="muted">
            {channel?.handle || `@${id}`} • {channelVideos.length} videos
          </p>
          <button className="signup-btn submit-btn" onClick={() => toggleSubscribe(id)}>
            {isSubscribed(id) ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </div>
      <VideoList videos={channelVideos} emptyText="This channel has no videos yet." />
    </>
  );
}
