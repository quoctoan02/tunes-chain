import React from 'react'
interface Props {
  icon: (props: React.ComponentProps<'svg'>) => JSX.Element
  label: string
}

const IconButton = ({ icon: Icon, label }) => {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <Icon className="h-8 w-8" />
      <span>{label}</span>
    </button>
  )
}

export default IconButton
