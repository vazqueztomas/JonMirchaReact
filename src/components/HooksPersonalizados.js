import React from "react";
import { useFetch } from "../hooks/useFetch";

const HooksPersonalizados = () => {
  // console.log(useFetch());
  let url = "https://pokeapi.co/api/v2/pokemon/";

  let { data, isPending, error } = useFetch(url);
  return (
    <>
      <h2>Hooks personalizados</h2>
      <h3>{JSON.stringify(data)}</h3>
      <h3>
        <pre>
          <code>{JSON.stringify(isPending)}</code>
        </pre>
      </h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
    </>
  );
};

export default HooksPersonalizados;
