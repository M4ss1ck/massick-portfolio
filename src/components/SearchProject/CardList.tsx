import React from 'react'
import Card from './Card'
import type { Project } from './SearchProject'

interface ICardList {
    projects: Project[]
}

const CardList = ({ projects }: ICardList) => {
    return (
        <ol style={{ listStyle: `none` }} className="z-10 py-4 max-w-prose">
            {projects.map(p => {
                return (
                    <li key={p.title} className="m-4">
                        <Card
                            image={p.image}
                            title={p.title}
                            description={p.description}
                            url={p.url}
                            tags={p.tags}
                        />
                    </li>
                )
            })}
        </ol>
    )
}

export default CardList