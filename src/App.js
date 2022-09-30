import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './Components/Charts/Charts';
import Table from './Components/Table/Table';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
