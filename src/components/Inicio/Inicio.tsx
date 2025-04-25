import { JSX } from 'react';
import usuario2 from '../../assets/usuario2.png';
import fundoVerde from '../../assets/fundoVerde.png';
import estilo from './Inicio.module.css';

function Inicio(): JSX.Element {
    const atalhos = [
        { nome: 'Cadastro de Clientes', link: '/cadastro-clientes' },
        { nome: 'Lista de Clientes', link: '/lista-clientes' },
        { nome: 'Cadastro de Produtos', link: '/cadastro-produtos' },
        { nome: 'Lista de Produtos', link: '/lista-produtos' },
        { nome: 'Cadastro de Pedidos', link: '/cadastro-pedidos' },
        { nome: 'Lista de Pedidos', link: '/lista-pedidos' },
    ];

    const pedidosRecentes = [
        { id: 5, cliente: 'Rafael Pasqualini', produto: 'Epi Máscara Descartável Pff1 C/ Válv...', quantidade: 3, data: '26/11/2024' },
        { id: 4, cliente: 'Roberto Lima', produto: 'Máscara de Solda Automática Tona...', quantidade: 1, data: '21/11/2024' },
        { id: 3, cliente: 'Juliana Ferreira', produto: 'Luva de Algodão com Banho de Láte...', quantidade: 2, data: '18/11/2025' },
    ];

    return (
        <main className={estilo.principal}>
            <div className={estilo.imgFundo}>
                <img src={fundoVerde} alt="Fundo" />
            </div>
            <section className={estilo.sidebar}>
                <div className={estilo.usuario}>
                    <img className={estilo.imgUsuario} src={usuario2} alt="Foto Usuário" />
                    <h1>Ana Paula</h1>
                    <p>contato@protegeja.c...</p>
                </div>
                <div className={estilo.atalhos}>
                    <h3>Atalhos</h3>
                    <div className={estilo.listaAtalhos}>
                        {atalhos.map((atalho, index) => (
                            <a key={index} href={atalho.link}>
                                {atalho.nome}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className={estilo.pedidos}>
                <h2>Ultimos pedidos cadastrados</h2>
                <div className={estilo.listaPedidos}>
                    {pedidosRecentes.map((pedido) => (
                        <div key={pedido.id} className={estilo.cardPedido}>
                            <span>{pedido.id}</span>
                            <span>{pedido.cliente}</span>
                            <span>{pedido.produto}</span>
                            <span>{pedido.quantidade}</span>
                            <span>{pedido.data}</span>
                        </div>
                    ))}
                </div>
                <hr className="lista-divisao"/>
                <a href="/lista-pedidos" className={estilo.linkPedidos}>
                    Ir para Lista de Pedidos
                </a>
            </section>
        </main>
    );
}

export default Inicio;
