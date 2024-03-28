import './App.css';
import Navbar from './Components/navbar/Navbar';
import NavRoutes from './Routes';
import ScrollToTop from './Components/scrollToTop/scrollToTop';
import Footer from './Components/Footer/footer'
import SnackbarProvider from 'react-simple-snackbar'


export default function App() {

  return (
    <>
      <Navbar />
      <SnackbarProvider>
        <NavRoutes />
      </SnackbarProvider>
      <ScrollToTop />
      <Footer />
    </>
  );
}