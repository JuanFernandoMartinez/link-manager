
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
                <a key={index}
                href={link.link}
                >
                    <b>{link.id}</b> {"  "} {link.title}
                </a>
            ))}
        </div>
    );
}

    
   

