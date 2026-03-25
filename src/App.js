import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

// added for routing to project details page
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  /*
  Instead of rendering the Main component directly, we wrap it in a Router 
  and define routes for the main page and project details page. The Switch component 
  ensures that only one route is rendered at a time.

  return (
    <div>
      <Main />
    </div>
  );
  */
 
  return (
    <Router>
      <Switch>
        <Route path="/projects/email-validation" component={ProjectDetail} />
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
