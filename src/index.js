import ReactDOM from "react-dom";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Import styles
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import Components
import Main from "./Components/Main/Main";
import NotFound from "./Components/UI/NotFound";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

//import store
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Provider store={store}>
            <Route path="/" exact render={() => <Main />} />
            <Route path="/new-contact" exact render={() => <AddContact />} />
            <Route path="/edit-contact" exact render={() => <EditContact />} />
          </Provider>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
