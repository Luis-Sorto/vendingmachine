import React from 'react'
import "./QueueFeed.css"

const QueueFeed : React.FC = () => {
    return (
        <div className="queueFeed">
            <div className="queueFeed__queue">
                <div className="queueFeed__queue__header">
                    <p>Your order will appear below</p>
                </div>
                <div className="queueFeed__queue__feed">

                </div>
            </div>
            <div className="queueFeed__dispatchPanel">
                <div className="queueFeed__dispatchPanel__header">
                    <p>Grab your products!</p>
                </div>

                <div className="queueFeed__dispatchPanel__products">

                </div>
                
            </div>
            
        </div>
    )
}

export default QueueFeed
