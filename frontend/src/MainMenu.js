import { UserContext } from "./UserContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
   
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
        <div>
             <nav>
        {username && (
          <>
          <Link to="/" className="menu-item" > Blog kosmetyczny </Link>
            <Link to="/create" className="menu-item" > Dodaj nowy post</Link>
            <Link to="/contact" className="menu-item" > Kontakt </Link>
            <Link to="/aboutus" className="menu-item" > O nas </Link>
            <div className="logout">
            <a onClick={logout} className="menu-item" >Wyloguj</a>
            </div>
          </>
        )}
        {!username && (
          <>
          <div class="start-page">
            <Link to="/login" className="menu-item" >Zaloguj</Link>
            <Link to="/register" className="menu-item" >Rejestracja</Link>
            </div>
          </>
        )}
      </nav>
        </div>
    )
     
}
