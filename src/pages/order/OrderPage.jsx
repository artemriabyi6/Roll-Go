// import Header from '../../components/header/Header';
// import Footer from '../../components/footer/Footer';
// import styles from './order.module.scss'
// import { useCart } from '../../context/CartContext';
// const OrderPage = () => {

//    const {cart, totalPrice} = useCart()
 
//     return ( 
//         <>
//            <Header/>
//               <div className={styles.mapWrapper}>
//                      <iframe src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F" width="640" height="480"></iframe>
//               </div>

//                <div className={`container ${styles.container}`}>
//                   <form  className={styles.orderInfoBlock}>
//                   <input type="text" placeholder="Ваше ім'я"/>
//                   <input type="tel" placeholder='Номер телефону' />
//                   </form>
//                   <div className={styles.cartInfo}>
//                      {cart.length > 0 ? (
//                         <>
//                           <h3>Ваш кошик:</h3>
//                      <div>
//                         <ul>
//                                {cart.map((item) => (
//                                  <li key={item.id} className={styles.cartItem}>{item.desc} х {item.quantity}</li>
//                               ))}
//                         </ul>
//                         <p className={styles.totalPrice}>Загальна сума: {totalPrice} грн</p>
//                      </div>
//                         </>
//                      ): (
//                         <p>Ваш кошик порожній</p>
//                      )}
                   
//                   </div>
//                </div>
//                <button className={styles.confirmOrder}>Підтвердити замовлення</button>

//            <Footer/>
//         </>
//      );
// }
 
// export default OrderPage;

import { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './order.module.scss';
import { useCart } from '../../context/CartContext';

const OrderPage = () => {
  const { cart, totalPrice, clearCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (phone) => {
    const phoneRegex = /^\+380\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      setError("Будь ласка, заповніть усі поля");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Невірний формат телефону. Введіть у форматі +380XXXXXXXXX");
      return;
    }

    setError('');
    clearCart();
    setSubmitted(true);
  };

  return (
    <>
      <Header />

      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F"
          width="640"
          height="480"
        ></iframe>
      </div>

      <div className={`container ${styles.container}`}>
        {submitted ? (
          <p className={styles.successMessage}>Дякуємо за замовлення <br /> ✅ Ваше замовлення успішно оформлене!</p>
        ) : (
          <>
            <form onSubmit={handleSubmit} className={styles.orderInfoBlock}>
              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              {error && <p className={styles.error}>{error}</p>}
              <button type="submit" className={styles.confirmOrder}>
                Підтвердити замовлення
              </button>
            </form>

            <div className={styles.cartInfo}>
              {cart.length > 0 ? (
                <>
                  <h3>Ваш кошик:</h3>
                  <ul>
                    {cart.map((item) => (
                      <li key={item.id} className={styles.cartItem}>
                        {item.desc} х {item.quantity}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.totalPrice}>Загальна сума: {totalPrice} грн</p>
                </>
              ) : (
                <p>Ваш кошик порожній</p>
              )}
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default OrderPage;

