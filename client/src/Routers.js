import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import NonProtected from "./components/authProvider/NonProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';

const Routers = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          console.log(resObject)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <NonProtected>
                <Login />
            </NonProtected>
          }
        />
        <Route path="/dashboard"
          element={
            <NonProtected>
                <Dashboard />
            </NonProtected>
          }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;