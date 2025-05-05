import { Link } from 'react-router-dom';
import styles from './navItem.module.scss'

const NavItem = ( { icon, text } ) => {
    return ( 
        
            <Link className={styles.link} to={`/${text}`}>
            <div className={styles.iconBox}>
                <img src={icon} alt="Icon" />
            </div>
            <p className={styles.itemText}>{text}</p>
            </Link>
           
       
        
     );
}
 
export default NavItem;