import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const itemsArray = [
        {id: "i111111", name: "item1"},
        {id: "i222222", name: "item2"},
        {id: "i333333", name: "item3"},
    ];
    return (
        <ul className="list-group">
            {
                itemsArray.map(item =>
                    <ProductItem
                        key={item.id} item={item}/> )
            }
        </ul>
    );
}

export default ProductsList;