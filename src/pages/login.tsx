// import { GetServerSideProps } from 'next'
// import React from 'react'
// import {ClientSafeProvider, getProviders, signIn} from 'next-auth/react'
// import Image from 'next/image'
// import spotifyLogo from '../assets/SpotifyLogoPNGImage.png'

// interface Props {
//   providers: Awaited<ReturnType<typeof getProviders>>
// }

// const Login = ({providers}) => {
//   const {id: providerId}= providers?.spotify
//   console.log("🚀 ~ file: login.tsx:13 ~ login ~ providers?.spotify:", providers)
//   return (
//     <div className='flex flex-col justify-center items-center bg-black h-screen'>
//       <div className='mb-6'>
//         <Image src={spotifyLogo} alt='Spotify Logo' height="200" width='200' />
//       </div>
//       <button className='bg-[#18D860] text-white p-5 rounded-full'
//        onClick={() => {signIn(providerId), {callbackUrl: '/'}}}
//       >
//         Login with Spotify
//       </button>
//       </div>
//   )
// }

// export default Login

// export const getServerSideProps = async () => {
//     const providers = await getProviders()
//     console.log("🚀 ~ file: login.tsx:34 ~ constgetServerSideProps:GetServerSideProps<Props>= ~ process.env.SPOTIFY_CLIENT_ID:", process.env.SPOTIFY_CLIENT_ID)
//     console.log("🚀 ~ file: login.tsx:34 ~ constgetServerSideProps:GetServerSideProps<Props>= ~ process.env.SPOTIFY_CLIENT_ID:", process.env.SPOTIFY_CLIENT_SECRET)
//     return {
//         props: {
//           providers
//         }
//     }
// }

import { getProviders, signIn } from 'next-auth/react'

export default function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <div className=" flex w-full items-center justify-center border-b border-neutral-700 bg-neutral-800">
        <div className="flex flex-col items-center gap-4 pb-8 pt-8">
          <svg viewBox="0 0 1134 340" className="h-10 max-w-[131px] text-white">
            <title>Spotify</title>
            <path
              fill="currentColor"
              d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
            ></path>
          </svg>
          <div>A clone built for educational purposes</div>
        </div>
      </div>
      <div className="flex w-full justify-center pb-8 pt-20">
        {Object.values(providers).map((provider) => {
          return (
            <div key={provider?.name}>
              <button
                onClick={() => {
                  signIn(provider?.id, { callbackUrl: '/' })
                }}
                className="rounded-full border-2 border-neutral-800 bg-black px-8 py-4 font-bold tracking-wide text-white hover:bg-neutral-900"
              >
                LOGIN WITH SPOTIFY
              </button>
            </div>
          )
        })}
      </div>
      <div className="flex w-full flex-grow flex-col items-center px-4">
        <div className="flex w-full flex-col rounded-xl border border-neutral-800 bg-black p-8 md:w-1/2 lg:w-1/2 xl:w-1/3">
          <h2 className="self-center pb-4">DISCLAIMER</h2>
          <ul className="list-disc text-neutral-400">
            <li>This clone is for educational purposes only.</li>
            <li>
              Some limitations due to the way Spotify API works:
              <ul className=" list-inside list-disc">
                <li>You need spotify premium to be able to play the songs via their API.</li>
                <li>You can browse the playlists, songs etc without the premium though.</li>
                <li>
                  You need an <strong className="text-neutral-300">active</strong> device with spotify logged in. This
                  means you need to open up spotify app in your desktop or phone & play-pause some song to make it{' '}
                  <strong className="text-neutral-300">active</strong>. The device will lose the active status in some
                  time if you do not interact with either it, or this clone for a while.
                </li>
              </ul>
            </li>
            <li>The clone does not include all the functionalities of the actual spotify web client.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  console.log('🚀 ~ file: login.tsx:82 ~ getServerSideProps ~ providers:', providers)
  return {
    props: {
      providers,
    },
  }
}
