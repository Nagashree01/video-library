import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { videos } from "../../data/videos";
import "./VideoDetails.css";
import { MdOutlineWatchLater, MdPlaylistAdd, MdNotes } from "react-icons/md";
import { useData } from "../../context/DataContext";

export const VideoDetails = () => {
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useData();

  const videoDetails = videos.find((video) => video._id === Number(videoId));

  const otherVideosSuggestion = videos.filter(
    (video) => video._id !== Number(videoId)
  );
  const { _id, title, thumbnail, src } = videoDetails;

  const [playistModel, setPlaylistModel] = useState(false);
  const [playlistInfo, setPlaylistInfo] = useState({
    name: "",
    playlistVideo: {},
  });
  const handleFormSubmit = () => {};
  return (
    <div className="video-details-layout">
      <div className="video-details-section">
        <div>
          <iframe src={src} title={title} height="500" className="video" />
        </div>
        <div className="video-details-and-action-icons">
          <div className="thumbnail-and-title-section">
            <div>
              <img
                src={thumbnail}
                alt={title}
                width="50"
                height="50"
                className="video-thumbnail"
              />
            </div>
            <div className="video-title">{title}</div>
          </div>

          <div className="video-action-icons">
            <MdOutlineWatchLater
              className="video-action-icon"
              onClick={() => {
                dispatch({ type: "ADD_TO_WATCHLATER", payload: videoDetails });
              }}
            />
            <MdPlaylistAdd
              className="video-action-icon"
              onClick={() => {
                setPlaylistModel(true);
              }}
            />
            <MdNotes className="video-action-icon" onClick={() => {}} />
          </div>
        </div>
      </div>
      <div className="video-suggest-section">
        <h3>More videos:</h3>
        {otherVideosSuggestion.map(({ _id, title, thumbnail, creator }) => (
          <div
            className="more-video-card"
            onClick={() => {
              navigate(`/video/${_id}`);
            }}
          >
            <div className="more-video-card-container">
              <img
                src={thumbnail}
                alt={title}
                className="more-video-card-img"
              />
            </div>
            <div className="more-video-card-details">
              <div>{title}</div>
              <div>{creator}</div>
            </div>
          </div>
        ))}
      </div>

      {playistModel && (
        <form className="form">
          <div className="form-contents">
            New Playlist
            <span
              className="close"
              onClick={() => {
                setPlaylistModel(false);
              }}
            >
              &times;
            </span>
            <input
              type="text"
              placeholder="playlist-name"
              name="name"
              value={playlistInfo.name}
            />
            <button>Add video</button>
            <button onClick={setPlaylistModel(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};
