import { InputRef } from 'antd'

import { InputPassword, InputProps, InputSearch, Input as InternalInput } from './Input'

interface OwnInputProps extends React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>> {
  Password: typeof InputPassword
  Search: typeof InputSearch
}

export type { InputProps }

export const Input = InternalInput as OwnInputProps

Input.Password = InputPassword
Input.Search = InputSearch
