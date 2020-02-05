import React from 'react';
import './App.scss';
import { Button } from 'carbon-components-react';
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenu,
  HeaderMenuItem
} from "carbon-components-react/lib/components/UIShell";

const App = () => {
  return (
    <Header aria-label="IBM Platform Name">
    <HeaderName href="#" prefix="IBM">
      [Platform]
    </HeaderName>
    <HeaderNavigation aria-label="IBM [Platform]">
      <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
      <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
      <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
        <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
      </HeaderMenu>
    </HeaderNavigation>
  </Header>
  );
}

export default App;
