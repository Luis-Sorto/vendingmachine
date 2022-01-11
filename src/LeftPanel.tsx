import React, {useState, useEffect} from 'react'
import "./LeftPanel.css"
import Axios from "axios"
import Product from './Product'
import CircularProgress from '@mui/material/CircularProgress'
import ApiCallError from './ApiCallError'

interface Product{
    id: string,
    name: string,
    preparation_time: number,
    thumbnail: string
}


const LeftPanel : React.FC = () => {

    const [products, setProducts] = useState<Product[]>()
    const [error, setError] = useState(null)

    useEffect( () => {
        Axios.get("https://products-api-ten.vercel.app/api")
        .then( (response) => {
            setTimeout(()=>{
                setProducts(response.data)
            }, 2000)
        })
        .catch((error) => {
            console.log(error)
            setError(error)
        })   
    }, [])

    const renderError = () => {
        return(
            <ApiCallError />
        )
    }

    const renderProducts = () => {
        return(
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
        )
    }
    


    return (
        <div className="leftPanel">
            <div className="leftPanel__header">
                <p>Click to place an order!</p>
            </div>
            {error ? renderError() : renderProducts()}
        </div>
    )
}

export default LeftPanel
