import NextAuth, { CallbacksOptions } from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'
import { LOGIN_URL, spotifyApi } from '../../../config/spotify'
import { ExtendedToken, TokenError } from '../../../types'

const refreshAccessToken = async (token: ExtendedToken): Promise<ExtendedToken> => {
  try {
    spotifyApi.setAccessToken(token.accessToken)
    spotifyApi.setRefreshToken(token.refreshToken)

    const { body: refreshedTokens } = await spotifyApi.refreshAccessToken()

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      refreshToken: refreshedTokens.refresh_token || token.refreshToken,
      accessTokenExpiresAt: Date.now() + refreshedTokens.expires_in * 1000,
    }
  } catch (e) {
    console.log(e)
  }

  return {
    ...token,
    error: TokenError.RefreshAccessTokenError,
  }
}
const jwtCallback: CallbacksOptions['jwt'] = async ({ token, account, user }) => {
  console.log("🚀 ~ file: [...nextauth].ts:29 ~ constjwtCallback:CallbacksOptions['jwt']= ~ user:", user)
  console.log("🚀 ~ file: [...nextauth].ts:29 ~ constjwtCallback:CallbacksOptions['jwt']= ~ account:", account)
  console.log("🚀 ~ file: [...nextauth].ts:29 ~ constjwtCallback:CallbacksOptions['jwt']= ~ token:", token)
  let extendedToken: ExtendedToken
  if (account && user) {
    extendedToken = {
      ...token,
      user,
      accessToken: account.access_token as string,
      refreshToken: account.refresh_token as string,
      accessTokenExpiresAt: (account.expires_at as number) * 1000,
    }

    return extendedToken
  }
  if (Date.now() + 5000 < (token as ExtendedToken).accessTokenExpiresAt) return token

  return await refreshAccessToken(token as ExtendedToken)
}

const sessionCallback: CallbacksOptions['session'] = async ({ session, token }) => {
  // session.accessToken = (token as ExtendedToken).accessToken
  // session.error = (token as ExtendedToken).error;
  return session
}
export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: jwtCallback,
    session: sessionCallback,
  },
})
