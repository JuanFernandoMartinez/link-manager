
import type { Link } from "@/types/Link";
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps = (async (context) => {
  const res = await fetch(process.env.BASE_URL+'/api/links')
  console.log(res)
  const links = await res.json()
  console.log(links)
  return { props: { links } }
}) satisfies GetStaticProps<{
  links: Link;
}>

export default  function Home({
  links,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(links)
  return <h1>hello</h1>
}
