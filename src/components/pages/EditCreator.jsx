import { React, useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../client";

export default function EditCreator(props) {
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
      await supabase
        .from("creators")
        .update(updateCreator)
        .eq("id", id)
        .then(navigate("/"));
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDelete() {
    try {
      await supabase.from("creators").delete().eq("id", id);
    } catch (err) {
      console.log(err);
    }
  }

  return updateCreator ? (
    <div className="body">
      <NavBar />
      <form onSubmit={handleSubmit} className="form">
        <label className="label">
          Name:
          <input
            className="input"
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
        <label className="label">
          Description:
          <input
            className="input"
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
        <label className="label">
          YouTube Channel:
          <input
            className="input"
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
        <label className="label">
          ImageURL:
          <input
            className="input"
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
        <input
          type="button"
          value="Delete"
          onClick={() => {
            handleDelete();
            navigate("/");
          }}
        />
      </form>
    </div>
  ) : (
    <div>loading...</div>
  );
}
