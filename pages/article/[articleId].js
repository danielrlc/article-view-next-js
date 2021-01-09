import Nav from '../../components/nav'

// This gets called on every request
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://lettera.api.ksfmedia.fi/v3/article/${params.articleId}`,
  )
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

function Article({ data }) {
  console.log(data)
  const {
    authors,
    body,
    listImage,
    mainImage,
    preamble,
    publishingTime,
    shareUrl,
    title,
  } = data
  return (
    <div>
      <Nav />
      <div className="px-10 py-4">
        <h1 className="text-4xl mb-6">{title}</h1>
        <figure className="mb-4">
          <img src={listImage.url} alt={listImage.caption} className="w-full" />
          <figcaption className="text-gray-500">
            {listImage.caption} {listImage.byline}
          </figcaption>
        </figure>
        {body.map(({ html, headline, image, box }, i) => {
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
              <img src={image.url} alt={image.caption} className="w-full" />
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

export default Article
