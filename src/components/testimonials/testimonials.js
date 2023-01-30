import './testimonials.css';
import vector from '../../images/bubble.png';
import user from '../../images/testimonial.jpg';

function Testimonials() {
    return (

        <section className="testimonials">
            
            <div className="title">
                <h1>O que nossos clientes estão dizendo</h1>
            </div>
            
            <div className="vector">
                <img src={vector} alt="Testimonials"></img>
            </div>

            <div className="citation">
                <h3>"O sistema funciona perfeitamente, não troco por qualquer outro!"</h3>
            </div>

            <div className="userTestimonial">
                <img src={user} alt="User Testimonial"></img>
            </div>

            <div className="userName">
                <h5>Paulo Tanaka</h5>
            </div>
            
        </section>

    );
}

export default Testimonials;
