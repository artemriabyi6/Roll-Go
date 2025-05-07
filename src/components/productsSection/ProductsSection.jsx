import styles from './productsSection.module.scss'
import ProductCard from '../productCard/ProductCard';



const ProductsSection = ({ title, products }) => {
    return ( 
        <div className={`container ${styles.container}`}>
            <h3 className={styles.title}>{title}</h3>
             <div className={styles.productsWrapper}>
                {products.map(item => (
                    <ProductCard key={item.id} img={item.img} weight={item.weight} desc={item.desc} id={item.id} composition={item.composition} price={item.price}/>
                ))}
             </div>
        </div>
     );
}
 
export default ProductsSection;