
import { Link } from "@/types/Link";

type LinkListProps = {
    links: Link[];
};

export default function LinkList({ links= [] }: LinkListProps) {
    console.log(links);
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

    
   

