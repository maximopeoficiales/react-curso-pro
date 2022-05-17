
import { ProductCard as ProductCardMain } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces";

export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardMain, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
})
export default ProductCard;