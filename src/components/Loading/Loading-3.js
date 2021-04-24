import "./loading.scss"
import { Link } from "react-router-dom"
import Hands from "../../assets/img/hands.png"

const loadingThree = () => {
  return (
    <section className="loading-container">
      <Link to="/signup">
        <span className="skip">Skip</span>
      </Link>

      <div className="heading">
        <img src={Hands} alt="hand pic" />
        <p className="text">
          We have only one planet to thrive. Let’s come together to make a
          change!
        </p>
      </div>

      <div className="dot-group">
        <Link to="/loading1">
          <div className="dot"></div>
        </Link>
        <Link to="/loading2">
          <div className="dot"></div>
        </Link>
        <Link to="/loading3">
          <div className="dot active"></div>
        </Link>
        <Link to="/loading4">
          <div className="dot"></div>
        </Link>
      </div>
    </section>
  )
}

export default loadingThree
