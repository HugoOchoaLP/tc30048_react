import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import List from "./pages/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import LoginProfe from "./pages/LoginProfe";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "item1", price: 1 },
    { id: 2, name: "item2", price: 2 },
    { id: 3, name: "item3", price: 3 },
  ]);
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  };
  const add = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]); //spread operator
  };
  const del = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const loginProfe = (user) => {
    let isLogin = false;
    if (user.username === "Hugol" && user.password === "1234") {
      setIsLogin(true);
    }
    return isLogin;
  };
  const setLogout = () => {
    setIsLogin(false);
  };
  return (
    <div>
      <BrowserRouter>
        {isLogin && <ResponsiveAppBar setLogout={setLogout} />}
        <Routes>
          <Route path="/" element={<LoginProfe loginProfe={loginProfe} />} />
          <Route path="/add" element={<Add add={add} />} />
          <Route
            path="/items"
            element={<List items={items} ondelete={del} />}
          />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* {count}
      <Button name={"suma"} click={sum} />
      <Button name={"resta"} click={resta} />
      <Button name={"mensaje"} click={() => alert("hola")} /> */}
    </div>
  );
}

export default App;
