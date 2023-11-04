import "./App.css";
import Post from "./Post";
import Layout from "./Layout";
import {Route, Routes} from "react-router-dom";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path={'/login'} element={<div>Login page</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
