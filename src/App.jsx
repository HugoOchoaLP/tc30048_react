import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  const items = [
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ];
  let [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    items.push(item);
  };
  return (
    <div>
      <Header />
      {count}
      <Button name={"suma"} click={sum} />
      <Button name={"resta"} click={resta} />
      <Button name={"mensaje"} click={() => alert("hola")} />
      <Add add={add} />
      <List items={items} />
      <Footer />
    </div>
  );
}

export default App;
