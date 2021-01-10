import Link from 'next/link'
import Nav from '../components/nav'

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://lettera.api.ksfmedia.fi/v3/frontpage`)
  let data = await res.json()
  // Pass data to the page via props
  return {
    props: { data },
  }
}

function IndexPage({ data }) {
  return (
    <div className nt="px-4 lg:px-10 mb-16">
      <Nav />
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Front page</h1>
        <h2 className="text-2xl font-bold mb-4">Free articles</h2>
        <ul className="mb-12">
          {data
            .filter((article) => !article.premium)
            .map(({ title, uuid }) => (
              <li key={uuid} className="mb-3">
                <Link href={`./article/${uuid}`}>
                  <a className="underline text-blue-700">{title}</a>
                </Link>
              </li>
            ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4">Premium articles</h2>
        <ul>
          {data
            .filter((article) => article.premium)
            .map(({ title, uuid }) => (
              <li key={uuid} className="mb-3">
                <Link href={`./article/${uuid}`}>
                  <a className="underline text-blue-700">{title}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default IndexPage
