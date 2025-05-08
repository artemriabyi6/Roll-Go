import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './order.module.scss'

const OrderPage = () => {

 
    return ( 
        <>
           <Header/>
              <div className={styles.mapWrapper}>
                     <iframe src="https://www.google.com/maps/d/embed?mid=1IgZb95u-TFJxaDjho8sLNfwMe4XU2Pw&ehbc=2E312F" width="640" height="480"></iframe>
              </div>
           <Footer/>
        </>
     );
}
 
export default OrderPage;