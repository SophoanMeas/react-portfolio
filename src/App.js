
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';

const theme = {
  colors: {
    header: '#1e2321',
    activeNavLink:'#4f7273',
    hero: '#1b3025',
    footer: '#4f7273',
    font: 'black',
    secondaryColor: '#f3f6f6'
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
