import Title from "./sections/Title";
import Menu from "./sections/Menu";
import Categories from "./sections/Categories";
import items from "./data";
import { useState } from "react";

const App = () => {
  const categories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItem, setMenuItems] = useState(items);

  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
