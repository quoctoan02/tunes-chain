import Head from "next/head"
import type { FC } from "react"

interface MetaHeadProps {
  title?: string
  thumbnail?: string
  url?: string
  description?: string
}

const MetaHead: FC<MetaHeadProps> = (props) => {
  const { title = "Template NextJs", thumbnail = "/thumbnail.png", description = "Template NextJs", url = "" } = props

  return (
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      <meta itemProp="image" content={thumbnail} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={thumbnail} />

      <meta itemProp="image" content={thumbnail} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta itemProp="image" content={thumbnail} />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  )
}

export default MetaHead
