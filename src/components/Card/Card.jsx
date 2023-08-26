import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={props.image}
        alt="image not loading"
        className="img--container"
      />
      <div className="info--container">
        <h2 className="name--container">{props.name}</h2>
        <p className="description--container">{props.description}</p>
        <p className="url--container">{props.url}</p>
      </div>
      <div className="button--container">
        <button
          role="button"
          className="edit-view--button"
          onClick={() => navigate(`edit/${props.id}`)}
        >
          Edit
        </button>
        <button
          role="button"
          className="edit-view--button"
          onClick={() => navigate(`view/${props.id}`)}
        >
          View
        </button>
      </div>
    </div>
  );
}
