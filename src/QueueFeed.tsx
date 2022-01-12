import React from 'react'
import "./QueueFeed.css"
import Product from './Product'

interface QueuedProduct {
    id : number,
    product : Product
}
interface queueFeedProps{
    itemsQueue: QueuedProduct[]
}

const QueueFeed : React.FC<queueFeedProps> = (props) => {

    const renderQueueItems = () => {
        console.log(props)
        return props.itemsQueue.map( (item, index) => {
            return(
                <div className="feed__item" key={index}>
                    <p>Dispatching {item.product.name} ... in {item.product.preparation_time} s </p> 
                </div>
            )
        })
    }


    return (
        <div className="queueFeed">
            <div className="queueFeed__queue">
                <div className="queueFeed__queue__header">
                    <p>Your order will appear below</p>
                </div>
                <div className="queueFeed__queue__feed">
                    {renderQueueItems()}
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
