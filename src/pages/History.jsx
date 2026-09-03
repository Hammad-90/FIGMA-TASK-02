import VideoList from "../components/VideoList";
import { usePlay } from "../context/PlayContext";

export default function History() {
  const { historyVideos } = usePlay();

  return (
    <>
      <h1 className="page-title">History</h1>
      <VideoList videos={historyVideos} emptyText="Your watch history is empty." />
    </>
  );
}
