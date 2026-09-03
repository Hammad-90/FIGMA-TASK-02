import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import "./VideoCard.css";

export default function VideoCard({ video }) {
  return (
    <article className="video-card">
      <Link to={`/watch/${video.id}`} className="thumb-wrap">
        <img src={video.thumbnail} alt="" />
        <span className="duration">{video.duration}</span>
      </Link>

      <div className="video-meta">
        <Link to={`/watch/${video.id}`}>
          <h2>{video.title}</h2>
        </Link>
        <p className="video-stats">
          {video.views} <span className="dot">•</span> {video.uploaded}
        </p>
        <Link to={`/channel/${video.channelId}`} className="channel">
          <Avatar name={video.channel} />
          <span>{video.channel}</span>
        </Link>
        <p className="video-desc">{video.description}</p>
      </div>
    </article>
  );
}
