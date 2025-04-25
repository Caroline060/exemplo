import {JSX} from 'react';

import mulherLogo from '../../assets/mulherLogo.png';

import estilo from './Login.module.css';

function Login(): JSX.Element {
    return (
        <main className={estilo.principal}>
            <div className={estilo['texto-principal']}>
                <h1>Praticidade para <br/> seus negócios!</h1>
            </div>
           
            <div className={estilo.mulherContainer}>
                <img className={estilo.imgMulher} src={mulherLogo} alt="Imagem Logo" />
            </div> 


            <section className={estilo['form-section']}>
                <p>Já possui uma conta? Informe seus dados!</p>
                <h3>Entre agora:</h3>

                <form action="" className={estilo['form-login']}>

                    <label>
                        Nome do Almoxarife
                        <input 
                        type="text" 
                        placeholder='Nome cadastrado'
                        className={estilo['input-nome-login']}
                        />
                    </label>

                    <label>
                        Senha
                        <input type="password"
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

                <hr className="form-divisao"/>
                <div className={estilo["form-rodape"]}>
                    <p>Ainda não tem cadastro?</p>
                    <a href="./Cadastro" className={estilo["cadastro-link"]}>Cadastre-se agora!</a>
                </div>
            </section>

      
            
        </main>
    )
}

export default Login;
