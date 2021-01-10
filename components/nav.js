import Link from 'next/link'

export default function Nav({ toggleLoginForm, userIsLoggedIn }) {
  return (
    <nav>
      <ul className="flex items-center justify-between py-4">
        <li>
          <Link href="/">
            <a className="no-underline text-xl">HBL app</a>
          </Link>
        </li>
        {userIsLoggedIn ? (
          <li>Logged in</li>
        ) : (
          <button className="btn-blue" onClick={toggleLoginForm}>
            Log in
          </button>
        )}
      </ul>
    </nav>
  )
}
