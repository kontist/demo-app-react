import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import './App.scss';
import Navigation from "./components/layouts/Navigation"
import {userService} from "./services/user.service";
import FooterNavigation from "./components/layouts/FooterNavigation";
import Authenticate from "./components/Authenticate";
import Transactions from "./components/Transactions";

function AuthenticationRoute(){
    if(!userService.isAuthenticated())
        return <Authenticate />;
    else
        return <Redirect to={"/"} />
}

function TransactionsRoute(){
    if(userService.isAuthenticated())
        return <Transactions />;
    else
        return <Redirect to={"/auth"} />
}

function Logout() {
    userService.clearAuthentication();
    return <Redirect to={"/auth"} />
}

function App() {
  return (
      <Router>
        <header>
          <Navigation />
        </header>
        <main className={"wrapper"}>
          <Route path={"/auth"} component={AuthenticationRoute} />
          <Route path={"/"} exact component={TransactionsRoute} />
          <Route path={"/logout"} component={Logout} />
        </main>
          <footer>
              <FooterNavigation />
          </footer>
      </Router>
  );
}

export default App;
