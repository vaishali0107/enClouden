import Header from "./components/Header"
import Jobs from "./components/Jobs";
import Details from "./components/Details"
import {BrowserRouter as Router,Route,Switch,useHistory} from "react-router-dom";

function App() {
  return (
    <div>
    <Header/>
    <Jobs/>
    <Router>
          <Route exact path = "/details" component={Details}></Route>
    </Router>
    </div>
  );
}

export default App;
