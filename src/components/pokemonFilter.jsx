import React from "react";
import styled
 from "@emotion/styled";

 const Input = styled.input`
 width: 80%;
 padding: 0.2rem;
 font-size: large;
`;

 const PokemonFilter = ({filter, setFilter}) => (
  <Input
    value={filter}
    onChange={(event) => setFilter(event.target.value)}
  />
);

export default PokemonFilter;
