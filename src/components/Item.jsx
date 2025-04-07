import React from "react";
import Button from "./Button";

const Item = ({ item, ondelete }) => {
  return (
    <div>
      <ul>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>
          <Button click={() => ondelete(item._id)} name={"X"} />
        </li>
      </ul>
    </div>
  );
};

export default Item;

