import axios from 'axios'
import Nav from '../../components/nav'

// This gets called on every request
export async function getServerSideProps({ params }) {
  const url = `https://lettera.api.ksfmedia.fi/v3/article/${params.articleId}`
  const response = await axios.get(url)
  const data = response.data
  return { props: { data } }
}

function Article({ data }) {
  console.log(data)
  const {
    authors,
    body,
    listImage,
    mainImage,
    updateTime,
    preamble,
    publishingTime,
    shareUrl,
    title,
  } = data
  return (
    <div className="px-4 lg:px-10 mb-16 text-gray-800">
      <header>
        <Nav />
      </header>
      <article className="max-w-2xl mx-auto">
        {/* title and main image */}
        <h1 className="text-4xl mb-6">{title}</h1>
        {listImage && (
          <figure>
            <img
              src={listImage.url}
              alt={listImage.caption}
              className="w-full mb-1"
            />
            <figcaption className="text-gray-500 text-sm">
              {listImage.caption} {listImage.byline}
            </figcaption>
          </figure>
        )}

        {/* article meta */}
        <section className="text-gray-500 text-sm my-6 border border-l-0 border-r-0 border-gray-300 py-2 flex justify-between">
          <div>
            {/* Demo to test with >1 author here: https://codesandbox.io/s/beautiful-colden-k1rpm?file=/src/App.js */}
            {authors.map((author, i) => (
              <span key={i}>{`${author.byline}${
                i < authors.length - 1 ? ', ' : ''
              }`}</span>
            ))}
            <p>{updateTime}</p>
          </div>
          <p>social media icons here?</p>
        </section>

        {/* article body */}
        <section>
          <p className="text-2xl mb-4">{preamble}</p>
          {body.map(({ html, headline, image, box }, i) => {
            return html ? (
              <p
                key={i}
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ) : headline ? (
              <h2
                key={i}
                className="text-2xl font-bold text-gray-700 mb-2 mt-6"
              >
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
              // View for factbox, eg here: http://localhost:3000/article/a6282b95-e620-4040-87d1-731fed85a7d6
              <div className="border border-t-8 border-b-4 border-yellow-400 shadow-2xl px-6 pt-4 pb-8 my-8">
                {box.headline && (
                  <h2 className="text-2xl font-bold">{box.headline}</h2>
                )}
                {box.title && (
                  <h3 className="text-2xl font-bold">{box.title}</h3>
                )}
                {box.content.map((text, i) => {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: text }} />
                  )
                })}
              </div>
            ) : null
          })}
        </section>
      </article>
    </div>
  )
}

export default Article
