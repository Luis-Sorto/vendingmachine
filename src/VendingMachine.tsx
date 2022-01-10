import React from 'react'
import DispatchPanel from './DispatchPanel'
import LeftPanel from './LeftPanel'
import QueueFeed from './QueueFeed'
import "./VendingMachine.css"

const VendingMachine : React.FC = () => {
    return (
        <div className="vendingMachine">
            <div className="vendingMachine__header">
                <p>Welcome to the</p>
                <h1>Vending Machine</h1>
                <p>Created by <span>Luis Sorto</span></p>
            </div>

            
            <LeftPanel />

            <QueueFeed />

            <DispatchPanel />

        </div>
    )
}

export default VendingMachine
