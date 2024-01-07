import type { NextPage } from 'next'
import { Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export enum TokenError {
  RefreshAccessTokenError = 'RefreshAccessTokenError',
}

export interface ExtendedToken extends JWT {
  accessToken: string
  refreshToken: string
  accessTokenExpiresAt: number
  user: User
  error?: TokenError
}

export interface ExtendedSession extends Session {
  accessToken: ExtendedToken['accessToken']
  error: ExtendedToken['error']
}

export interface PlaylistContextState {
  playlists: SpotifyApi.PlaylistObjectSimplified[]
  selectedPlaylistId: string | null
  selectedPlaylist: SpotifyApi.SinglePlaylistResponse | null
}

export interface IPlaylistContextState {
  playlistContextState: PlaylistContextState
  updatePlaylistContextState: (updatedObj: Partial<PlaylistContextState>) => void
}
