import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { Col } from 'react-bootstrap';

import { Homepage } from './components map/Map'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/particles.css'
import './css/particle.css'
import './css/App.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Col style={{ padding: 0 }}>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </Col>
      </Router >
    </div>
  );
}

export default App;
