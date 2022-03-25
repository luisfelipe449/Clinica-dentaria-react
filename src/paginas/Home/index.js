import React from "react";
import { Link } from "react-router-dom";
import CardsClientes from "../../componentes/CardsClientes";

import EstruturaPagina from "../../componentes/EstruturaPagina";
import ListaServicos from "../../componentes/ListaServiços";
import ListaSobre from "../../componentes/ListaSobre";

import "./estilo.css";

const Home = () => {
  return (
    <EstruturaPagina>
      <div className="home-apresentacao">
        <div className="limitar-container">
          <h1>
            Os melhores <span>aparelhos dentários</span>!
          </h1>

          <p>
            Confira abaixo todas as especialidades odontológicas que temos à sua
            disposição!
          </p>

          <ul className="lista-servicos">
            <ListaServicos
              imagemServico="assets/dente.png"
              servicos="Pré-avaliação"
            />
            <ListaServicos
              imagemServico="assets/dente.png"
              servicos="Aparelhos Dentários"
            />
            <ListaServicos
              imagemServico="assets/dente.png"
              servicos="Raio-X digital"
            />
            <ListaServicos
              imagemServico="assets/dente.png"
              servicos="Clareamento dental"
            />
          </ul>
        </div>
      </div>

      <h2 className="titulo-sessao">
        Por que usar <b>aparelho</b>?
      </h2>

      <img
        className="img-aparelho"
        src="assets/aparelho.png"
        alt="Imagem do uso de um aparelho"
        title="Imagem do uso de um aparelho"
      />

      <ul className="lista-sobre-aparelho limitar-container">
        <ListaSobre
          titulo="Alinhar os dentes"
          descricao="Dentes desalinhados causam problemas nos dentes e podem afetar a
            digestão dos alimentos e a respiração."
        />
        <ListaSobre
          titulo="Melhorar a dicção e a higiene dentária"
          descricao="Muitas pessoas não conseguem nem usar fio dental devido à posição da
          sua dentição. Contudo, a correção possibilita o cuidado com a saúde
          bucal de forma bem mais ampla."
        />
        <ListaSobre
          titulo="Corrigir espaço entre os dentes"
          descricao="Uma dentição desalinhada e com espaços significativos incomodam
          muitas pessoas. Usar aparelho nos dentes é uma das formas mais
          eficientes para que esses problemas possam ser corrigidos."
        />
      </ul>

      <h2 className="titulo-sessao">
        Veja o que nossos <b>clientes</b> estão falando...
      </h2>

      <div className="home-depoimentos">
        <ul className="lista-depoimentos">
          <CardsClientes
            nomeCliente="Alberto"
            imagemCard="assets/cliente01.png"
            depoimento="Usei aparelho por 2 anos e agora posso sorrir novamente."
          />
          <CardsClientes
            nomeCliente="Eliana"
            imagemCard="assets/cliente02.png"
            depoimento="Meus dentes eram espaçados e depois de 1 ano estão no lugar certo."
          />
          <CardsClientes
            nomeCliente="Carla"
            imagemCard="assets/cliente03.png"
            depoimento="Começei a usar ano passado e já estou notando a diferença."
          />
        </ul>
      </div>

      <div>
        <Link to="/contato" className="btn-contato">
          Entrar em contato
        </Link>
      </div>
    </EstruturaPagina>
  );
};

export default Home;
