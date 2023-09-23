import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import "./styles.css";

const List = ({ places }) => {
  const [type, setType] = useState("California");
  return (
    <div>
      <h1>Places</h1>
      <form>
        <label htmlFor="places" style={{ marginRight: "10px" }}>
          place
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          id="places"
        >
          <option value="forza">California</option>
          <option value="forza2">forza2</option>
          <option value="forza3">forza3</option>
          <option value="forza4">forza4</option>
        </select>
      </form>
      <div className="list">
        {places?.map((place, i) => (
          <PlaceDetails key={i} place={place}></PlaceDetails>
        ))}
      </div>
    </div>
  );
};

export default List;
