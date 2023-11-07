import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";


export default function PageHeader() {
  const {setUserInfo, userInfo} = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:3005/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      });
    });
  }, []);

 function logout() {
  fetch('http://localhost:3005/logout', {
    credentials: 'include',
    method: 'POST',
 });
 setUserInfo(null);
}
const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/crate"> Create new post </Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}