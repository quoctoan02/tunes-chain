import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { pickRandom } from '@utils/pickRandom'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePlaylistContext } from 'src/contexts/PlaylistContext'
import UserIcon from '../../assets/user-icon.png'

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
]

const Center = () => {
  const {
    playlistContextState: { selectedPlaylist, selectedPlaylistId },
  } = usePlaylistContext()
  const [fromColor, setFromColor] = useState<string | null>(null)
  useEffect(() => {
    setFromColor(pickRandom(colors))
  }, [selectedPlaylistId])
  const { data: session } = useSession()
  return (
    <div className="relative h-screen flex-grow overflow-y-hidden text-white">
      <header className="absolute right-8 top-5 ">
        <div
          className="flex cursor-pointer items-center space-x-3 rounded-full py-1 pl-1 pr-2 opacity-90 hover:opacity-80"
          onClick={() => {}}
        >
          <Image
            src={session?.user.image || UserIcon}
            alt="User avatar"
            height="40"
            width="40"
            className="rounded-full object-cover"
          />
          <ChevronDownIcon className="icon" />
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b ${fromColor} h-80 to-black p-8`}>
        {
          // selectedPlaylist && (
          //   <>
          //   <Image src={selectedPlaylist.images[0].url} alt="Playlist Image" height="176" width={"176"} className="shadow-2xl"/>
          //   </>
          // )
          <>
            <Image
              src={'https://seed-mix-image.spotifycdn.com/v6/img/artist/1CWwyDPjCowRTO4p6A7r6g/en/default'}
              alt="Playlist Image"
              height="176"
              width={'176'}
              className="shadow-2xl"
            />
          </>
        }
        <div>
          <p>Playlist</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl"> {/*selectedPlaylist.name*/} Den Vau</h1>
        </div>
      </section>
    </div>
  )
}

export default Center
