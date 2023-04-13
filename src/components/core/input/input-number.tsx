"use client"

import { Regex } from "@utils/regex"
import { FC, FormEvent } from "react"
import { Input, InputProps } from "./input"

export interface InputNumberProps extends Omit<InputProps, "onChange"> {
  onChange?(value: string): void
}

export const InputNumber: FC<InputNumberProps> = ({
  type = "text",
  spellCheck = "false",
  autoCorrect = "off",
  autoComplete = "off",
  placeholder = "0.00",
  pattern = "^[0-9]*[.,]?[0-9]*$",
  maxLength = 20,
  value,
  onChange,
  ...props
}) => {
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget
    const transformComma = value.replace(/,/g, ".")
    const escapeRegExp = transformComma.replace(Regex.specialSymbols, "\\$&")
    if (transformComma === "" || Regex.currency.test(escapeRegExp)) {
      onChange && onChange(transformComma)
    }
  }

  return (
    <Input
      {...props}
      type={type}
      spellCheck={spellCheck}
      autoCorrect={autoCorrect}
      autoComplete={autoComplete}
      placeholder={placeholder}
      pattern={pattern}
      maxLength={maxLength}
      value={value?.toString()}
      onChange={handleChange}
    />
  )
}

InputNumber.displayName = "InputNumber"
