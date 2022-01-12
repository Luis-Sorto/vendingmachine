import React from 'react'
import"./Product.css"


interface Product{
    id: string,
    name: string,
    preparation_time: number,
    thumbnail: string,
}

interface ProductProps{
    product: Product,
    addToQueue: (product:Product) => void
}

const Product : React.FC<ProductProps> = ({product, addToQueue}) => {

    return (
        <div className="product" onClick={() => {
            addToQueue(product)
        }}>
            <div className="product_thumbnail">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="product__info">
                <p className="product__name">{product.name}</p>
                <p className="product__eta"> ETA: {product.preparation_time} s</p>
            </div>
        </div>
    )
}

export default Product
