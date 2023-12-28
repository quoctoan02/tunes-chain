import { Center, SideBar } from '@components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="flex">
      {/* <Example /> */}
      {/* <h1 className='text-3xl text-red-500'>Hello World</h1> */}
      <SideBar />
      <Center />
    </div>
  )
}

export default Home
