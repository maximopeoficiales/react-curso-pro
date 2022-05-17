import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces"

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
                {/* <ProductCard product={product}>
                    <ProductImage img={product.img} />
                    <ProductTitle title={product.title} />
                    <ProductButtons increaseBy={function (value: number): void {
                        throw new Error("Function not implemented.")
                    }} counter={0} />

                </ProductCard> */}

                <ProductCard product={product}>
                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title />
                    <ProductCard.Buttons />

                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />

                </ProductCard>

            </div>
        </div>
    )
}
