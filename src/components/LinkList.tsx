import { ReactElement, useEffect } from "react";
import {useState} from 'react'
import { Link } from "@/types/Link";



export default  function LinkList(){

    const [links, setLinks] = useState([]) // [] is the initial value of the state
    useEffect(()=>{
        async function getLinksData(){
            const res = await fetch('/api/getLinks')
            const newLinks = await res.json()
            console.log(newLinks)
            setLinks(newLinks)
        }
    }, [])
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

