import React from 'react';
import { NavBar, NavLink, StyledHeader } from './styled';

function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/authors">Authors</NavLink>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
