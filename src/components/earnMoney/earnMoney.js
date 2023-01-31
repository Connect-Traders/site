import './earnMoney.css';
import earnMoney from '../../images/earnMoney.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function EarnMoney() {
    return (

        <section className="earnMoney">

            <div className="textBase">
                <h1>Ganhe dinheiro sem sair de casa</h1>
                <h5>Garantia de 30 dias, ou seu dinheiro de volta <FontAwesomeIcon icon={faCaretDown} /></h5>
                <h5>Suporte 24h, 7 dias por semana <FontAwesomeIcon icon={faCaretDown} /></h5>
                <h5>Todo processo é online <FontAwesomeIcon icon={faCaretDown} /></h5>
            </div>

            <div className="imageEarn">
                <img src={earnMoney} alt="Connect Traders"></img>
            </div>

        </section>

    );
}

export default EarnMoney;
