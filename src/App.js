import './App.css';
import Search from './components/search/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/propertyBody/Body';
import Navbar from './components/navbar/navbar';

function App() {

  console.log("house")
  return (
    <div className="App">
    <Navbar/>


      <Router>
        <Switch>

          <Route exact path = '/'>
            <Search />
          </Route>

          <Route exact path = '/property/:id' component = { Body } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;