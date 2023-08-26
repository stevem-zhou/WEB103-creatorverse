import React from "react";
import Card from "../../Card/Card";
import "./ShowCreators.css";
import NavBar from "../../NavBar/NavBar";

export default function ShowCreators({ creators }) {

  const creatorCards = creators.map((creator) => (
    <Card
      name={creator.name}
      url={creator.url}
      description={creator.description}
      image={creator.imageURL}
      id={creator.id}
    />
  ));

  return (
    <div className="body">
      <NavBar />
      <div className="card--container">
        {creators.length > 0 ? creatorCards : <div>THERES NO CREATORS</div>}
      </div>
    </div>
  );
}
