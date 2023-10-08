import { linkSync } from "fs";
import { pl } from "./connection";
import { Link, Category, Tag } from "@/types/Link";

let getLinkCategorie = async (cat: String)=>{
    let {rows} = await pl.query("SELECT * FROM category WHERE category_id = $1", [cat])
    let category: Category = {id:rows[0].id, title: rows[0].title}

    return category

}

let getAllLinks = async ()=>{
    let {rows} = await pl.query("SELECT * FROM link")
    let links: Link[] = []
    rows.forEach(row => {

        let link: Link = {
            id: row.id,
            title: row.title,
            category: {id: 1, title:  "Test"},
            tags: []
        }
        links.push(link)
    })

    return links
}

export { getAllLinks}