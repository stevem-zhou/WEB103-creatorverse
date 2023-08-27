import { useRoutes } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./client";
import ShowCreators from "./components/pages/ShowCreators/ShowCreators";
import ViewCreator from "./components/pages/ViewCreator/ViewCreator";
import EditCreator from "./components/pages/EditCreator";
import AddCreator from "./components/pages/AddCreator/AddCreator";
import "@picocss/pico";
import "./App.css";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await supabase.from("creators").select();
        setCreators(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, [creators]);

  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators creators={creators} />,
    },
    { path: "/new", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator setCreators={setCreators} /> },
    { path: "/view/:id", element: <ViewCreator creators={creators} /> },
  ]);

  return <>{element}</>;
}

export default App;
