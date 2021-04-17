import Link from 'next/link'

const LinkToSphere = () => {
  return (
    <Link href='/' as={`/`}>
      <a
        className={
          'm-2 text-black focus:outline-none focus:ring'
        }
      >
        Sphere
      </a>
    </Link>
  )
}

export default LinkToSphere
