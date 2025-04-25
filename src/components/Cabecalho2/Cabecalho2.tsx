import { JSX } from "react";

import estilo from './Cabecalho2.module.css';

import logotipo from '../../assets/logotipo.png';

import usuario from '../../assets/usuario.png';


function Cabecalho(): JSX.Element {
    return (
        <header className={estilo.cabecalho}>
            <img className={estilo.imgLogo} src={logotipo} alt="logotipo" /> 
            <nav>
                <a href="#">INICIO</a>
                <a href="#">CADASTRO</a>
                <a href="#" className={estilo.active}>ESTOQUE</a>
                <a href="#">CLIENTES</a>
                <a href="#">PEDIDOS</a>
            </nav>
            <img className={estilo.imgUsuario} src={usuario} alt="bandeira" />
        </header>
    );
}

export default Cabecalho;