import './thebest.css';
import image from '../../images/theBest.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function TheBest() {
    return (
        <section className="thebest">
            <div className="image">
                <img src={image} alt="Connect Traders"></img>
            </div>
            <div className="text">
                <h1>Nós somos a melhor casa de apostas</h1>
                <h4>Obtenha conselhos de especialistas e tenha resultados positivos todos os dias.</h4>
                <ul>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Alta Assertividade</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Ganhos Diários</li>
                    <li><FontAwesomeIcon icon={faCheckCircle} /> Suporte 24/7</li>
                </ul>
            </div>
        </section>
    );
}

export default TheBest;
