import React from "react";
import "../styles/style.css";

function PlanetListItem(props) {
  return (
    <div>
      <table className="table table-dark table-width table-text">
        <thead>
          <tr>
            <th scope="col">Name of the Planet</th>
            <th scope="col">Climate</th>
            <th scope="col">Diameter</th>
            <th scope="col">Gravity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.planet.name}</td>
            <td>{props.planet.climate}</td>
            <td>{props.planet.diameter}</td>
            <td>{props.planet.gravity}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PlanetListItem;
