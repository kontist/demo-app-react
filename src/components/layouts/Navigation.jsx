import React, { useState, useEffect } from "react";
import config from "../../app.yaml"; // import app settings
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"; // reactstrap styling components
import { withRouter } from "react-router-dom";
import { userService } from "../../services/user.service";
import kontistClient from "../../services/kontist.service";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const goHome = () => {
    props.history.push("/");
  };

  const goLogout = () => {
    props.history.push("/logout");
  };

  const toggle = () => setIsOpen(!isOpen);

  // fetch firstName and lastName from Kontist API
  useEffect(() => {
    kontistClient.models.user.get().then(function(user) {
      setName(`${user.firstName} ${user.lastName}`);
    });
  }, []);

  return (
    <div className={"wrapper"}>
      <Navbar light expand="md">
        <NavbarBrand className={"linked"} onClick={() => goHome()}>
          {config.title}
        </NavbarBrand>
        {/* check if the user isAuthenticated before showing links for new transfer and logout */}
        {userService.isAuthenticated() ? (
          <React.Fragment>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <div className={"username"}>
                  {name ? `Logged in as ${name}` : ""}
                </div>
                <NavItem>
                  <NavLink className={"linked"} onClick={() => goLogout()}>
                    Logout
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </React.Fragment>
        ) : null}
      </Navbar>
    </div>
  );
};

export default withRouter(Navigation);
