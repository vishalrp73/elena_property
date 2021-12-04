import './App.css';
import Search from './components/search/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Property from './components/property/property';

function App() {
  
  console.log('search function branch');
  
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path = '/'>
            <Search />
          </Route>

          <Route exact path = '/property/:id' component = { Property } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;