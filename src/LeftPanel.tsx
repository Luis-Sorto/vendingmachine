import React from 'react'
import "./LeftPanel.css"
import Product from './Product'

const LeftPanel : React.FC = () => {
    return (
        <div className="leftPanel">
            <div className="leftPanel__header">
                <p>Click to place an order!</p>
            </div>

            <div className="leftPanel__productContainer">
                <div className="leftPanel__productRow">
                    <div className="leftPanel__product">
                        <Product id="1" name="Hamburger" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="2" name="Pizza" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="3" name="Sandwhich" preparation_time={10} thumbnail="thumburl" />
                    </div>
                </div>
                <div className="leftPanel__productRow">
                    <div className="leftPanel__product">
                        <Product id="4" name="Hot Dog" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="5" name="Lays" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="6" name="Doritos" preparation_time={10} thumbnail="thumburl" />
                    </div>
                </div>
                <div className="leftPanel__productRow">
                    <div className="leftPanel__product">
                        <Product id="7" name="Oreos" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="8" name="Minute maid - Pink Lemonade" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="9" name="Coffee" preparation_time={10} thumbnail="thumburl" />
                    </div>
                </div>
                <div className="leftPanel__productRow">
                    <div className="leftPanel__product">
                        <Product id="10" name="Water" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="11" name="Coca - Cola" preparation_time={10} thumbnail="thumburl" />
                    </div>
                    <div className="leftPanel__product">
                        <Product id="12" name="7up" preparation_time={10} thumbnail="thumburl" />
                    </div>
                </div>
                <div className="leftPanel__productRow">
                    <div className="leftPanel__product">
                        <Product id="13" name="Ocean Spray Cranberry Juice" preparation_time={10} thumbnail="thumburl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftPanel
