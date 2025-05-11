// import { useState } from 'react';
// import styles from './cart.module.scss';
// import CartDrawer from '../cartDrawer/CartDrawer';
// import { useCart } from '../../context/CartContext';

// const Cart = ({ img }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const { totalItems } = useCart()

//   const toggleCart = () => {
//     setIsCartOpen(prev => !prev);
//   };

//   return (
//     <>
//       <div className={styles.cartBlock} onClick={toggleCart}>
//         <p className={styles.counter}>{totalItems}</p>
//         <img src={img} alt="cart icon" />
//       </div>

//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   );
// };

// export default Cart;

import { useState, useEffect, useRef } from 'react';
import styles from './cart.module.scss';
import CartDrawer from '../cartDrawer/CartDrawer';
import { useCart } from '../../context/CartContext';

const Cart = ({ img }) => {
  const [isCartOpen, setIsCartOpen]   = useState(false);
  const [isBouncing, setIsBouncing]   = useState(false);
  const { totalItems }                = useCart();
  const prevTotalRef                  = useRef(totalItems);

  // compare previous and current totals
  useEffect(() => {
    if (totalItems > prevTotalRef.current) {
      // trigger bounce
      setIsBouncing(true);
      // turn it off after animation ends
      const timer = setTimeout(() => setIsBouncing(false), 500);
      return () => clearTimeout(timer);
    }
    prevTotalRef.current = totalItems;
  }, [totalItems]);

  const toggleCart = () => {
    setIsCartOpen(open => !open);
  };

  return (
    <>
      <div
        className={`${styles.cartBlock} ${isBouncing ? styles.bounce : ''}`}
        onClick={toggleCart}
      >
        <p className={styles.counter}>{totalItems}</p>
        <img src={img} alt="cart icon" />
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Cart;