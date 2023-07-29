import React, { useState } from "react";
import "./Explore.css";
import { videos } from "../../data/videos";
import { VideoCard } from "../../components/videoCard/VideoCard";

export const Explore = () => {
  const [searchValue, setSearchValue] = useState("");

  const filterBySearch =
    searchValue.length > 0
      ? videos.filter((video) =>
          video.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : videos;

  return (
    <div className="explore-page-layout">
      <h1>Explore</h1>
      <input
        type="text"
        className="search-input"
        placeholder="search videos"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="explore-videos-section">
        {filterBySearch.map((videoInfo) => {
          return <VideoCard videoInfo={videoInfo} key={videoInfo._id} />;
        })}
      </div>
    </div>
  );
};
