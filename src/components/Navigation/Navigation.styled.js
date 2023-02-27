import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
    margin: 5px;
    color: black;
    text-decoration: none;
    &.active {
        color: orange;
    }
`;
export const StyledList = styled.ul`
    display: flex;
    flex-direction: row;
`;
