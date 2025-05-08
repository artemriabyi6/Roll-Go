import { images } from '../../utils/images';
import styles from './footer.module.scss'

const MobileFooter = () => {
    return ( 
        <footer>
                   <div className={`container ${styles.container}`}>
                       <div className={styles.firstRow}>
                           <div className={styles.locationBlock}>
                               <div className={styles.iconBlock}>
                                   <img src={images.icons.locationPin} alt="" />
                               </div>
                               <div className={styles.text}>
                                   Суми
                               </div>
                           </div>
       
                           <div className={styles.contactBlock}>
                               <div className={styles.firstRow}>
                               <div className={styles.iconBlock}>
                                   <img src={images.icons.callRinging} alt="" />
                               </div>
                               <p className={styles.text}>099 500 11 15</p>
                               </div>
                               <p className={styles.secondRowText}>з 10-30 до 21-00</p> 
                           </div>
                       </div>

                       <div className={styles.socialMedia}>
                               <div className={styles.iconBlock}>
                                   <img src={images.icons.instagram} alt="" />
                               </div>
                               <div className={styles.iconBlock}>
                                   <img src={images.icons.facebook} alt="" />
                               </div>
                           </div>
       
                       <div className={styles.secondRow}>
                               <p>Договір публічної оферти </p>
                               <p>Політика конфіденційності</p>
                               <p>Roll & go © 2025</p>
                       </div>
                   </div>
               </footer>
     );
}
 
export default MobileFooter;