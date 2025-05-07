import Header from "../../components/header/Header";
import Footer from '../../components/footer/Footer'
import styles from './contact.module.scss'


const ContactPage = () => {
    return ( 
       <>
         <Header/>
         <div className={`container ${styles.container}`}>
          <h1 className={styles.title}>Контакти</h1>
          <div className={styles.infoWrapper}>
            <div className={styles.infoBlock}>
              <p className={styles.mainText}>Телефон</p>
              <p className={styles.text}>099 500 11 15</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.mainText}>Адреса
              </p>
              <p className={styles.text}>Харківська 32</p>
            </div>
            <div className={styles.infoBlock}>
              <p className={styles.mainText}>Режим роботи</p>
              <p className={styles.text}>з 10-30 до 21-00</p>
            </div>
          </div>
         </div>
          <div className={styles.mapWrapper}>
                   <iframe src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F" width="640" height="480"></iframe>
                 </div>
         <Footer/>
       </>
     );
}
 
export default ContactPage;