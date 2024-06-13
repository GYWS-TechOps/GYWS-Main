import './App.css';
import Navbar from './Components/navbar/Navbar';
import NavRoutes from './Routes';
import ScrollToTop from './Components/scrollToTop/scrollToTop';
import Footer from './Components/Footer/footer'
import { Toaster } from "react-hot-toast";


export default function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <NavRoutes />
      <ScrollToTop />
      <Footer />
    </>
  );
}