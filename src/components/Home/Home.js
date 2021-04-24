import React from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <img src={Logo} alt="logo" />
      <h2 className="slogan">Keep it cool for safe living.</h2>
      <p>
        With Verte, you can gather the most updated news about global warming,
        participate in the local events, and get rewarded!
      </p>
      <Link to="/loading1">
        <button>Discover Verte</button>
      </Link>
    </div>
  )
}

export default Home
