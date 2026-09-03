import VideoCard from "./VideoCard";
import "./VideoList.css";

export default function VideoList({ videos, emptyText = "No videos yet." }) {
  if (!videos.length) {
    return <div className="empty-state">{emptyText}</div>;
  }

  return (
    <div className="video-list">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
