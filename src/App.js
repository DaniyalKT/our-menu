import { useState } from "react";
import Category from "./componrnt/Category";
import Menu from "./componrnt/Menu";
import menus from "./data";

const allCategories = ["all", ...new Set(menus.map((menu) => menu.category))];

function App() {
  const [allMenus, setAllMenus] = useState(menus);
  const [categories, setCategories] = useState(allCategories);

  const fillterMenu = (category) => {
    if (category === "all") {
      setAllMenus(menus);
      return;
    }

    let filteredMenu = menus.filter((menu) => menu.category === category);
    setAllMenus(filteredMenu);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
          <Category categories={categories} fillterMenu={fillterMenu}/>
          <Menu allMenus={allMenus} />
        </div>
      </section>

      <footer className="footer-section">
        <h2>© 2024:Daniel K-Tehrani</h2>
      </footer>
    </main>
  );
}

export default App;
