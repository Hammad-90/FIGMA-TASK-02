import { Link } from "react-router-dom";
import VideoList from "../components/VideoList";
import { videos } from "../data/videos";
import { usePlay } from "../context/PlayContext";
import "./SimplePages.css";

export default function MyContent() {
  const { user } = usePlay();
  const mine = user ? videos.filter((video) => video.channel === user.name) : [];

  return (
    <>
      <div className="page-head">
        <h1 className="page-title">My content</h1>
        <Link className="ghost-btn" to="/">
          Upload video
        </Link>
      </div>
      <VideoList
        videos={mine}
        emptyText={
          user
            ? "You have not uploaded any videos yet."
            : "Log in to manage the videos you upload."
        }
      />
    </>
  );
}
