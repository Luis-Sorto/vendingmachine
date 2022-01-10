import React from 'react'
import"./Product.css"

interface ProductProps{
    id: string,
    name: string,
    preparation_time: number,
    thumbnail: string
}

const Product : React.FC<ProductProps> = ({id, name, preparation_time, thumbnail}) => {
    return (
        <div className="product">
            <div className="product_thumbnail">
                <img src={thumbnail} alt="" />
            </div>
            <div className="product__info">
                <p className="product__name">{name}</p>
                <p className="product__eta"> ETA: {preparation_time} s</p>
            </div>
        </div>
    )
}

export default Product
