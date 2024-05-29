import React, { useState } from "react";
import Menu from "./menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.genre))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (genre) => {
    if (genre === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.genre === genre);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our book collection" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
