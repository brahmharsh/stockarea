import './App.css';
import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WarehouseListing from './components/WarehouseListing';
import WarehouseDetail from './components/WarehouseDetail'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={WarehouseListing} />
          <Route exact path="/warehouse/:warehouseID" component={WarehouseDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
