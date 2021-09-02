import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import AddProperty from './AddProperty';
import Navbar from './NavBar';
import Properties from './Properties';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route path="/add-property" component={AddProperty} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
