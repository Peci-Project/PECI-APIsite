import React, { useEffect } from 'react';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment'; // <-- Importante

function GlobalTokenInjector({ children }: { children: React.ReactNode }) {
  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || !initialized) return;

    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
      let [resource, config] = args;
      const url = typeof resource === 'string' ? resource : (resource as Request).url;

      if (url.includes('localhost:8280') || url.includes('proxy-api-orcin')) {
        
        if (keycloak.authenticated) {
          try {
            await keycloak.updateToken(30);
            
            config = config || {};
            config.headers = {
              ...config.headers,
              'Authorization': `Bearer ${keycloak.token}`
            };
          } catch (error) {
            console.error('Falha ao atualizar token antes do request', error);
          }
        }
      }

      return originalFetch(resource, config);
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, [keycloak, initialized]);

  return <>{children}</>;
}

export default function Root({children}: {children: React.ReactNode}) {
  if (!ExecutionEnvironment.canUseDOM) {
    return <>{children}</>;
  }

  const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'ua',
    clientId: 'wso2'
  });

  return (
    <ReactKeycloakProvider 
      authClient={keycloak}
      initOptions={{ onLoad: 'check-sso', pkceMethod: 'S256' }}
    >
        <GlobalTokenInjector>
            {children}
        </GlobalTokenInjector>
    </ReactKeycloakProvider>
  );
}