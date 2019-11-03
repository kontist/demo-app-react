export const userService = {
  isAuthenticated,
  clearAuthentication,
  setToken,
  getToken
};

const AUTH_TOKEN = "token";

function isAuthenticated() {
  return sessionStorage.getItem(AUTH_TOKEN) != null;
}

function clearAuthentication() {
  sessionStorage.removeItem(AUTH_TOKEN);
}

function setToken(accessToken) {
  sessionStorage.setItem(AUTH_TOKEN, accessToken);
}

function getToken() {
  return sessionStorage.getItem(AUTH_TOKEN);
}
