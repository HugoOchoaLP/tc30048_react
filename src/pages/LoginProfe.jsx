import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginProfe = ({ loginProfe }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onsubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Faltan datos en los campos");
      return;
    }
    const isLogin = loginProfe({ username, password }); //{} para mandar como objeto
    if (isLogin) {
      setUsername("");
      setPassword("");
      navigate("/home");
    } else {
      alert("El log in no funciono");
    }
  };
  return (
    <form onSubmit={onsubmit}>
      <Box
        margin={"auto"}
        flexDirection={"column"}
        display={"flex"}
        width={400}
        marginTop={"20px"}
      >
        <TextField
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type={"submit"} variant="contained">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginProfe;
