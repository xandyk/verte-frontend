import { Link } from "react-router-dom"
import "./loading.scss"
import Reward from "../../assets/img/reward.png"

const loadingFour = () => {
  return (
    <section className="loading-container">
      <Link to="/loading4">
        <span>Skip</span>
      </Link>
      <img src={Reward} alt="reward pic" />
      <p>
        Ride a 🚲, plant a 🌳, share your stories, collect points & earn
        rewards! Invite your family & friends to earn bigger offers!
      </p>

      <div className="dot-group">
        <Link to="/loading1">
          <div className="dot "></div>
        </Link>
        <Link to="/loading2">
          <div className="dot"></div>
        </Link>
        <Link to="loading3">
          <div className="dot"></div>
        </Link>
        <Link to="/loading4">
          <div className="dot active"></div>
        </Link>
      </div>
    </section>
  )
}

export default loadingFour
