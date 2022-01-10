import React from 'react'
import DispatchPanel from './DispatchPanel'
import LeftPanel from './LeftPanel'
import QueueFeed from './QueueFeed'
import "./VendingMachine.css"

const VendingMachine : React.FC = () => {
    return (
        <div className="vendingMachine">
            <div className="vendingMachine__header">
                <p>Welcome to</p>
                <h1>The Vending Machine</h1>
                <p className="vendingMachine__header__credits">Created by <span>Luis Sorto</span></p>
            </div>

            <div className="vendingMachine__body">
                <div className="vendingMachine__leftPanel">
                    <LeftPanel />
                </div>

                <div className="vendingMachine__queue">
                    <QueueFeed />
                </div>
            </div>

        </div>
    )
}

export default VendingMachine
