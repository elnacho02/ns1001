import React, { useState } from "react";
import s from "./SearchBar.module.css";
export default function SearchBar({onSearch}) {
  
  const [city, setCity] = useState("");
  const inputChange = (x)=>{
    x.preventDefault();
    setCity(x.target.value)
  }
  return (
    <div className={s.bar_container}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}>
        <input className={s.ciudadIn}
          type="text"
          placeholder="Ciudad..."
          onChange={(x)=>inputChange(x)}
        />
        <input className={s.button} 
        type="submit" value="+" />
      </form>
    </div>
  );
}
