import { useState } from 'react'
import styles from './burger.module.scss'
import BurgerDrawer from '../burgerDrawer/BurgerDrawer';
const Burger = ({img, closeIcon, locationPin, callRinging }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    
    
      const toggleCart = () => {
        setIsCartOpen(prev => !prev);
      };

    return ( 
        <>

    <div className={styles.burgerBlock} onClick={toggleCart}>
            <img src={img} alt="" />
        </div>

        <BurgerDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} closeIcon={closeIcon} locationPin={locationPin} callRinging={callRinging} />
        </>
        
     );
}
 
export default Burger;