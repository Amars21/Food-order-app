import React,{ useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';



function App() {

  const [shownCart, setShownCart]= useState(false);

  function ShowHandler(){
    setShownCart(true);
  }

  function HideHandler(){
    setShownCart(false);
  }

  function CloseCart(){
    setShownCart(false);
  }

  return (
    <CartProvider>
      {shownCart &&<Cart onClose={CloseCart} />}
      <Header onShowCart={setShownCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
