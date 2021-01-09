import Nav from '../components/nav'

function IndexPage({ data }) {
  console.log(data.body)
  return (
    <div>
      <Nav />
      <div className="px-10 py-20">
        <h1 className="text-4xl text-gray-700">
          {data.title}
        </h1>
        {data.body.map(({ html, headline, image, box }, i) => {
          return html ? (
            <p
              key={i}
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : headline ? (
            <h2
              key={i}
              className="text-2xl font-bold text-gray-700"
            >
              {headline}
            </h2>
          ) : null
        })}
      </div>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://lettera.api.ksfmedia.fi/v3/article/a6282b95-e620-4040-87d1-731fed85a7d6`,
  )
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default IndexPage
