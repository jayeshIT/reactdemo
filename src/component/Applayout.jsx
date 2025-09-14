import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet, useNavigation } from "react-router-dom";
import { HeaderResponsive } from "./HeaderResponsive";
import React from "react";
export const AppLayout = () => {
    const navigation = useNavigation();
    console.log(navigation);
    if (navigation.state === "loading")
        return (<h1>Loading....</h1>)
    return (
        <div >
            <HeaderResponsive></HeaderResponsive>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}