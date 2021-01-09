import Link from 'next/link'
import Nav from '../components/nav'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://lettera.api.ksfmedia.fi/v3/frontpage`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

function IndexPage({ data }) {
  console.log(data)
  return (
    <div className="px-8">
      <Nav />
      <h1 className="text-3xl font-bold mb-6">Latest articles</h1>
      <ul>
        {data.map(({title, uuid}) => (
          <li key={uuid} className="mb-3">
            <Link href={`./article/${uuid}`}>
              <a className="underline text-blue-700">{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
