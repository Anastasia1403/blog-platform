import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    width: 100%;
    height: 60px;
    background-color: #660404;
    color: #ffffff;
    padding: 16px;
`;

export const NavBar = styled.nav`
    margin: 0 auto;
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: center;
`;

export const NavLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    &:hover, &:focus, &:active {
        color: #fce269;
    }
`;
