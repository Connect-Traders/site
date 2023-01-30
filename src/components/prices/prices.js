import './prices.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Prices() {
    return (

        <section className="prices">

            <div className="title">
                <h1>Um plano único, com um preço acessível</h1>
            </div>

            <div className="subtitle">
                <h3>Não perca tempo, adquira hoje mesmo!</h3>
            </div>

            <div className="box">
                <h4>Standard</h4>
                <h2>R$ 99,90</h2>
                <h3>por mês</h3>
            </div>

            <div className="box2">
                <p><FontAwesomeIcon icon={faCheckCircle} /> Resultados Diários</p>
                <p><FontAwesomeIcon icon={faCheckCircle} /> Suporte 24/7</p>
                <p><FontAwesomeIcon icon={faCheckCircle} /> Relatório dos Jogos</p>
                <p><FontAwesomeIcon icon={faCheckCircle} /> Alta Assertividade</p>
                <p><FontAwesomeIcon icon={faCheckCircle} /> Atendimento Exclusivo</p>
                <br /><br />
                <a href="https://wa.me/5535984725652" target="_blank" rel="noreferrer">Adquira Já</a>
                <br /><br />
            </div>

        </section>

    );
}

export default Prices;
