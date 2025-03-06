//import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import List from "./pages/List";
import Add from "./components/Add";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import LoginProfe from "./pages/LoginProfe";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (isLogin) {
      getItems();
    }
  }, [isLogin]);
  const getItems = async () => {
    const result = await fetch("http://localhost:5500/items/");
    const data = await result.json();
    setItems(data);
  };
  /*   const sum = () => {
    setCount(count + 1);
  };
  const resta = () => {
    setCount(count - 1);
  }; */
  const add = async (item) => {
    // item.id = items.length + 1;
    const result = await fetch("http://localhost:5500/items/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const data = await result.json();
    setItems([...items, data.item]); //spread operator
  };
  const del = async (id) => {
    await fetch("http://localhost:5500/items/" + id, { method: "DELETE" });
    setItems(items.filter((item) => item.id !== id));
  };
  const loginProfe = async (user) => {
    //let isLogin = false;
    const result = await fetch("http://localhost:5500/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await result.json();
    setIsLogin(data.isLogin);
    return data.isLogin;
    // console.log(data);
    // if (user.username === "admin" && user.password === "adminpass") {
    //   setIsLogin(true);
    // }
    // return isLogin;
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
