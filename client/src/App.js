import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/pages/Home";
import GlobalStyles from "./components/styles/GlobalStyles";
import store from "./store";
import { Provider } from "react-redux";
import PrivateRoutes from "./components/routing/PrivateRoutes";

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <Switch>
            <PrivateRoutes exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
