import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Move useNavigate to the top level

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      console.log("userdetails:", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log("Login successful!", responseData);

        // Save token and username to localStorage
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("username", responseData.username);

        // Redirect to the dashboard
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message); // Assuming the error message is sent from the server
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
            />
          </label>
          <label>
            Password:
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
            />
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <label style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                style={{ marginLeft: "5px" }}
              />
              Show Password
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="checkbox"
                // Add state and onChange handler if needed
                style={{ marginRight: "5px" }}
              />
              Remember Me
            </label>
          </div>
          {errorMessage && (
            <p
              style={{
                color: "red",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </p>
          )}
          <br />
          <button
            type="button"
            onClick={handleLogin}
            style={{
              backgroundColor: "#4caf50",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
