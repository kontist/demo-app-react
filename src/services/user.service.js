export const userService = {
    isAuthenticated,
    clearAuthentication,
    mockupAuthentication
};

const AUTH_TOKEN = "token";

function isAuthenticated() {
    return (sessionStorage.getItem(AUTH_TOKEN) != null);
}

function clearAuthentication() {
    sessionStorage.removeItem(AUTH_TOKEN);
}

// TODO: change to real sdk usage
function mockupAuthentication() {
    sessionStorage.setItem(AUTH_TOKEN, "MOCKUP");
    return true;
}