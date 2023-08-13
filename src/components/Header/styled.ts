import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.yellow};
    padding: 12px 20px;
    svg {
        width: 80px;
        height: 80px;
    }
`;
export const LogoLink = styled(Link)`
    display: inline-block;
    svg {
        height: 100%;
        width: auto;
    }
`;

export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;
export const NavbarLink = styled(Link)`
    font-family: 'GFS Neohellenic', sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
`;
