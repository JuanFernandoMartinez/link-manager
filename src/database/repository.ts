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
    console.log(rows)
    let links: Link[] = []
    rows.forEach(row => {

        let link: Link = {
            id: row.link_id,
            title: row.link_title,
            link: row.link_link,
            category: {id: 1, title:  "Test"},
            tags: []
        }
        links.push(link)
    })

    return links
}

export { getAllLinks}