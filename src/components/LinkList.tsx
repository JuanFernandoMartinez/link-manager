import { ReactElement, useEffect } from "react";
import {useState} from 'react'
import { Link } from "@/types/Link";
import { getAllLinks } from "@/database/repository";


async function getLinksData() {
    const data = await getAllLinks();
    return data;
}

export default async function LinkList(){

    
   const links = await getLinksData()
    //const data = await getLinksData()
    return (
        <div>
            <h1>Links</h1>
            {links.map((link: Link, index: number) => (
                <div key={index}>
                    <h2>{link.id}</h2>
                    <p>{link.title}</p>
                    <a href={link.link}>Click here</a>
                </div>
            ))}
        </div>
    );
    
}

