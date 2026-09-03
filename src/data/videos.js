export const videos = [
  {
    id: "v1",
    title: "Best way to learn Socket IO | complex chat IO",
    views: "100K Views",
    uploaded: "18 hours ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
    duration: "14:22",
    category: "Programming",
    thumbnail: "/thumbs/socket.jpg",
  },
  {
    id: "v2",
    title: "Google and Pieces dropped some interesting updates",
    views: "100K Views",
    uploaded: "18 hours ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
    duration: "09:41",
    category: "Tech News",
    thumbnail: "/thumbs/pieces.jpg",
  },
  {
    id: "v3",
    title: "Flutter Dart Case Study by @getpieces | Engineering side",
    views: "100K Views",
    uploaded: "18 hours ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
    duration: "21:05",
    category: "Mobile",
    thumbnail: "/thumbs/flutter.jpg",
  },
  {
    id: "v4",
    title: "Is this the best monitor for coders? | BenQ GW3290QT | Eye-Care Programming Monitor",
    views: "100K Views",
    uploaded: "18 hours ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
    duration: "12:18",
    category: "Hardware",
    thumbnail: "/thumbs/monitor.jpg",
  },
  {
    id: "v5",
    title: "This will change DSA and Leetcode preparation forever | Pieces for developers",
    views: "100K Views",
    uploaded: "18 hours ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis egestas justo adipiscing integer.",
    duration: "16:54",
    category: "Career",
    thumbnail: "/thumbs/dsa.jpg",
  },
  {
    id: "v6",
    title: "React Router v6 in 20 minutes | Nested routes and layouts",
    views: "64K Views",
    uploaded: "2 days ago",
    channel: "David Lee",
    channelId: "david-lee",
    description:
      "Build multi-page React apps with reusable layouts, nested routes, and search params.",
    duration: "20:11",
    category: "Programming",
    thumbnail: "/thumbs/router.jpg",
  },
  {
    id: "v7",
    title: "Dark UI design tips for developer products",
    views: "41K Views",
    uploaded: "4 days ago",
    channel: "Ava Chen",
    channelId: "ava-chen",
    description:
      "Contrast, spacing, and accent color choices that keep dark dashboards readable.",
    duration: "08:33",
    category: "Design",
    thumbnail: "/thumbs/ui.jpg",
  },
  {
    id: "v8",
    title: "Build a reusable component library in React",
    views: "88K Views",
    uploaded: "1 week ago",
    channel: "Ava Chen",
    channelId: "ava-chen",
    description:
      "Buttons, cards, inputs, and layout primitives you can reuse across every page.",
    duration: "18:47",
    category: "Programming",
    thumbnail: "/thumbs/components.jpg",
  },
];

export const channels = [
  {
    id: "david-lee",
    name: "David Lee",
    handle: "@davidlee",
    subscribers: "1.2M",
    videos: 128,
  },
  {
    id: "ava-chen",
    name: "Ava Chen",
    handle: "@avachen",
    subscribers: "210K",
    videos: 54,
  },
];

export function getVideoById(id) {
  return videos.find((video) => video.id === id);
}

export function getChannelById(id) {
  return channels.find((channel) => channel.id === id);
}

export function searchVideos(query) {
  const q = query.trim().toLowerCase();
  if (!q) return videos;
  return videos.filter(
    (video) =>
      video.title.toLowerCase().includes(q) ||
      video.channel.toLowerCase().includes(q) ||
      video.category.toLowerCase().includes(q)
  );
}
