import Header from '../Header';
import { Outlet } from 'react-router-dom';
import { MainBlock } from './styled';

function Layout() {
    return (
        <>
            <Header />
            <MainBlock>
                <Outlet />
            </MainBlock>
        </>
    );
}

export default Layout;
