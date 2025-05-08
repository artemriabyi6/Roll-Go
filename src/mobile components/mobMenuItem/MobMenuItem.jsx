import styles from './mobMenuItems.module.scss'
import { Link } from 'react-router-dom';


const MobMenuItems = ({ text, img, path, onClose}) => {
    return ( 
        <Link to={path} onClick={onClose}>
        <div className={styles.itemBlock}>
            <div className={styles.imgBlock}>
                    <img src={img} alt="" />
            </div>
            <p className={styles.text}>{text}</p>
        </div>
        </Link>
        
     );
}
 
export default MobMenuItems;