import './App.css';
import Weather from './containers/Weather/Weather';
import Time from './components/Time/Time';
import Home from './components/Home/Home';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/weather' component={Weather} />
          <Route path='/time' component={Time} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
