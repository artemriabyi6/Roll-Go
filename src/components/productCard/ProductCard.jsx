import styles from './productCard.module.scss'
import { useCart } from '../../context/CartContext';

const ProductCard = ({ img, weight, desc, composition, price, id }) => {

    const { addToCart, cart } = useCart();

    const handleAddToCart = () => {
        
        addToCart({
            id,
            img,
            weight,
            desc,
            composition,
            price,
        });
    };

    return ( 
        <div className={styles.productWrapper} key={id}>
                <div className={styles.imgBox}>
                    <img src={img} alt="" />
                    <p className={styles.price}>{price} грн</p>
                </div>
                <div className={styles.descBlock}>
                    <p className={styles.weight}>{weight} гр.</p>
                    <h2 className={styles.desc}>{desc}</h2>
                    <p className={styles.composition}>{composition}</p>
                </div>
                <button className={styles.buyBtn} onClick={handleAddToCart}>Замовити</button>
        </div>
     );
}
 
export default ProductCard;