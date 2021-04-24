import "./App.scss"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from './components/Home/Home'

function App() {
  return (
 <BrowserRouter>
      <Switch>
        <div className="start-padding">
          <Navbar />
          <Route exact path="/" component={Home} />
     
        </div>
      </Switch>
    </BrowserRouter>

  )
}

export default App
