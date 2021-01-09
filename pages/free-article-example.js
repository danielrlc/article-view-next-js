import Nav from '../components/nav'

function IndexPage({ data }) {
  console.log(data.authors)
  console.log(data.body)
  return (
    <div>
      <Nav />
      <div className="px-10 py-4">
        <h1 className="text-4xl mb-6">{data.title}</h1>
        {data.body.map(({ html, headline, image, box }, i) => {
          return html ? (
            <p
              key={i}
              className="text-gray-700 mb-4"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : headline ? (
            <h2 key={i} className="text-2xl font-bold text-gray-700 mb-2 mt-6">
              {headline}
            </h2>
          ) : image ? (
            <figure key={i} className="mb-4">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full"
              />
              <figcaption className="text-gray-500">
                {image.caption} {image.byline}
              </figcaption>
            </figure>
          ) : box ? (
            box.content.map((text, i) => {
              return <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
            })
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
