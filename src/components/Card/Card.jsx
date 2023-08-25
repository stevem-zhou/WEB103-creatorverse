import React from "react";
import "./Card.css";

export default function Card(props) {
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
    </div>
  );
}
