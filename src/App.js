import { useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";

function App() {

  const [isCartShown, setIsCartShown] = useState(false)

  const onShowCart = () => {
    setIsCartShown(true)
  }
  const onHideCart = () => {
    setIsCartShown(false)
  }
  return (
    <CartProvider>
      {isCartShown && <Cart onClose={onHideCart} />}
      <Header onShowCart={onShowCart} />
      <main>

        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
