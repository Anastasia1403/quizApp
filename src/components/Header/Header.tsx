import { HeaderWrapper, LogoLink, Navbar, NavbarLink } from './styled';
import { ReactComponent as Logo } from '../../assets/img/svg/logo.svg';

function Header() {
    return (
        <HeaderWrapper>
            <LogoLink to='/'>
                <Logo />
            </LogoLink>
            <Navbar>
                <NavbarLink to='/'>Quizzes</NavbarLink>
                <NavbarLink to='/'>Create new Quiz</NavbarLink>
            </Navbar>
        </HeaderWrapper>
    );
}

export default Header;
