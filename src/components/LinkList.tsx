

let items:string[] = ['a','b','c','d']
export default function LinkList(){
    return <div>
        <ul>
            {items.map(e=><li key={e}>
                {e}
            </li>)}
        </ul>
    </div>
}