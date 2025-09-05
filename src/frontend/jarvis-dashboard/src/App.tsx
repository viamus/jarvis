import { useState, useEffect } from 'react';
import { initKeycloak, isAuthenticated } from './services/keycloak';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import './App.css';

function App() {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeKeycloak = async () => {
      try {
        await initKeycloak();
        setAuthenticated(isAuthenticated() || false);
        setKeycloakInitialized(true);
      } catch (error) {
        console.error('Failed to initialize Keycloak:', error);
        setKeycloakInitialized(true); // Still allow app to load
      } finally {
        // Add a small delay for better UX
        setTimeout(() => {
          setLoading(false);
        }, 1500);
      }
    };

    initializeKeycloak();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!keycloakInitialized) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)',
        color: '#ffffff',
        fontFamily: 'Rajdhani, sans-serif'
      }}>
        <h2>Failed to initialize authentication service</h2>
      </div>
    );
  }

  return (
    <div className="app">
      {authenticated ? <Dashboard /> : <LandingPage />}
    </div>
  );
}

export default App;
