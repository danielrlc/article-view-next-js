import Nav from '../../components/nav'
import {useRouter} from 'next/router'

// // This gets called on every request
// export async function getServerSideProps() {
//   const router = useRouter()
//   const {articleId} = router.query
//   // Fetch data from external API
//   const res = await fetch(`https://lettera.api.ksfmedia.fi/v3/frontpage`)
//   const data = await res.json()
//   // Pass data to the page via props
//   return { props: { data } }
// }

function Article() {
  const router = useRouter()
  const {articleId} = router.query
  return (
    <p>Article: {articleId} </p>
  )
}

export default Article
