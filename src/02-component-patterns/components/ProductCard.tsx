import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

interface MyProps {
    product: Product;
}
export interface Product {
    id: string;
    title: string;
    img?: string;
}

export const ProductCard = ({ product }: MyProps) => {
    // console.log(styles);
    const { counter, increaseBy } = useProduct();

    return (
        <div className={styles.productCard}>
            {/* <img className={styles.productImg} src={"./coffee-mug.png"} alt="Coffe Mug" /> */}
            <img className={styles.productImg} src={product.img ?? noImage} alt="Coffe Mug" />
            <span className={styles.productDescription}>{product.title}</span>
            <div className={styles.buttonsContainer}>
                <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}
                > - </button>

                <div className={styles.countLabel}>{counter}</div>
                <button className={styles.buttonAdd}
                    onClick={() => increaseBy(+1)}
                > + </button>
            </div>
        </div>
    )
}
