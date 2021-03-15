import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Homepage, Header, Footer } from './components map/Map'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/particles.css'
import './css/particle.css'
import './css/App.css'


function App() {

  return (
    <div className="App">
      <Router>
        <div className="row row--margin">
          <Header />
          <div className="col-12 col--padding">
            <main>
              <div className="">
                <Switch>
                  <Route path="/" component={Homepage} />
                </Switch>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </Router >
    </div>
  );
}

export default App;
