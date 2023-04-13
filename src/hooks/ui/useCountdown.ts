import { useState } from "react"
import useSWR from "swr"

export const useCountdown = (targetDate) => {
  const countDownDate = new Date(targetDate).getTime()

  const [countDown, setCountDown] = useState(countDownDate - new Date().getTime())

  useSWR(["countdown", targetDate], () => {
    const interval = setInterval(() => {
      const newDate = countDownDate - new Date().getTime()
      setCountDown(newDate)
    }, 1000)

    return () => clearInterval(interval)
  })

  return getReturnValues(countDown)
}

const getReturnValues = (countDown) => {
  const daysValue = Math.floor(countDown / (1000 * 60 * 60 * 24)) || 0
  const hoursValue = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0
  const minutesValue = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)) || 0
  const secondsValue = Math.floor((countDown % (1000 * 60)) / 1000) || 0

  const isDone = daysValue + hoursValue + minutesValue + secondsValue <= 0

  const days = daysValue > 9 ? daysValue : isDone ? "00" : "0" + daysValue
  const hours = hoursValue > 9 ? hoursValue : isDone ? "00" : "0" + hoursValue
  const minutes = minutesValue > 9 ? minutesValue : isDone ? "00" : "0" + minutesValue
  const seconds = secondsValue > 9 ? secondsValue : isDone ? "00" : "0" + secondsValue

  return { days, hours, minutes, seconds, isDone }
}
