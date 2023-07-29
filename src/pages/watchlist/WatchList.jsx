import React from "react";
import "./WatchList.css";
import { useData } from "../../context/DataContext";
import { VideoCard } from "../../components/videoCard/VideoCard";

export const WatchList = () => {
  const { state } = useData();

  return (
    <div className="watchlist-page-layout">
      <h1>Watch Later</h1>
      <div>
        {state.watchlater.length > 0 ? (
          <div>
            {state.watchlater.map((videoInfo) => {
              return <VideoCard videoInfo={videoInfo} />;
            })}
          </div>
        ) : (
          <div>No videos</div>
        )}
      </div>
    </div>
  );
};
