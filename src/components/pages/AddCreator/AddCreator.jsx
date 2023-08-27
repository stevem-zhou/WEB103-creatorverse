import { React, useState } from "react";
import NavBar from "../../NavBar/NavBar";
import { supabase } from "../../../client";
import "./AddCreator.css";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const [newCreator, setNewCreator] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await supabase.from("creators").insert(newCreator);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="body">
      <NavBar />
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input
            className="input"
            type="text"
            name="name"
            onChange={(event) =>
              setNewCreator((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />
        </label>
        <label className="label">
          Description:
          <input
            className="input"
            type="text"
            name="description"
            onChange={(event) =>
              setNewCreator((prev) => ({
                ...prev,
                description: event.target.value,
              }))
            }
          />
        </label>
        <label className="label">
          YouTube Channel:
          <input
            className="input"
            type="text"
            name="url"
            onChange={(event) =>
              setNewCreator((prev) => ({
                ...prev,
                url: event.target.value,
              }))
            }
          />
        </label>
        <label className="label">
          ImageURL:
          <input
            className="input"
            type="text"
            name="imageUrl"
            onChange={(event) =>
              setNewCreator((prev) => ({
                ...prev,
                imageURL: event.target.value,
              }))
            }
          />
        </label>
        <input className="input" type="submit" />
      </form>
    </div>
  );
}
