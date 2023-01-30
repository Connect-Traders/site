import './App.css';
import Header from './components/header/header';
import TheBest from './components/thebest/theBest';
import Numbers from './components/numbers/numbers';
import EarnMoney from './components/earnMoney/earnMoney';
import Recommended from './components/recommended/recommended';
import Testimonials from './components/testimonials/testimonials';
import Prices from './components/prices/prices';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="Site">
      <Header />
      <TheBest />
      <Numbers />
      <EarnMoney />
      <Recommended />
      <Testimonials />
      <Prices />
      <Footer />
    </div>
  );
}

export default App;
