import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../utils/Logo"
import "./navbar.scss"

const NavBar = () => {
  useEffect(() => {
    window.document
      .querySelector(".fa.fa-hamburger ")
      .addEventListener("click", e => {
        window.document.querySelector(".nav ul").style.transform =
          "translateX(0px)"
        window.document.querySelector(".nav ul").style.visibility = "visible"
        window.document.querySelector(".nav ul").style.opacity = "1"
      })
    window.document
      .querySelector(".fa.fa-hamburger ")
      .addEventListener("click", e => {
        window.document.querySelector(".overlay").style.display = "unset"
      })
  })
  const hideNav = () => {
    if (window.innerWidth < 600) {
      window.document.querySelector(".nav ul").style.transform =
        "translateX(-400px)"
      window.document.querySelector(".nav ul").style.visibility = "hidden"
      window.document.querySelector(".nav ul").style.opacity = "0"
      window.document.querySelector(".overlay").style.display = "none"
    }
  }
  return (
    <div className="nav">
      <a href="/">
        <Logo />
      </a>
      <i
        className="fa fa-hamburger mobile-hide"
        style={{ paddingRight: "10px", fontSize: "1.4rem", color: "#fff" }}
      ></i>
      <div className="overlay" onClick={hideNav}></div>
      <ul>
        <li>
          <NavLink exact to="/" onClick={hideNav} activeClassName="link-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/news"
            onClick={hideNav}
            activeClassName="link-active"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/events"
            onClick={hideNav}
            activeClassName="link-active"
          >
            Events
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/signin"
            onClick={hideNav}
            activeClassName="link-active"
          >
            Sign In
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
