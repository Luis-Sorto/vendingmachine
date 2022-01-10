import React from 'react'

interface ProductProps{
    id: string,
    name: string,
    preparation_time: number,
    thumbnail: string
}

const Product : React.FC<ProductProps> = ({id, name, preparation_time, thumbnail}) => {
    return (
        <div className="product">
            <p>{id}</p>
            <p>{name}</p>
            <p> ETA: {preparation_time} s</p>
            <p>{thumbnail}</p>
        </div>
    )
}

export default Product
