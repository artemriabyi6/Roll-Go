import { useEffect } from "react";
import styles from "./burgerDrawer.module.scss";
import { images } from '../../utils/images';
import MobMenuItems from "../mobMenuItem/MobMenuItem";
import { Link } from "react-router-dom";


const menuItems = [
    {
        text: "Роли",
        img: images.icons.roll,
        path: '/roll'
    },{
        text: "Сети",
        img: images.icons.set,
        path: '/set'

    },
    {
        text: "Від шефа",
        img: images.icons.geisha,
        path: '/chef'

    },
    {
        text: "Напої",
        img: images.icons.can,
        path: '/drinks'

    }
]

const BurgerDrawer = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains(styles.backdrop)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className={`${styles.backdrop} ${isOpen ? styles.open : ""}`} />
      <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
        <button onClick={onClose} className={styles.closeBtn}>
          <img src={images.icons.cross} alt="" />
        </button>

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

      <div className={styles.menuItemsBlock}>
        {
          menuItems.map((item, index) => (
              <MobMenuItems key={index} text={item.text} img={item.img} path={item.path}/>
          ))
        }
      </div>

      <ul className={styles.navItemsBlock}>
          <li className={styles.navItem}><Link to='/set'>Меню</Link></li>
          <li className={styles.navItem}><Link to='/special'>Акції</Link></li>
          <li className={styles.navItem}><Link to='/delievery'>Доставка/Оплата</Link></li>
          <li className={styles.navItem}><Link to='/contact'>Контакти</Link></li>
        </ul> 
        </div>
    
    </>
  );
};

export default BurgerDrawer;
