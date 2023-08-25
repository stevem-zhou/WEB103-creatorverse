import React from "react";
import Card from "../../Card/Card";
import "./ShowCreators.css";

export default function ShowCreators({ creators }) {
  const creatorCards = creators.map((creator) => (
    <Card
      name={creator.name}
      url={creator.url}
      description={creator.description}
      image={creator.imageURL}
    />
  ));

  return (
    <div className="card--container">
      {creators.length > 0 ? creatorCards : <div>THERES NO CREATORS</div>}
    </div>
  );
}
