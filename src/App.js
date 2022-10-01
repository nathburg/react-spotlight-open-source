import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Charts from './Components/Charts/Charts';
import Table from './Components/Table/Table';
import { Button } from '@mui/material';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">
          <Button variant='contained'>
            Table
          </Button>
        </Link>
        <Link to="/charts">
          <Button variant='contained'>
            Chart
          </Button>
        </Link>
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
