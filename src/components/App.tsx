import Header from './Header';
import GlobalStyle from '../theme/global';
import Intro from './Intro';
import Services from './Services';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Intro />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
