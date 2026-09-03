import VideoList from "../components/VideoList";
import { videos } from "../data/videos";

export default function Home() {
  return <VideoList videos={videos} />;
}

