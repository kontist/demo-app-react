import { Client } from "@kontist/client";
import config from "../app.yaml";
import { userService } from "./user.service"; // import app settings

const kontistClient = new Client({
  redirectUri: window.location.origin + "/auth",
  clientId: config.clientId,
  scopes: ["transactions", "accounts", "users", "offline"],
  state: config.verifier,
  verifier: config.verifier
});

if (userService.isAuthenticated())
  kontistClient.auth.setToken(userService.getToken());

export default kontistClient;
