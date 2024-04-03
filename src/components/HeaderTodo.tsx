"use client"

import { useFiltered } from "@/store";
import "../styles/HeaderTodo.css";

import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { useEffect } from "react";

export const HeaderTodo = () => {
  const theme = useFiltered((state) => state.theme);
  const setTheme = useFiltered((state) => state.setTheme);
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return <>
    <div className="header-todo">
        <h1>TODO</h1>
        <div className="theme-toggle">
          {theme === "dark" ? (
            <IoSunny onClick={() => setTheme("light")} />
          ) : (
            <FaMoon onClick={() => setTheme("dark")} />
          )}
        </div>
    </div>
  </>
}