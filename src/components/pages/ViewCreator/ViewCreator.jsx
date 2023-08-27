import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { supabase } from "../../../client";
import "./ViewCreator.css";

export default function ViewCreator(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const creator = props.creators.filter((creator) => creator.id == id)[0];

  async function handleDelete() {
    try {
      await supabase.from("creators").delete().eq("id", id);
    } catch (err) {
      console.log(err);
    }
  }

  return creator ? (
    <div className="body">
      <NavBar />
      <div className="view-info--container">
        <img src={creator.imageURL} className="img" />
        <div className="view-desc--container">
          <h2>{creator.name}</h2>
          <p className="desc">{creator.description}</p>
          <a className="a" href={creator.url}>Click To Channel</a>
        </div>
      </div>
      <div className="buttons--container">
        <button
          role="button"
          className="add-view--button"
          onClick={() => navigate(`/edit/${id}`)}
        >
          Edit
        </button>
        <button
          role="button"
          className="add-view--button"
          onClick={() => {
            handleDelete();
            navigate("/");
          }}
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="body">loading...</div>
  );
}
