import { Link } from "react-router-dom"

export default function PageHeader(){
    return(
        <header>
        <Link to="/" className="logo">My Blog</Link>
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    )
}