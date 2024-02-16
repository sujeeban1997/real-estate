import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Properties from './Component/Properties';
// import Product from './Component/Product';
import { BrowserRouter  , Routes,  Route } from 'react-router-dom';
// import Cart from './Component/Cart';
import PropertyDetails from './Component/PropertyDetails';
import About from './Component/About';
import FavouriteList from './Component/FavouriteList';
import Cart from './Component/Cart';
import { CartProvider } from 'react-use-cart';

function App() { 
  return (
    <>
    <CartProvider>
      <Navbar />
          <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/properties" Component={Properties} />
                <Route exact path="/cart" Component={Cart} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/products/:id" Component={PropertyDetails} />
                {/* <Route exact path="/products/:id" Component={Product} /> */}
                {/* <Route exact path="/cart" Component={Cart} /> */}
          </Routes>
          </CartProvider>
    </>
  );
}

export default App;
