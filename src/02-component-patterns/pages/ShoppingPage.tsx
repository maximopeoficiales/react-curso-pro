import { Product, ProductCard } from "../components/ProductCard"

const product: Product = {
    id: "1",
    title: "Coffee Mug",
    img: "./coffee-mug.png"
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}
            >
                <ProductCard product={product} />

            </div>
        </div>
    )
}
