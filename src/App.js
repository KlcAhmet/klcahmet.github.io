import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import { Homepage } from './components map/Map'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <div className="">
            <Switch>
              <Route path="/" component={Homepage} />
            </Switch>
          </div>
        </main>
        <Footer />
      </Router >
    </div>
  );
}

export default App;
