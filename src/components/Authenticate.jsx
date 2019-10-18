import {Button} from "reactstrap";
import React from "react";
import {userService} from "../services/user.service";
import {withRouter} from "react-router-dom";

const Authenticate = (props) => {

    const startAuthentication = () => {
        if(userService.mockupAuthentication())
            props.history.push("/");
        else
            alert("Authentication failed");
    };


    return (<div className={"center"}>
            <h3>Authentication required</h3>
            <p>Please click the button below to authenticate your Kontist account.</p>
            <Button onClick={() => startAuthentication()}>Authenticate with OAuth</Button>
        </div>
    )
};

export default withRouter(Authenticate);