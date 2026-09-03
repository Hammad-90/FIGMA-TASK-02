import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LikedVideos from "./pages/LikedVideos";
import History from "./pages/History";
import MyContent from "./pages/MyContent";
import Collection from "./pages/Collection";
import Subscribers from "./pages/Subscribers";
import Support from "./pages/Support";
import Settings from "./pages/Settings";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/history" element={<History />} />
        <Route path="/my-content" element={<MyContent />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/subscribers" element={<Subscribers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
