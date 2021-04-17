import Link from 'next/link'

const LinkToShoe = () => {
  return (
    <Link href='/shoe' as={`/shoe`}>
      <a
        className={
          'm-2 text-black focus:outline-none focus:ring'
        }
      >
        Shoe
      </a>
    </Link>
  )
}

export default LinkToShoe
