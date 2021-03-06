import React, { useState } from "react";
import LeftPanel from "./LeftPanel";
import QueueFeed from "./QueueFeed";
import "../css/VendingMachine.css";
import Product from "./Product";

interface QueuedProduct {
    id: number;
    visibility: boolean;
    maxTime: number;
    product: Product;
}

const VendingMachine: React.FC = () => {
    const [qItems, setItems] = useState<QueuedProduct[]>([]);

    const addItem = (item: Product) => {
        let newOrder = { id: Math.floor(Math.random() * 1000), visibility: true, maxTime: item.preparation_time, product: item };
        let newQueue: QueuedProduct[] = [newOrder, ...qItems];
        setItems(newQueue);
        let countdown = item.preparation_time;
        const inter = setInterval(() => {
            if (countdown <= 0) {
                clearInterval(inter);
            } else {
                countdown = countdown - 1;
                changeItemValue(newOrder.id, {
                    id: newOrder.id,
                    visibility: true,
                    maxTime: item.preparation_time,
                    product: {
                        id: item.id,
                        name: item.name,
                        preparation_time: countdown,
                        thumbnail: item.thumbnail,
                    },
                });
            }
        }, 1000);
    };

    const changeItemValue = (id: number, newValue: QueuedProduct) => {
        setItems((prev) => prev.map((item) => (item.id === id ? newValue : item)));
    };

    const grabItem = (queuedItemId: number, product: QueuedProduct) => {
        setItems((prev) => prev.map((item) => (item.id === queuedItemId ? product : item)));
    };

    return (
        <div className="vendingMachine">
            <div className="space"></div>
            <div className="vendingMachine__header">
                <p>Welcome to</p>
                <h1>The Vending Machine</h1>
                <p className="vendingMachine__header__credits">
                    Created by <span>Luis Sorto</span>
                </p>
            </div>
            <div className="vendingMachine__body">
                <div className="vendingMachine__leftPanel">
                    <LeftPanel addToQueue={addItem} />
                </div>
                <div className="vendingMachine__queue">
                    <QueueFeed itemsQueue={qItems} grabItems={grabItem} />
                </div>
            </div>
        </div>
    );
};

export default VendingMachine;
