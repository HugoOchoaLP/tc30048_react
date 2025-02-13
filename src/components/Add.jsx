import React, { useState } from "react";
import Button from "./Button";

function Add({ add }) {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name=""
        id=""
      />
      {name}
      <input type="text" name="" id="" />
      <Button name="Agregar" />
    </div>
  );
}

export default Add;
