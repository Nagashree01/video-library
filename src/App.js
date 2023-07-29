import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Explore } from "./pages/explore/Explore";
import { Playlist } from "./pages/playlist/Playlist";
import { WatchList } from "./pages/watchlist/WatchList";
import { Header } from "./components/header/Header";
import { CategoryVideo } from "./pages/categoryVideos/CategoryVideo";
import { VideoDetails } from "./pages/videoDetail/VideoDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryName" element={<CategoryVideo />} />
        <Route path="/video/:videoId" element={<VideoDetails />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchList />} />
      </Routes>
    </div>
  );
}

export default App;
