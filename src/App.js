import './App.css';
import Header from './componenets/header/header';
import Signup from './componenets/Signup/Signup';
import ThankYou from './componenets/ThankYou/ThankYou';
import Story from './componenets/Story/Story'
import Events from './componenets/Events/Events';
import Menu from './componenets/Menu/Menu';
import Contact from './componenets/Contact/Contact';

function App() {
  return (
    <div className='app'>
      <ThankYou />
      <div className='logo-main'>
        <img src='imgs/extract-logo.webp' alt='logo'></img>
        <h2>Cafe / Bar / Venue</h2>
        <h3>427 Wyckoff Avenue, Brooklyn, NY</h3>
        <h3>10 AM - 2 AM Everyday</h3>
      </div>
      <Header />
      <Signup />
      <div className='background-img'></div>
      <Story />
      <Events />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
