import {JSX} from 'react';

import Login from "../../components/Login/Login";
import Cabecalho from '../../components/Cabecalho1/Cabecalho';
import Inicio from '../../components/Inicio/Inicio'
import Cabecalho2 from '../../components/Cabecalho2/Cabecalho2'

function PHome(): JSX.Element {
    return (
        <div>
            <Cabecalho2/>
            <Inicio/>
        </div>
    )
}

export default PHome;