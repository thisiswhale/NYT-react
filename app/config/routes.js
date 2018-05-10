// Include the React library
import React from "react";

// Include the react-router module
import { Route, IndexRoute, Router, browserHistory } from "react-router";
// Reference the high-level components
import Main from "../components/Main";
import Form from "../components/children/Form";
import Results from "../components/children/Results";
import SavedArticles from "../components/children/SavedArticles";


// Export the Routes
const routes = (

  // The high level component is the Router component
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="savedArticles" component={SavedArticles} />
    <IndexRoute component={Form} />
    </Route>
  </Router>

);

export default routes;
