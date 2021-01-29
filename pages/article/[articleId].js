import axios from 'axios'
import * as cookie from 'cookie'
import Cookies from 'js-cookie'
import Nav from '../../components/nav'
import PremiumContent from '../../components/premiumContent'
import PremiumTeaser from '../../components/premiumTeaser'

// This gets called on every request
// export async function getServerSideProps({ params }) {
export async function getServerSideProps(context) {
  const parsedCookies = cookie.parse(context.req.headers.cookie)
  const { userId, authToken } = parsedCookies
  const url = `https://lettera.api.ksfmedia.fi/v3/article/${context.params.articleId}`
  const headers = {
    AuthUser: userId,
    Authorization: `OAuth ${authToken}`,
  }
  var response = await axios
    .get(url)
    .then((response) => response.data)
    .catch(
      (error) =>
        (error.request.res.statusCode = 403
          ? console.log(`There's no such thing as a free lunch, boy!`)
          : null)
    )
  if (response.data) {
    var data = response.data
    return { props: { data } }
  } else {
    return { props: {} }
  }
  // }
}

export default function PaywallFilter({ data }) {
  return data ? <PremiumContent data={data} /> : <PremiumTeaser data={data} />
}
