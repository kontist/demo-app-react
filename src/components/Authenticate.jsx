import {Button, Spinner} from "reactstrap";
import React from "react";
import {userService} from "../services/user.service";
import {withRouter} from "react-router-dom";
import kontistClient from "../services/kontist.service";

const Authenticate = (props) => {
    // Get code from url to fetch access token from api
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const code = params.get('code');
    if(code !== null){
        kontistClient.auth.fetchToken(window.location.href).then(function (token) {
            if(token.accessToken) {
                userService.setToken(token.accessToken);
                props.history.push("/");
            }
        });
        return (<Spinner />)
    }else {
        const startAuthentication = () => {
            kontistClient.auth.getAuthUri().then(redirectUrl => {
                window.location.href = redirectUrl;
            });
        };

        return (<div className={"center"}>
                <h3>Authentication required</h3>
                <p>Please click the button below to authenticate your Kontist account.</p>
                <Button onClick={() => startAuthentication()}>Authenticate with OAuth</Button>
            </div>
        )
    }
};

export default withRouter(Authenticate);