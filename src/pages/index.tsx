import { Center, SideBar } from '@components/Layout'
import type { NextPage } from 'next'
import PlaylistContextProvider from 'src/contexts/PlaylistContext'

const Home: NextPage = () => {
  return (
    <PlaylistContextProvider>
      <div className="flex">
        {/* <Example /> */}
        <SideBar />
        <Center />
      </div>
    </PlaylistContextProvider>
  )
}

export default Home
