import React from "react";
import styled from "styled-components";

export default function ComponentesEstilizados() {
    let mainColor = "#db7093",
    mainAlphaColor80 = "#db709390"

    const setTransitionTime = (time) => `all ${time} ease-in-out`;

    const MyH3 = styled.h3`
        padding: 2rem;
        text-align: center;
        color:${({color}) => color || "#222"};
        background-color: ${mainColor};
        

        &:hover {
            background-color: ${mainAlphaColor80};
            transition: ${setTransitionTime(".5s")};
        }
    `;

  return (
    <>
      <h2>Componentes estilizados</h2>
      <MyH3>Hola soy un componente estilizado con styled-components</MyH3>
      <MyH3 color = '#61dafb'>Hola soy un componente estilizado con styled-components</MyH3>

    </>
  );
}
