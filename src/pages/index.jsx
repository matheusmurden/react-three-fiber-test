import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import LinkToCube from '@/components/dom/toCube'
import LinkToShoe from '@/components/dom/toShoe'

const Sphere = dynamic(() => import('@/components/canvas/Sphere'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      <Sphere r3f />
      <nav className="absolute z-20 p-4 m-4 flex">
        <LinkToCube />
        <LinkToShoe />
      </nav>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Sphere',
    },
  }
}
