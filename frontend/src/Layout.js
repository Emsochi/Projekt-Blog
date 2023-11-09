import { Outlet } from "react-router-dom";
import Header from "./PageHeader";
import MainMenu from "./MainMenu";

export default function Layout(){
    return(
        <main>
            <Header/>
            <MainMenu/>
            <Outlet/>
        </main>
    )
}