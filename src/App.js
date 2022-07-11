
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Header from './components/Navbar/Header'
import MobileSideBar from './components/MobileSideBar/MobileSideBar';

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
  <MobileSideBar/>
   <Header/>
  </BrowserRouter>
  </>
  </ThemeProvider>
  );
}

export default App;
