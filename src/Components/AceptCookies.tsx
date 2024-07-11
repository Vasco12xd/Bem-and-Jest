import React from "react";
import { useState } from "react";

const AceptCookies = () => {
  const [cookies, setCookies] = React.useState(false);

  return (
    <div>
      <label htmlFor="cookieCheckbox">Acepta las cookies</label>
      <input 
      type="checkbox" 
      id="cookieCheckbox" 
      onClick={() => setCookies(!cookies)}
      />
      <article title="Confirmación cookies">
        {cookies ? "Has aceptado las cookies" : "No has aceptado las cookies"}
      </article>
    </div>
  );
};

export default AceptCookies;
