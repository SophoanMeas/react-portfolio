
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Hero from './components/Hero/Hero';

const theme = {
  colors: {
    header: '#35347f',
    activeNavLink:'#00C9A7',
    hero: '#1b3025',
    footer: '#35347f',
    fontColor: '#ffff',
    pBgColor: '#000000',
    sBgColor: '#525073',
    pColor: '#93939d',
    sColor: '#f3f6f6'
  }
}

function App() {
  return (
  <ThemeProvider theme = {theme}>
    <>
  <BrowserRouter>
 <Home/>
  </BrowserRouter>
  </>
  </ThemeProvider>
  );
}

export default App;
