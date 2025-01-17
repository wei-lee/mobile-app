import { MobileServiceConfigurations } from './config.service';

const mockFullConfig = {
  "clientId": "app1",
  "namespace": "mobile-developer-console",
  "version": 1,
  "clusterName": "test",
  "services": [
    {
      "config": {
        "auth-server-url": "https://sso-user-sso.apps.demo-1762.open.redhat.com/auth",
        "confidential-port": 0,
        "public-client": true,
        "realm": "app1-realm",
        "resource": "app1-client",
        "ssl-required": "external"
      },
      "id": "fba3edde-d49a-11e9-be3a-025c402b324e",
      "name": "keycloak",
      "type": "keycloak",
      "url": "https://sso-user-sso.apps.demo-1762.open.redhat.com/auth"
    }
  ]
};

const mockEmptyConfig = {
  "clientId": "app1",
  "namespace": "mobile-developer-console",
  "version": 1,
  "clusterName": "test",
  "services": []
};

describe('ConfigService', () => {
  it('#getKeycloakConfig should return data', () => {
    const service = new MobileServiceConfigurations(mockFullConfig) 
    expect(service.getKeycloakConfig()).toEqual(mockFullConfig.services[0]);
  });

  it('#getKeycloakConfig should return null', () => {
    const service = new MobileServiceConfigurations(mockEmptyConfig) 
    expect(service.getKeycloakConfig()).toBeNull();
  });
});