import Header from './Header';
import GlobalStyle from '../theme/global';
import Intro from './Intro';
import Services from './Services';
import About from './About';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Intro />
      <Services />
      <About />
    </div>
  );
}

export default App;
