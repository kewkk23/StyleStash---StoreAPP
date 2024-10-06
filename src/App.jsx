import Footer from './_components/Footer';
import Hero from './_components/Hero';
import KidsPage from './_components/KidsPage';
import Navbar from './_components/Navbar';
import ProductPage from './_components/ProductPage';
import WinterPage from './_components/WinterPage';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Importuj CartProvider
import CheckoutPage from './_components/CheckoutPage';
import SuccessPage from './_components/SuccessPage';
import Contact from './_components/Contact';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/kids' element={<KidsPage />} />
          <Route path='/winter' element={<WinterPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/success' element={<SuccessPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
