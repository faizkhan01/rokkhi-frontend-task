
// import './App.css';
import Home from './Components/Home/Home';
import SelectedCountry from './Components/Home/SelectedCountry';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div >
 
      <Router>
        
        <Switch>
          <Route exact path="/">
             <Home></Home>
          </Route>

          <Route exact path="/selectedCountry">
            <SelectedCountry></SelectedCountry>
          </Route>

          <Route path='*'>
            <h2 className = 'text-center py-5'> 4O4  not found .......</h2>
        </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
