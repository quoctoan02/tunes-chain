import Example from "@views/Example"
import { message } from "antd"
import type { NextPage } from "next"

const Home: NextPage = () => {
  const confirm = () => {
    message.info("Clicked on Yes.")
  }

  return (
    <>
      <Example />
    </>
  )
}

export default Home
