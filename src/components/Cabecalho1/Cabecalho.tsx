import { JSX } from "react";

import estilo from './Cabecalho.module.css';

import logotipo from '../../assets/logotipo.png';

import bandeira from '../../assets/bandeira.png';

import {APP_ROUTES} from '../../appConfig';

function Cabecalho(): JSX.Element {
    return (
        <header className={estilo.cabecalho}>
            <img className={estilo.imgLogo} src={logotipo} alt="logotipo" /> 
            <img className={estilo.imgBandeira} src={bandeira} alt="bandeira" />
        </header>
    );
}

export default Cabecalho;