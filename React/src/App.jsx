import { useState } from "react";
import "./App.css";
import HeaderComponent from "./ListItem/HeaderComponent";
import FooterComponent from "./ListItem/FooterComponent";
import ToDoList from "./ListItem/ToDoList";
import AddItem from "./ListItem/AddItem";

export default function App() {
  const [items, setitem] = useState([
    {
      id: 1,
      checked: false,
      item: "cricket",
    },

    {
      id: 2,
      checked: false,
      item: "football",
    },

    {
      id: 3,
      checked: false,
      item: "volleyball",
    },
  ]);
  const [newitem, setnewitem] = useState("");

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;

    const addnewitem = { id, item, checked: false };

    const listitem = [...items, addnewitem];

    setitem(listitem);
  };

  const handlechange = (id) => {
    const listvalue = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitem(listvalue);

    localStorage.setitem("todo_list", JSON.stringify(listvalue));
  };

  const handledelete = (id) => {
    const updateitems = items.filter((item) => item.id !== id);
    setitem(updateitems);

    localStorage.setitem("todo_list", JSON.stringify(updateitems));
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (!newitem) return;

    additem(newitem);

    setnewitem("");
  };

  return (
    <div className="App">
      <HeaderComponent name="Nithish" />

      <AddItem
        newitem={newitem}
        setnewitem={setnewitem}
        handlesubmit={handlesubmit}
      />

      <ToDoList
        items={items}
        handlechange={handlechange}
        handledelete={handledelete}
      />

      <FooterComponent length={items.length} />
    </div>
  );
}
