import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>
        <strong>Type:</strong>{" "}
        {pokemon.types.map((typeInfo) => typeInfo.type.name).join(", ")}
      </p>
      <p>
        <strong>Abilities:</strong>{" "}
        {pokemon.abilities
          .map((abilityInfo) => abilityInfo.ability.name)
          .join(", ")}
      </p>
      <p>
        <strong>Height:</strong> {pokemon.height / 10} m
      </p>
      <p>
        <strong>Weight:</strong> {pokemon.weight / 10} kg
      </p>
    </div>
  );
};

export default PokemonCard;
