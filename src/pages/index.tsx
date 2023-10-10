
import { Inter } from 'next/font/google'
import LinkList from '@/components/LinkList'
import { Link } from '@/types/Link'


let links: Link[] = []


export default async function Home() {
  
  console.log(links)
  return (
    <>
      <h1>hello</h1>

      <LinkList links={links} />
    </>
  )
}
