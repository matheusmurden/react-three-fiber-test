import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import LinkToSphere from '@/components/dom/toSphere'
import LinkToShoe from '@/components/dom/toShoe'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

const Page = () => {
  useStore.setState({ title: 'Box' })
  return (
    <>
      <Box r3f />
      <nav className="absolute z-20 p-4 m-4 flex">
        <LinkToSphere />
        <LinkToShoe />
      </nav>
    </>
  )
}

export default Page
