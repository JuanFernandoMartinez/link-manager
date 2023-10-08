
type Category = {
    id: number,
    title: string
}

type Tag = {
    id: number,
    title: string
}

type Link = {
    id: number,
    title: string,
    category: Category, 
    tags: Tag[]
}

export type {Category, Tag, Link}