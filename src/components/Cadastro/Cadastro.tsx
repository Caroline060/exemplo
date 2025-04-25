import {JSX} from 'react';

import estilo from './Inicio.module.css';

function Cadastro(): JSX.Element {
    return (
        <main className={estilo.principal}>
            <section className={estilo['form-section']}>
                <h3>Faça seu cadastro:</h3>
                <p>Informe seus dados para cadastro do usuário</p>

                <form action="" className={estilo['form-cadastro']}>
                <label>
                        Nome do Almoxarife
                        <input 
                        type="text" 
                        placeholder='Nome completo do almoxarife'
                        className={estilo['input-nome-login']}
                        />
                    </label>

                    <label>
                        Email
                        <input type="text"
                        placeholder='Informe sua senha' 
                        className={estilo['input-senha-login']}
                        />
                    </label>

                    <label>
                        Telefone
                        <input type="number"
                        placeholder='Informe sua senha' 
                        className={estilo['input-senha-login']}
                        />
                    </label>

                    <label>
                        Setor
                        <input type="text"
                        placeholder='Informe sua senha' 
                        className={estilo['input-senha-login']}
                        />
                    </label>

                    <input 
                        type="button" 
                        value="Entrar"
                        className={estilo['input-button-login']}
                    />
                </form>
            </section>
        </main>
    )
}

export default Cadastro;