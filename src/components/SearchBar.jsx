import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        type="text"
        placeholder="Ingrese una ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
        className='input'
      />
      <input type="submit" value="Agregar" className="input-button"/>
    </form>
  );
}
