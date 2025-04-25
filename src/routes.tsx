import {JSX} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {APP_ROUTES} from './appConfig'
import PHome from './pages/PHome/PHome';

function AppRoutes(): JSX.Element {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_HOME} element={<PHome/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;