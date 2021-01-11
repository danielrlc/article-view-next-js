import Link from 'next/link'

export default function Nav({
  toggleLoginForm,
  userIsLoggedIn,
  logOut,
  loginFormIsShown,
}) {
  return (
    <nav>
      <ul className="flex items-center justify-between py-4">
        <li>
          <Link href="/">
            <a className="no-underline text-xl">HBL app</a>
          </Link>
        </li>
        {userIsLoggedIn ? (
          <button className="btn-blue" onClick={logOut}>
            Log out
          </button>
        ) : (
          <button className="btn-blue" onClick={toggleLoginForm}>
            {loginFormIsShown ? 'Hide login form' : 'Show login form'}
          </button>
        )}
      </ul>
    </nav>
  )
}
