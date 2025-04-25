import {JSX} from 'react';

import Login from "../../components/Login/Login";
import Cabecalho from '../../components/Cabecalho1/Cabecalho';

function PHome(): JSX.Element {
    return (
        <div>
            <Cabecalho/>
            <Login/>
        </div>
    )
}

export default PHome;