import React from 'react';
import { Card } from './Card';

interface CardData {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
    imageAspectRatio?: string;
    imageMaxWidth?: string;
    backgroundColor?: string;
}

interface CardGridProps {
    cards: CardData[];
}

export const CardGrid: React.FC<CardGridProps> = ({ cards }) => (
    <div className="box-border flex relative flex-row flex-wrap shrink-0 gap-7 justify-center self-center mt-10 w-full max-w-[700px] max-md:w-full max-md:max-w-[450px] max-sm:flex max-sm:flex-col max-sm:items-center">
        {cards.map((card, index) => (
            <Card key={index} {...card} />
        ))}
    </div>
);