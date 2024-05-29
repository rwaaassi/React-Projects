import React from "react";
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((bookItem) => {
        return <MenuItem key={bookItem.id} {...bookItem} />;
      })}
    </div>
  );
};

export default Menu;
