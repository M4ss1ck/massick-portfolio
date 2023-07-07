import React from 'react'
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import type { Project } from './SearchProject'

const Card = ({ image, description, title, url, tags }: Project) => {
    return (
        <article
            className="grid grid-cols-2 grid-rows-3 gap-4 my-2 xs:grid-cols-3 xs:grid-rows-2"
            itemScope
            itemType="http://schema.org/Article"
        >
            {image && (
                <div className="overflow-hidden relative row-span-2 my-4 group">
                    <GatsbyImage
                        image={image}
                        alt=""
                        className="relative top-0 w-full h-full blur-sm hue-rotate-30 transition duration-300 ease-in-out -rotate-12 group-hover:rotate-0 group-hover:blur-none"
                        objectFit="cover"
                    />
                    <GatsbyImage
                        image={image}
                        alt={description || ""}
                        className="transition duration-300 ease-in-out card-image group-hover:scale-110 group-hover:blur-sm group-hover:rotate-12"
                        imgStyle={{ objectPosition: "50% 0%" }}
                    />
                </div>
            )}
            <header className="row-span-2 my-auto xs:col-span-2 xs:row-span-1">
                <h2 className="mt-2 text-lg font-bold text-primario dark:text-secundario">
                    <a
                        href={url}
                        itemProp="url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span itemProp="headline">{title}</span>
                    </a>
                </h2>
                <div className="flex flex-row flex-wrap col-span-2 row-span-1">
                    {tags?.map((tag: string) => (
                        <span
                            key={tag}
                            className="px-1 m-1 text-xs rounded-md outline outline-1 text-primario dark:text-secundario"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </header>
            <section className="col-span-2 row-span-1">
                <p>{description}</p>
            </section>
        </article>
    )
}

export default Card