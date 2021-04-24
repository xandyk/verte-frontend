import "bootstrap/dist/css/bootstrap.min.css"
import "./App.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import LoadingOne from "./components/Loading/Loading-1"
import LoadingTwo from "./components/Loading/Loading-2"
import LoadingThree from "./components/Loading/Loading-3"
import LoadingFour from "./components/Loading/Loading-4"
import SigninForm from "./components/SigninForm/SigninForm"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="start-padding">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/loading1" component={LoadingOne} />
          <Route path="/loading2" component={LoadingTwo} />
          <Route path="/loading3" component={LoadingThree} />
          <Route path="/loading4" component={LoadingFour} />
          <Route path="/signin" component={SigninForm} />
        </div>
      </Switch>
    </BrowserRouter>
  )
}

export default App
