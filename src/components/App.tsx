import Header from './Header';
import GlobalStyle from '../theme/global';
import Intro from './Intro';
import Services from './Services';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Intro />
      <Services />
    </div>
  );
}

export default App;
