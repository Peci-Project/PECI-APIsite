import DefaultComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import LoginButton from '@site/src/components/LoginButton';
import ProtectedDropdown from '@site/src/components/ProtectedDropdown';

export default {
  ...DefaultComponentTypes,
  'custom-LoginButton': LoginButton,
  'custom-ProtectedDropdown': ProtectedDropdown,
};