import { React, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../client";

export default function EditCreator() {
  const { id } = useParams();
  const [updateCreator, setUpdateCreator] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch() {
      try {
        const res = await supabase.from("creators").select().eq("id", id);
        setUpdateCreator(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await supabase.from("creators").update(updateCreator).eq("id", id);
    } catch (err) {
      console.log(err);
    }
  }

  return updateCreator ? (
    <div className="body">
      <NavBar />
      <form onSubmit={handleSubmit} action="/">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={updateCreator.name}
            onChange={(event) =>
              setUpdateCreator((prev) => ({
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
            value={updateCreator.description}
            onChange={(event) =>
              setUpdateCreator((prev) => ({
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
            value={updateCreator.url}
            onChange={(event) =>
              setUpdateCreator((prev) => ({
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
            value={updateCreator.imageURL}
            onChange={(event) =>
              setUpdateCreator((prev) => ({
                ...prev,
                imageURL: event.target.value,
              }))
            }
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  ) : (
    <div>loading...</div>
  );
}
