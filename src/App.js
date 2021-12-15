import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Main from "./routes/Main";

function App() {
  return (
    <Router>
      <Switch>
        {/* 영화 하나 보기 */}
        <Route path="/movie/:id">
          <Detail/>
        </Route>
        {/* 영화 하나 보기 */}
        <Route path="/">
          <Main/>
        </Route>
        
      </Switch>
    </Router>);
  
}

export default App;
