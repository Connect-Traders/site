import './numbers.css';
import numbers from '../../images/numbers.jpg';

function Numbers() {
    return (

        <section className="numbers">
            <div className="imageNb">
                <img src={numbers} alt="Numbers"></img>
            </div>
            
            <div className="text1">
                <h2>+50</h2>
                <h4>Usuários<br />ativos</h4>
            </div>
            <div className="text2">
                <h2>1800</h2>
                <h4>Jogos<br />analisados</h4>
            </div>
            <div className="text1">
                <h2>98%</h2>
                <h4>Assertividade</h4>
            </div>
        </section>

    );
}

export default Numbers;
