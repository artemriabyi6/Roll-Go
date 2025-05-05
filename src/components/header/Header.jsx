import { Link } from 'react-router-dom';
import { images } from '../../utils/images';
import styles from './header.module.scss';
import NavItem from '../navItem/NavItem';

const Header = () => {
    return ( 
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <div className={styles.logoBlock}>
                    <img src={images.icons.logo} alt="logo" />
                </div>
                <div className={styles.otherBlock}>
                    <nav className={styles.navigation}>
                        <ul>
                            <li>
                                <Link to='/сети' className={styles.menuItem}>Меню</Link>
                            </li>
                            <li>
                                <Link to='/акції' className={`${styles.menuItem} ${styles.specialItem}`}>Акції</Link>
                            </li>
                            <li>
                                <Link to='/delievery' className={styles.menuItem}>Доставка/Оплата</Link>
                            </li>
                            <li>
                                <Link to='/contact' className={styles.menuItem}>Контакти</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.adressBlock}>
                        <div className={styles.adressBlockFirstRow}>
                            <div className={styles.adressBlockFirstRowIconBox}>
                                <img src={images.icons.locationPin} alt="Geolocation" />
                            </div>
                            <p className={styles.adressBlockFirstRowText}>Суми</p>
                        </div>
                        <p className={styles.adressBlockSecondRowText}>Харківська 32</p>
                    </div>

                    <div className={styles.contactBlock}>
                        <div className={styles.contactBlockFirstRow}>
                            <div className={styles.contactBlockFirstRowIconBox}>
                                <img src={images.icons.callRinging} alt="call" />
                            </div>
                            <p className={styles.contactBlockFirstRowText}>099 500 11 15</p>
                        </div>
                        <p className={styles.contactBlockSecondRowText}>з 10-30 до 21-00</p>
                    </div>
                </div>
            </div>
            <div className={styles.stickyNav}>
            <div className={`container ${styles.container}`}>
                    <NavItem icon={images.icons.roll} text='Роли' />
                    <NavItem icon={images.icons.set} text='Сети' />
                    <NavItem icon={images.icons.geisha} text="З любов'ю від шефа" />
                    <NavItem icon={images.icons.can} text='Напої' />
                    <NavItem icon={images.icons.pizza} text='Піца' />
                    <NavItem icon={images.icons.sale} text='Акції' />
            </div>
            </div>
            
        </header>
    );
}

export default Header;



