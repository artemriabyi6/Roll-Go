import  { useEffect } from 'react';
import styles from './cartDrawer.module.scss';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, totalPrice } = useCart();

  useEffect(() => {
    const handleClickOutside = e => {
      if (e.target.classList.contains(styles.backdrop)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ''}`} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ''}`}>
        <h2 className={styles.title}>Кошик</h2>
        <button onClick={onClose} className={styles.closeBtn}>✕</button>
        {cart.length === 0 ? (
          <p>Кошик порожній</p>
        ) : (
          <ul>
            {cart.map(item => (
              <li key={item.id} className={styles.item}>
                <div className={styles.itemWrapper}>
                  <div className={styles.imgQuantity}>
                   <div className={styles.imgBox}>
                    <img src={item.img} alt="" loading='lazy' />
                    </div> 
                  <div className={styles.quantity}>
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>🗑</button>
                </div>
                  </div>
                  <div className={styles.descPrice}>
                    <h4 className={styles.desc}>{item.desc}</h4>
                    <p className={styles.price}>{item.price} грн</p>
                  </div>
                </div>
               


               
              </li>
            ))}
          </ul>
        )}

        {cart.length !== 0 ? (
          <>
           <div className={styles.totalPrice}>
           <h6>Cумма: {totalPrice} грн</h6>
         </div>

         <button className={styles.confirmOrder}>
          <Link to='/order'>
          Оформити замовлення
          </Link>
         </button>
          </>
          
        ): null}
       
      </div>
    </>
  );
};

export default CartDrawer;
