import React from "react";
import { useParams } from "react-router-dom";

export default function ViewCreator(props) {
  const {id} = useParams();
  const creator = props.creators.filter((creator) => creator.id == id)[0]
  console.log(creator)

  return (
    <div>
      <label>hi {creator && creator.name}</label>
    </div>
  );
}
