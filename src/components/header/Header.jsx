import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore, MdWatchLater, MdPlaylistAdd } from "react-icons/md";

export const Header = () => {
  const getActiveStyle = ({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : "";

  return (
    <div className="side-nav">
      <NavLink to="/" className={getActiveStyle}>
        <AiFillHome />
        Home
      </NavLink>
      <NavLink className={getActiveStyle} to="/explore">
        <MdOutlineExplore />
        Explore
      </NavLink>
      <NavLink className={getActiveStyle} to="/playlist">
        <MdPlaylistAdd />
        Playlists
      </NavLink>
      <NavLink className={getActiveStyle} to="/watchlater">
        <MdWatchLater />
        Watch Later
      </NavLink>
    </div>
  );
};
