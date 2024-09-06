import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import LayoutStyle from "./layout.module.css";
import {Footer} from "../../components/Footer/Footer";

export function Layout() {
  return (
    <div className={LayoutStyle.layout}>
      <Navbar />
      <div className={LayoutStyle.content}>
        <Outlet />
      </div>
      <Footer className={LayoutStyle.footer} />
    </div>
  );
}