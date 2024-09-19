import React from 'react';

interface CardProps {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
    imageAspectRatio?: string;
    imageMaxWidth?: string;
    backgroundColor?: string;
}

export const Card: React.FC<CardProps> = ({
      href,
      imageSrc,
      title,
      description,
      imageAspectRatio = "2.22",
      imageMaxWidth,
      backgroundColor
                                          }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="box-border flex overflow-hidden relative flex-col shrink-0 justify-between w-full cursor-pointer pointer-events-auto max-sm:items-center max-sm:max-w-[300px]">
        <div
            className="box-border flex overflow-hidden relative flex-col shrink-0 pb-5 rounded-lg border border-black border-solid">
            <div className={`box-border flex relative flex-col shrink-0 ${backgroundColor ? backgroundColor : ''}`}>
                <img
                    loading="lazy"
                    src={imageSrc}
                    alt={title}
                    className={`box-border object-cover overflow-hidden shrink-0 w-full aspect-[${imageAspectRatio}] min-h-[20px] min-w-[20px] ${imageMaxWidth ? `max-w-[${imageMaxWidth}]` : ''}`}
                />
            </div>
            <h3 className="box-border relative shrink-0 px-2.5 mt-2.5 mb-2.5 h-auto font-semibold text-center text-black">
                {title}
            </h3>
            <p className="box-border relative shrink-0 px-2.5 mx-auto w-full h-auto text-xs text-center text-black max-w-[450px] max-sm:text-center">
                {description}
            </p>
        </div>
    </a>
);