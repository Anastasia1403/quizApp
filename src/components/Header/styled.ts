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

export const LinkText = styled.div`
    position: relative;
    color: ${({ theme }) => theme.colors.blue};
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    :before {
        content: attr(data-text);
        color: ${({ theme }) => theme.colors.darkBlue};
        position: absolute;
        top: 0px;
        transition: 0.3s ease-in-out;
        opacity: 1;
        overflow: hidden;
        max-height: 0%;
    }
`;
export const NavbarLink = styled(Link)`
    position: relative;
    font-family: 'GFS Neohellenic', sans-serif;
    font-weight: 700;
    font-size: 28px;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    padding: 0 12px;
    :before {
        content: '';
        display: block;
        border-radius: 4px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background-color: ${({ theme }) => theme.colors.darkYellow};
        transition: 0.3s ease-in-out;
    }
    :hover {
        :before {
            height: 100%
    }
    } 
    :hover ${LinkText}:before {
        max-height:100%;
    }
`;
