import Button from "./Button";
import { useState } from "react";

export default function ProductItem({name, price, description}) {
    const [isInChart, setIsInChart] = useState(false);

    const handleInChart = () => {
        setIsInChart(!isInChart);
    }

    return (
        <li className="product-card">
            <h3>{name}</h3>
            <p>{description}</p>
            <span>Price: {price}$</span>
            <Button
                onClick={handleInChart}
                className={isInChart? "to-chart" : ""}
            >
                {isInChart ? "Added" : "To Chart"}
            </Button>
        </li>
    )
}