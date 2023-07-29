import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryVideo.css";
import { videos } from "../../data/videos";
import { VideoCard } from "../../components/videoCard/VideoCard";

export const CategoryVideo = () => {
  const { categoryName } = useParams();

  const getAllVideosOfParticularCategory = videos.filter(
    (video) => video.category === categoryName
  );

  return (
    <div className="category-video-section">
      <h1>{categoryName}</h1>
      <div className="category-videos-list">
        {getAllVideosOfParticularCategory.map((videoInfo) => {
          return <VideoCard videoInfo={videoInfo} key={videoInfo._id} />;
        })}
      </div>
    </div>
  );
};
