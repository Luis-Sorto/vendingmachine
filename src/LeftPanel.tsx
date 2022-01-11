import React, {useState, useEffect} from 'react'
import "./LeftPanel.css"
import Axios from "axios"
import Product from './Product'
import CircularProgress from '@mui/material/CircularProgress'

interface Product{
    id: string,
    name: string,
    preparation_time: number,
    thumbnail: string
}


const LeftPanel : React.FC = () => {

    const [products, setProducts] = useState<Product[]>()

    useEffect( () => {
        Axios.get("https://products-api-ten.vercel.app/api")
        .then( (response) => {
            setTimeout(()=>{
                setProducts(response.data)
            }, 3000)
        })
        .catch((error) => {
            console.log(error)
        })   
    }, [])

    


    return (
        <div className="leftPanel">
            <div className="leftPanel__header">
                <p>Click to place an order!</p>
            </div>

            <div className="leftPanel__productContainer">
                { products ?
                    products.map((product, index) => {
                        return(
                            <div className="leftPanel__product" key = {index}>
                                <Product 
                                    id = {product.id} 
                                    name = {product.name} 
                                    preparation_time = {product.preparation_time} 
                                    thumbnail = {product.thumbnail} />
                            </div>
                        )   
                    }) : 
                    (<div className="leftPanel__productContainer__loader">
                        <CircularProgress color="secondary" />                      
                        <p >Loading products...</p>
                    </div>)
                    
                }
            </div>
        </div>
    )
}

export default LeftPanel
