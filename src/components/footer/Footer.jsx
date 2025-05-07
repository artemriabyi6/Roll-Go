import styles from './footer.module.scss'
import { images } from '../../utils/images';
const Footer = () => {
    return ( 
        <footer>
            <div className={`container ${styles.container}`}>
                <div className={styles.firstRow}>

                    <div className={styles.logoBlock}>
                        <img src={images.icons.logo} alt="" />
                    </div>
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

                    <div className={styles.socialMedia}>
                        <div className={styles.iconBlock}>
                            <img src={images.icons.instagram} alt="" />
                        </div>
                        <div className={styles.iconBlock}>
                            <img src={images.icons.facebook} alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.secondRow}>
                    <div className={styles.firstRow}>
                        <p>Договір публічної оферти </p>
                        <p>Політика конфіденційності</p>
                    </div>
                    <div className={styles.secondRow}>
                        <p>Roll & go © 2025</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;