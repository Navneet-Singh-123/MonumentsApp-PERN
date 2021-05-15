import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import MonumentDetail from "./routes/MonumentDetail";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/monuments/:id/update" component={UpdatePage} />
          <Route exact path="/monuments/:id" component={MonumentDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
