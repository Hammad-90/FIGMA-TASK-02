import VideoList from "../components/VideoList";
import { usePlay } from "../context/PlayContext";

export default function LikedVideos() {
  const { likedVideos } = usePlay();

  return (
    <>
      <h1 className="page-title">Liked Videos</h1>
      <VideoList videos={likedVideos} emptyText="You have not liked any videos yet." />
    </>
  );
}

