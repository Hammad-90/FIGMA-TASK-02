import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { channels } from "../data/videos";
import { usePlay } from "../context/PlayContext";
import "./SimplePages.css";

export default function Subscribers() {
  const { isSubscribed, toggleSubscribe } = usePlay();

  return (
    <>
      <h1 className="page-title">Subscribers</h1>
      <div className="card-grid">
        {channels.map((channel) => (
          <div key={channel.id} className="info-card">
            <Link to={`/channel/${channel.id}`} className="channel">
              <Avatar name={channel.name} size={48} />
              <div>
                <h2>{channel.name}</h2>
                <p>
                  {channel.subscribers} subscribers • {channel.videos} videos
                </p>
              </div>
            </Link>
            <button className="ghost-btn" onClick={() => toggleSubscribe(channel.id)}>
              {isSubscribed(channel.id) ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
