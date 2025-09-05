import Keycloak from 'keycloak-js';

// Keycloak configuration
const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
  realm:  import.meta.env.VITE_KEYCLOAK_REALM || 'jarvis',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'jarvis-dashboard',
};

// Initialize Keycloak instance
const keycloak = new Keycloak(keycloakConfig);

// Initialize Keycloak and return a promise
export const initKeycloak = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    keycloak
      .init({
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
        pkceMethod: 'S256',
      })
      .then((authenticated) => {
        resolve(authenticated);
      })
      .catch((error) => {
        console.error('Keycloak initialization failed:', error);
        reject(error);
      });
  });
};

// Login function
export const login = () => {
  keycloak.login({
    redirectUri: window.location.origin,
  });
};

// Logout function
export const logout = () => {
  keycloak.logout({
    redirectUri: window.location.origin,
  });
};

// Get user profile
export const getUserProfile = () => {
  return keycloak.tokenParsed;
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return keycloak.authenticated;
};

// Get access token
export const getToken = () => {
  return keycloak.token;
};

// Update token
export const updateToken = (minValidity = 30) => {
  return keycloak.updateToken(minValidity);
};

export default keycloak;