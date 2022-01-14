import React from "react";
import "../css/QueueFeed.css";
import Product from "./Product";

interface QueuedProduct {
    id: number;
    visibility: boolean;
    maxTime: number;
    product: Product;
}
interface queueFeedProps {
    itemsQueue: QueuedProduct[];
    grabItems: (queueItemId: number, product: QueuedProduct) => void;
}

const QueueFeed: React.FC<queueFeedProps> = (props) => {
    const renderQueueItems = () => {
        return props.itemsQueue.map((item, index) => {
            return (
                <>
                    {item.product.preparation_time > 0 && (
                        <div className="feed__item" key={index}>
                            <div className="feed__item__thumbnail">
                                <img src={item.product.thumbnail} alt="" />
                            </div>
                            <div className="feed__item__info">
                                <p>Dispatching in {item.product.preparation_time} s </p>
                                <progress
                                    value={item.maxTime - item.product.preparation_time}
                                    max={item.maxTime}
                                    className="feed__item__progress"
                                />
                            </div>
                        </div>
                    )}
                </>
            );
        });
    };

    const renderDispatcedItems = () => {
        return props.itemsQueue.map((item, index) => {
            return (
                <>
                    {item.product.preparation_time === 0 && item.visibility && (
                        <div className="feed__item" key={index}>
                            <div className="feed__item__thumbnail">
                                <img src={item.product.thumbnail} alt="" />
                            </div>
                            <div className="feed__item__info">
                                <button
                                    className="feed__item__grabButton bn27"
                                    onClick={() =>
                                        props.grabItems(item.id, {
                                            id: item.id,
                                            visibility: false,
                                            maxTime: item.product.preparation_time,
                                            product: {
                                                id: item.product.id,
                                                name: item.product.name,
                                                preparation_time: item.product.preparation_time,
                                                thumbnail: item.product.thumbnail,
                                            },
                                        })
                                    }
                                >
                                    Grab!
                                </button>
                            </div>
                        </div>
                    )}
                </>
            );
        });
    };

    return (
        <div className="queueFeed">
            <div className="queueFeed__queue">
                <div className="queueFeed__queue__header">
                    <p>Your order will appear below</p>
                </div>
                <div className="queueFeed__queue__feed">{renderQueueItems()}</div>
            </div>
            <div className="queueFeed__dispatchPanel">
                <div className="queueFeed__dispatchPanel__header">
                    <p>Grab your products!</p>
                </div>

                <div className="queueFeed__dispatchPanel__products">{renderDispatcedItems()}</div>
            </div>
        </div>
    );
};

export default QueueFeed;
