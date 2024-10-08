/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface FooterLink {
  href: string;
  text: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="box-border flex relative flex-col shrink-0 max-md:items-center">
      <h2 className="box-border relative shrink-0 h-auto text-base font-semibold text-left text-white">
        {title}
      </h2>
      <div className="box-border flex relative flex-col shrink-0 gap-2.5 pt-2.5 leading-relaxed">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="box-border relative shrink-0 h-auto text-sm text-left text-white cursor-pointer pointer-events-auto max-md:text-center"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: "Integrating Builder with your app",
      links: [
        {
          href: "https://www.builder.io/c/docs/how-builder-works-technical",
          text: "How Builder Works",
        },
        {
          href: "https://www.builder.io/c/docs/integrate-symbols",
          text: "Integrate Symbols",
        },
        {
          href: "https://www.builder.io/c/docs/integrate-cms-data",
          text: "Using Builder CMS data",
        },
        {
          href: "https://www.builder.io/c/docs/api-intro",
          text: "Builder API",
        },
      ],
    },
    {
      title: "Learn the Builder Visual Editor",
      links: [
        {
          href: "https://www.builder.io/c/docs/how-builder-works",
          text: "Builder Docs",
        },
        {
          href: "https://www.builder.io/c/docs/custom-components-intro",
          text: "Custom Components",
        },
        { href: "https://www.builder.io/c/blueprints", text: "Blueprints" },
        { href: "https://forum.builder.io/", text: "Forum" },
      ],
    },
  ];

  return (
    <footer className="builder-footer box-border flex relative flex-col shrink-0 self-stretch px-5 pt-8 pb-10 w-screen text-white bg-black min-h-[100px] ml-[calc(50%_-_50vw)] max-sm:pt-5">
      <section className="builder-footer box-border flex relative flex-col grow shrink-0 self-stretch px-5 pt-8 pb-10 mx-auto w-full text-white bg-black max-w-[1200px] min-h-[100px] max-sm:pt-5">
        <div className="box-border flex relative flex-col shrink-0 mx-auto mt-5 w-full max-w-[600px]">
          <div className="flex gap-5 max-md:flex-col">
            {footerColumns.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
