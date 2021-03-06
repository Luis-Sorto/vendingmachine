import React, { useState, useEffect } from "react";
import "../css/LeftPanel.css";
import Axios from "axios";
import Product from "./Product";
import CircularProgress from "@mui/material/CircularProgress";
import ApiCallError from "./ApiCallError";

interface leftPanelProps {
    addToQueue: (item: Product) => void;
}

const LeftPanel: React.FC<leftPanelProps> = ({ addToQueue }) => {
    const [products, setProducts] = useState<Product[]>();
    const [error, setError] = useState(null);

    const getData = async () => {
        const res = await Axios.get("https://products-api-ten.vercel.app/api");
        return res.data;
    };

    useEffect(() => {
        // Set timeout function was used to simulate delayed server response
        // to show loader
        setTimeout(async () => {
            try {
                const data = await getData();
                setProducts(data);
            } catch (err: any) {
                setError(err);
            }
        }, 2000);

        //===========================================================
        // Alternative solution
        //===========================================================

        // Axios.get("https://products-api-ten.vercel.app/api")
        // .then( (response) => {
        //     setTimeout(()=>{
        //         setProducts(response.data)
        //     }, 2000)
        // })
        // .catch((error) => {
        //     console.log(error)
        //     setError(error)
        // })
    }, []);

    const renderError = () => {
        return <ApiCallError />;
    };

    const renderProducts = () => {
        return (
            <div className="leftPanel__productContainer">
                {products ? (
                    products.map((product, index) => {
                        return (
                            <div className="leftPanel__product" key={index}>
                                <Product product={product} addToQueue={addToQueue} />
                            </div>
                        );
                    })
                ) : (
                    <div className="leftPanel__productContainer__loader">
                        <CircularProgress color="secondary" />
                        <p>Loading products...</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="leftPanel">
            <div className="leftPanel__header">
                <p>Click to place an order!</p>
            </div>
            {error ? renderError() : renderProducts()}
        </div>
    );
};

export default LeftPanel;
