import { Link } from "react-router-dom"
import "./loading.scss"
import Whale from "../../assets/img/whale.png"

const loadingOne = () => {
  return (
    <section className="loading-container">
      <Link to="/signup">
        <span className="skip">Skip</span>
      </Link>
      <div className="heading">
        <img src={Whale} alt="whale pic" />
        <p className="text">
          Whales are thinning out because of lack of food due to increasing
          temperatures!
        </p>
      </div>

      <div className="dot-group">
        <Link to="/loading1">
          <div className="dot active"></div>
        </Link>
        <Link to="/loading2">
          <div className="dot"></div>
        </Link>
        <Link to="/loading3">
          <div className="dot"></div>
        </Link>
        <Link to="/loading4">
          <div className="dot"></div>
        </Link>
      </div>
    </section>
  )
}

export default loadingOne
