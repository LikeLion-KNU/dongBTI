import React from "react";

import { CardElement } from "./Card.style";

export interface CardProps {
    imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl }) => {
    return (
        <CardElement>
            <img src={imageUrl} alt="Card Image" />
        </CardElement>
    );
};
