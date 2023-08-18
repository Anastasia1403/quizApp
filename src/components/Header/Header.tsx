import { HeaderWrapper, LinkText, LogoLink, Navbar, NavbarLink } from './styled';
import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg';

function Header() {
    return (
        <HeaderWrapper>
            <LogoLink to='/'>
                <Logo />
            </LogoLink>
            <Navbar>
                <NavbarLink to='/'>
                    <LinkText data-text="Quizzes">
                        Quizzes
                    </LinkText>
                </NavbarLink>
                <NavbarLink to='/new-quiz'>
                    <LinkText data-text="New quiz"> 
                        New quiz
                    </LinkText>
                </NavbarLink>
            </Navbar>
        </HeaderWrapper>
    );
}

export default Header;
