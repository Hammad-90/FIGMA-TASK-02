import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import { searchVideos } from "../data/videos";

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const results = useMemo(() => searchVideos(query), [query]);

  return (
    <>
      <h1 className="page-title">Search results for “{query}”</h1>
      <VideoList videos={results} emptyText="No videos matched your search." />
    </>
  );
}
