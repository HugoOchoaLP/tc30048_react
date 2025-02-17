import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ add }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert("Ingresa nombre y precio");
      return;
    }
    add({ name: name, price: price });
    alert(name);
    setName("");
    setPrice("");
    navigate("/items");
  };
  return (
    <form onSubmit={onsubmit}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name=""
        id=""
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="text"
        name=""
        id=""
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default Add;
