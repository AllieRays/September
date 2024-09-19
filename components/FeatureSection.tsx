import React from 'react';
import { Counter } from "@/components/Counter";

interface FeatureSectionProps {
    title: string;
    description: string;
    imageSrc: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, imageSrc }) => (
    <section className="box-border flex relative flex-row shrink-0 gap-10 justify-center self-center mt-20 w-full max-w-[700px] max-sm:flex max-sm:flex-col max-sm:items-center">
        <div className="box-border flex relative flex-col shrink-0 justify-center pl-5 text-black max-w-[50%] max-sm:items-center max-sm:max-w-[300px]">
            <h2 className="box-border relative shrink-0 mb-2.5 h-auto font-semibold text-left text-black">
                {title}
            </h2>
            <p className="box-border relative shrink-0 h-auto text-xs text-left text-black max-sm:text-center">
                {description}
            </p>
            <img loading="lazy" sizes="(max-width: 998px) 11vw, 8vw" src={imageSrc} alt="Feature illustration" className="box-border object-contain overflow-hidden shrink-0 mt-5 ml-auto w-full aspect-[2.88] max-w-[102px] min-h-[20px] min-w-[20px] max-md:flex max-sm:hidden" />
        </div>
        <Counter className="box-border flex relative flex-col shrink-0 pr-5 w-full max-w-[50%] max-sm:mx-auto" initialValue={99} initialCount={50} />
    </section>
);