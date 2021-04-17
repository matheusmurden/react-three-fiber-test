import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import LinkToSphere from '@/components/dom/toSphere'
import LinkToCube from '@/components/dom/toCube'

const Shoe = dynamic(() => import('@/components/canvas/Shoe'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Shoe' })
  return (
    <>
      <Shoe r3f />
      <nav className="absolute z-20 p-4 m-4 flex">
        <LinkToSphere />
        <LinkToCube />
      </nav>
    </>
  )
}

export default Page
