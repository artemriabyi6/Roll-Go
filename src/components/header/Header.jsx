import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../utils/images';
import styles from './header.module.scss';
import { useParams } from 'react-router-dom';
import Cart from '../cart/Cart';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const { menuItem } = useParams()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={isScrolled ? styles.placeholder : ''}></div>
            <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.logoBlock}>
                        <Link to='/'>
                        <img src={images.icons.logo} alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.otherBlock}>
                        <nav className={styles.navigation}>
                            <ul>
                                <li>
                                    <Link to='/set' className={styles.menuItem}>Меню</Link>
                                </li>
                                <li>
                                    <Link to='/special' className={`${styles.menuItem} ${styles.specialItem}`}>Акції</Link>
                                </li>
                                <li>
                                    <Link to='/delievery' className={styles.menuItem}>Доставка/Оплата</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className={styles.menuItem}>Контакти</Link>
                                </li>
                            </ul>
                        </nav>
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

                {menuItem !== undefined ? (
                      <p className={styles.routeText}>
                      {`Roll & go / ${menuItem}`}
                  </p>    
                ): null 
                }
              
            </header>
        </>
    );
};

export default Header;


