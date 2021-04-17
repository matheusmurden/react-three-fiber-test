import Link from 'next/link'

const LinkToCube = () => {
  return (
    <Link href='/box' as={`/box`}>
      <a className='m-2 text-black focus:outline-none focus:ring'>
        Cube
      </a>
    </Link>
  )
}

export default LinkToCube
