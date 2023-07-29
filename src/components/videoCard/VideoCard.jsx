import React from "react";
import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { useData } from "../../context/DataContext";

export const VideoCard = ({ videoInfo }) => {
  const { title, creator, thumbnail, views, category, _id } = videoInfo;
  const navigate = useNavigate();
  const { dispatch } = useData();
  return (
    <div
      className="video-card"
      onClick={() => {
        navigate(`/video/${_id}`);
      }}
    >
      <div className="video-card-img-container">
        <img src={thumbnail} alt={title} className="video-card-img" />
      </div>
      <div className="video-card-details">
        <div className="detail-img-section">
          {" "}
          <img
            src="https://picsum.photos/40/40"
            alt={title}
            width="50"
            height={50}
            className="detail-img"
          />
        </div>
        <div>
          <p className="video-title">{title}</p>
          <p className="video-category">{category}</p>
          <p className="video-views-creator">
            {views} views | {creator}
          </p>
        </div>
      </div>
      <div
        onclick={() => {
          dispatch({ type: "ADD_TO_WATCHLATER", payload: videoInfo });
        }}
      >
        <MdOutlineWatchLater className="watch-later-icon" />
      </div>
    </div>
  );
};
