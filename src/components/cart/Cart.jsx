import { useState } from 'react';
import styles from './cart.module.scss';
import CartDrawer from '../cartDrawer/CartDrawer';
import { useCart } from '../../context/CartContext';

const Cart = ({ img }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { totalItems } = useCart()

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <>
      <div className={styles.cartBlock} onClick={toggleCart}>
        <p className={styles.counter}>{totalItems}</p>
        <img src={img} alt="cart icon" />
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Cart;
