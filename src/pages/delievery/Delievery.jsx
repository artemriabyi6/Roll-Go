import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import styles from './delievery.module.scss'

const DelieveryPage = () => {


    return ( 
       <>
         <Header/>
          <div className={`container ${styles.container }`}>
              <h1 className={styles.title}>Оплата та доставка</h1>
              <p className={styles.order}>Оформити своє замовлення Ви можете:</p>
              <ul className={styles.list}>
                <li>на сайті</li>
                <li>по телефону </li>
              </ul>
              <p className={styles.order}>{`Ми обов'язково телефонуємо для підтвердження замовлення.`}</p>
              <p className={styles.text}><span>Безкоштовна </span>доставка по місту від 600 грн.</p>
              <p className={styles.text}>Платна доставка - 100 грн.</p>
              <p className={styles.text}>Доставка здійснюється в межах міста</p>
              <p className={styles.order}>{`Ми обов'язково телефонуємо для підтвердження замовлення.`}<span>{`(термінали у кур'єрів)`}</span></p>
          </div>
          <div className={styles.mapWrapper}>
          <iframe src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F" width="640" height="480"></iframe>
        </div>

         <Footer/>
       </>
     );
}
 
export default DelieveryPage;