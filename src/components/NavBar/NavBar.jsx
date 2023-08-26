import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="heading">
      <h1 className="title">CREATORVERSE</h1>
      <div className="buttons--container">
        <button
          role="button"
          className="add-view--button"
          onClick={() => navigate("/")}
        >
          View Creators
        </button>
        <button
          role="button"
          className="add-view--button"
          onClick={() => navigate("/new")}
        >
          Add Creator
        </button>
      </div>
    </div>
  );
}
