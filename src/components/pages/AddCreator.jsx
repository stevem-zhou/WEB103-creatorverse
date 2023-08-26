import { React, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { supabase } from "../../client";

export default function AddCreator() {
  const [newCreator, setNewCreator] = useState({
    name: "",
    description: "",
    url: "",
    imageURL: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await supabase.from("creators").insert(newCreator);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="body">
      <NavBar />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
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
        <label>
          Description:
          <input
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
        <label>
          URL:
          <input
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
        <label>
          ImageURL:
          <input
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
        <input type="submit" />
      </form>
    </div>
  );
}
