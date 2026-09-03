import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Avatar from "../components/Avatar";
import { getVideoById, videos } from "../data/videos";
import { usePlay } from "../context/PlayContext";
import "./Watch.css";

export default function Watch() {
  const { id } = useParams();
  const video = getVideoById(id);
  const { isLiked, isSaved, isSubscribed, toggleLike, toggleSave, toggleSubscribe, addToHistory } =
    usePlay();

  useEffect(() => {
    if (video) addToHistory(video.id);
  }, [video, addToHistory]);

  if (!video) {
    return <div className="empty-state">This video is not available.</div>;
  }

  const related = videos.filter((item) => item.id !== video.id).slice(0, 6);

  return (
    <div className="watch-layout">
      <section>
        <div className="player">
          <img src={video.thumbnail} alt="" />
          <button className="play-overlay" aria-label="Play video">
            ▶
          </button>
        </div>
        <h1>{video.title}</h1>
        <div className="watch-row">
          <Link to={`/channel/${video.channelId}`} className="channel">
            <Avatar name={video.channel} size={40} />
            <span>
              <strong>{video.channel}</strong>
              <small>1.2M subscribers</small>
            </span>
          </Link>
          <div className="watch-actions">
            <button
              className={isSubscribed(video.channelId) ? "on" : ""}
              onClick={() => toggleSubscribe(video.channelId)}
            >
              {isSubscribed(video.channelId) ? "Subscribed" : "Subscribe"}
            </button>
            <button className={isLiked(video.id) ? "on" : ""} onClick={() => toggleLike(video.id)}>
              {isLiked(video.id) ? "Liked" : "Like"}
            </button>
            <button>Share</button>
            <button className={isSaved(video.id) ? "on" : ""} onClick={() => toggleSave(video.id)}>
              {isSaved(video.id) ? "Saved" : "Save"}
            </button>
          </div>
        </div>
        <div className="watch-desc">
          <p>
            {video.views} • {video.uploaded} • {video.category}
          </p>
          <p>{video.description}</p>
        </div>
      </section>

      <aside className="related">
        <h2>Up next</h2>
        {related.map((item) => (
          <Link key={item.id} to={`/watch/${item.id}`} className="related-item">
            <img src={item.thumbnail} alt="" />
            <div>
              <h3>{item.title}</h3>
              <p>{item.channel}</p>
              <p>
                {item.views} • {item.uploaded}
              </p>
            </div>
          </Link>
        ))}
      </aside>
    </div>
  );
}
