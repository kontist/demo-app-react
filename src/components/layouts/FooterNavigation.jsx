import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';  // reactstrap styling components
import {withRouter} from "react-router-dom";

const FooterNavigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={"wrapper"}>
            <Navbar light expand="md">
                <NavbarBrand>Kontist SDK Demo</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href={"https://github.com/kontist/sdk"}>GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"https://kontist.dev"}>Kontist.dev</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"https://kontist.com"}>Kontist.com</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
};

export default withRouter(FooterNavigation);