import {JSX} from 'react';

import usuario from '../../assets/usuario.png';

import estilo from './Login.module.css';

function Login(): JSX.Element {
    const atalhos = [
        'Cadastro de Clientes',
        'Lista de Clientes',
        'Cadastro de Produtos',
        'Lista de Produtos',
        'Cadastro de Pedidos',
        'Lista de Pedidos',
    ];

    return (
        <main className={estilo.principal}>
            <div className={estilo['usuario']}>
                <img className={estilo.imgUsuario} src={usuario} alt="Foto Usuário" />
                <h1>Ana Paula</h1>
                <p>contato@protegeja.c...</p>
            </div>
           
            <div className={estilo.atalhos}>
                <h3>Atalhos</h3>
                <div className={estilo.listaAtalhos}>
                    {atalhos.map((atalho, index) => (
                        <label key={index} className={estilo.itemAtalho}>
                            {atalho}
                        </label>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Login;
