import React from 'react';
import { Header } from './Header';
import { FeatureSection } from './FeatureSection';
import { CardGrid } from './CardGrid';

const cardData = [
    {
        href: "https://www.builder.io/c/docs/integrating-builder-pages#creating-a-builder-page",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?",
        title: "Create Builder pages in your app",
        description: "This is an example page created in Builder. Start here to review how your integration works and create new pages in your app."
    },
    {
        href: "https://www.builder.io/c/docs/custom-components-intro",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263",
        title: "Register your Next components",
        description: "Register your Next.js components in Builder. You can drag and drop any custom component from the Visual Editor onto a page.",
        backgroundColor: "bg-slate-900"
    },
    {
        href: "https://www.builder.io/c/blueprints",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=2000",
        title: "Integrate common use cases",
        description: "Reference how you can use Builder for your blog, eCommerce product listings, or for your entire site.",
        imageAspectRatio: "2.92",
        imageMaxWidth: "170px",
        backgroundColor: "bg-zinc-900"
    },
    {
        href: "https://www.builder.io/c/docs/ui-ve-tour",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58",
        title: "Tour the Visual Editor",
        description: "Check out the UI of the Visual Editor and compose complex layouts without writing any code."
    },
    {
        href: "https://www.builder.io/c/docs/block-types",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9",
        title: "Learn the building blocks",
        description: "Creating content in Builder uses a flexible toolset of no-code blocks that you can use to create almost anything."
    }
];

export const MainComponent: React.FC = () => {
    return (
        <div className="box-border flex flex-col shrink-0 px-5 pt-8 pb-20 w-screen text-black bg-white min-h-[100px] ml-[calc(50%_-_50vw)] max-sm:pb-10" style={{maxWidth: 1200}}>
            <main className="box-border flex flex-col grow shrink-0 self-stretch px-5 pt-8 pb-20 mx-auto w-full text-black bg-white max-w-[1200px] min-h-[100px] max-sm:pb-10">
                <Header
                    logoSrc="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F7bca7936d0a54d568dc5da34f4aaa5af?width=50"
                    plusIconSrc="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=39"
                    title="Visually build any app with Next.js and Builder.io"
                />
                <FeatureSection
                    title="Compose with your components"
                    description="This is a custom component written in Next and registered with Builder. You can register any code components for drag-and-drop editing."
                    imageSrc="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2Fdd6e201535a748229aa374f04e14eaea"
                />
                <CardGrid cards={cardData} />
            </main>
        </div>
    );
};