import { spotifyApi } from '@config/spotify'
import { IPlaylistContextState, PlaylistContextState } from '@types'
import { useSession } from 'next-auth/react'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

const defaultPlaylistContextState: PlaylistContextState = {
  playlists: [],
  selectedPlaylistId: null,
  selectedPlaylist: null,
}

export const PlaylistContext = createContext<IPlaylistContextState>({
  playlistContextState: defaultPlaylistContextState,
  updatePlaylistContextState() {},
})

export const usePlaylistContext = () => useContext(PlaylistContext)

const PlaylistContextProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession()
  const [playlistContextState, setPlaylistContextState] = useState(defaultPlaylistContextState)

  const updatePlaylistContextState = (updatedObj: Partial<PlaylistContextState>) => {
    setPlaylistContextState((previousPlaylistContextState) => ({
      ...previousPlaylistContextState,
      ...updatedObj,
    }))
  }

  const playlistContextProviderData = {
    playlistContextState,
    updatePlaylistContextState,
  }

  useEffect(() => {
    const getUserPlaylists = async () => {
      const userPlaylistResponse = await spotifyApi.getUserPlaylists()
      updatePlaylistContextState({ playlists: userPlaylistResponse.body.items })
      // console.log("🚀 ~ file: PlaylistContext.tsx:27 ~ getUserPlaylists ~ userPlaylistResponse:", userPlaylistResponse)
      //  setPlaylistContextState({playlists: userPlaylistResponse.body.items})
    }

    if (spotifyApi.getAccessToken()) {
      getUserPlaylists()
    }
  }, [session])

  return <PlaylistContext.Provider value={playlistContextProviderData}>{children}</PlaylistContext.Provider>
}

export default PlaylistContextProvider
