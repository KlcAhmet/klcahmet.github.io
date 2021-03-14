import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Homepage, Header, Footer } from './components map/Map'
/* CSS */
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="row">
          <div className="col-1">
            <Header />
          </div>
          <div className="col-11">
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
