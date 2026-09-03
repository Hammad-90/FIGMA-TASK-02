import VideoList from "../components/VideoList";
import { usePlay } from "../context/PlayContext";

export default function Collection() {
  const { savedVideos } = usePlay();

  return (
    <>
      <h1 className="page-title">Collection</h1>
      <p className="muted" style={{ marginBottom: 16 }}>
        Videos you saved to watch later.
      </p>
      <VideoList videos={savedVideos} emptyText="Your collection is empty." />
    </>
  );
}
