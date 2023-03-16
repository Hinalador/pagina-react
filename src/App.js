import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header
        logo="wiqayalogoytexto"
        bt1="Inicio"
        bt2="Nosotros"
        bt3="Jugar"
      />
      <Footer
        Wilogo="wiqayalogoytexto"
        fbicon="fb"
        insicon="ins"
        twiticon="tw"
        contact="CONTACTO"
        numero="Numero de contacto: +57 301-218-06-21"
        sigue="SIGUENOS EN"
      />
    </div>
  );
}

export default App;
