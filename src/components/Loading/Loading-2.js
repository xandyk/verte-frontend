import { Link } from "react-router-dom"
import "./loading.scss"
import Earth from "../../assets/img/earth.png"

const loadingTwo = () => {
  return (
    <section className="loading-container">
      <Link to="/signup">
        <span>Skip</span>
      </Link>
      <div className="heading">
        <img src={Earth} alt="earth pic" />
        <p>
          Whales are thinning out because of lack of food due to increasing
          temperatures!
        </p>
      </div>

      <div className="dot-group">
        <Link to="/loading1">
          <div className="dot "></div>
        </Link>
        <Link to="/loading2">
          <div className="dot active"></div>
        </Link>
        <Link to="loading3">
          <div className="dot"></div>
        </Link>
        <Link to="/loading4">
          <div className="dot"></div>
        </Link>
      </div>
    </section>
  )
}

export default loadingTwo
