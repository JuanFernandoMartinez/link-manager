
import { Inter } from 'next/font/google'
import LinkList from '@/components/LinkList'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <LinkList/>
    </>
  )
}
