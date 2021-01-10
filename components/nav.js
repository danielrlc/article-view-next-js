import Link from 'next/link'

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between py-4">
        <li>
          <Link href="/">
            <a className="no-underline text-xl">HBL app</a>
          </Link>
        </li>
        <li>
          <Link href="/login">
            <a className="no-underline text-xl">Login</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
