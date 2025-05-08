import { Link } from 'react-router-dom';
import Cart from '../../components/cart/Cart';
import { images } from '../../utils/images';
import styles from'./header.module.scss'
import { useParams } from 'react-router-dom';
import Burger from '../burger/Burger';
const MobileHeader = () => {

    const { menuItem } = useParams()

    return ( 
        <>
         <div className={styles.placeholder}></div>
         <header className={styles.header}>
       
       <div className={`container ${styles.container}`}>
           <div className={styles.logoBlock}>
               <Link to='/'>
               <img src={images.icons.logo} alt="logo" />
               </Link>
           </div>
           <div className={styles.otherBlock}>
              
               <Cart img={images.icons.bag}/>
               <div className={styles.adressBlock}>
               <div className={styles.adressBlockFirstRow}>
                   <div className={styles.adressBlockFirstRowIconBox}>
                       <img src={images.icons.locationPin} alt="Geolocation" />
                   </div>
                   <p className={styles.adressBlockFirstRowText}>Суми</p>
               </div>
               <p className={styles.adressBlockSecondRowText}>Харківська 32</p>
               </div>
               <Burger img={images.icons.burger} closeIcon={images.icons.cross} locationPin={images.icons.locationPin} callRinging={images.icons.callRinging}/>
           </div>
       </div>

       {menuItem !== undefined ? (
             <p className={styles.routeText}>
             {`Roll & go / ${menuItem}`}
         </p>    
       ): null 
       }
   </header>
        </>
       
     );
}
 
export default MobileHeader;