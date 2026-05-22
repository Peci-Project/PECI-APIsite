import React from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import { useKeycloak } from '@react-keycloak/web';

export default function ProtectedDropdown(props: any) {
  const { keycloak, initialized } = useKeycloak();

  const userRoles = keycloak.authenticated 
    ? keycloak.tokenParsed?.realm_access?.roles || [] 
    : [];

  const filteredItems = props.items.filter((item: any) => {
    const requiredRoles = item.customProps?.allowedRoles;

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }
    return requiredRoles.some((role: string) => userRoles.includes(role));
  });

  if (filteredItems.length === 0) return null;

  return <DropdownNavbarItem {...props} items={filteredItems} />;
}