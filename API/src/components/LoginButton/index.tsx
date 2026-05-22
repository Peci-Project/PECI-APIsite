import React from 'react';
import { useKeycloak } from '@react-keycloak/web';

export default function LoginButton() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return (
      <button className="button button--secondary" style={{ margin: '8px 16px' }} disabled>
        A ligar...
      </button>
    );
  }

  const nomeUtilizador = keycloak.tokenParsed?.name || keycloak.tokenParsed?.preferred_username || 'User';

  return (
    <button 
      className="button button--primary" 
      style={{ margin: '8px 16px', display: 'flex', alignItems: 'center' }}
      onClick={() => keycloak.authenticated ? keycloak.logout() : keycloak.login()}
    >
      {keycloak.authenticated ? `Sair - ${nomeUtilizador}` : 'Iniciar Sessão'}
    </button>
  );
}