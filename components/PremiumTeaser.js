import Link from 'next/link'

export default function PremiumTeaser(data) {
  return (
    <p className="m-8 text-xl">
      There's no such thing as a free lunch, boy!{' '}
      <Link href="/">
        <a className="underline text-blue-700">
          Please log in to view this content
        </a>
      </Link>
    </p>
  )
}
