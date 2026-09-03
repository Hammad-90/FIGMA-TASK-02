import { createContext, useContext, useMemo, useState } from "react";
import { videos } from "../data/videos";

const PlayContext = createContext(null);

export function PlayProvider({ children }) {
  const [user, setUser] = useState(null);
  const [likedIds, setLikedIds] = useState(["v1", "v3", "v5"]);
  const [savedIds, setSavedIds] = useState(["v2", "v4", "v7"]);
  const [historyIds, setHistoryIds] = useState(["v2", "v3", "v4", "v1"]);
  const [subscribedIds, setSubscribedIds] = useState(["david-lee"]);

  const value = useMemo(() => {
    const byId = (ids) =>
      ids.map((id) => videos.find((video) => video.id === id)).filter(Boolean);

    return {
      user,
      login: (nextUser) => setUser(nextUser),
      logout: () => setUser(null),
      likedVideos: byId(likedIds),
      savedVideos: byId(savedIds),
      historyVideos: byId(historyIds),
      isLiked: (id) => likedIds.includes(id),
      isSaved: (id) => savedIds.includes(id),
      isSubscribed: (id) => subscribedIds.includes(id),
      toggleLike: (id) =>
        setLikedIds((current) =>
          current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]
        ),
      toggleSave: (id) =>
        setSavedIds((current) =>
          current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]
        ),
      toggleSubscribe: (id) =>
        setSubscribedIds((current) =>
          current.includes(id) ? current.filter((item) => item !== id) : [id, ...current]
        ),
      addToHistory: (id) =>
        setHistoryIds((current) => [id, ...current.filter((item) => item !== id)].slice(0, 20)),
    };
  }, [user, likedIds, savedIds, historyIds, subscribedIds]);

  return <PlayContext.Provider value={value}>{children}</PlayContext.Provider>;
}

export function usePlay() {
  const context = useContext(PlayContext);
  if (!context) {
    throw new Error("usePlay must be used inside PlayProvider");
  }
  return context;
}
