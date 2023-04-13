"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import { cn } from "@utils/style"
import { ClassValue } from "class-variance-authority/dist/types"
import React, { ReactNode } from "react"
import { HiChevronDown } from "react-icons/hi"
import { Button } from "../button"

interface SelectOption {
  label?: ReactNode
  value?: any
}

export interface SelectProps
  extends HeadlessUI.ListboxProps<Button, any, any>,
    Omit<FloatProps, "as" | "children" | "className"> {
  options?: Array<SelectOption>
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      portal = true,
      flip = 10,
      shift = 10,
      adaptiveWidth = true,
      offset = 4,
      options,
      placeholder,
      size,
      variant,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <HeadlessUI.Listbox ref={ref} as="div" {...props}>
        {({ value: internalValue }) => (
          <Float
            portal={portal}
            flip={flip}
            shift={shift}
            adaptiveWidth={adaptiveWidth}
            offset={offset}
            enter="ease-out duration-100"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <HeadlessUI.Listbox.Button
              as={Button}
              className={cn("relative justify-between", className as ClassValue)}
              rightIcon={<HiChevronDown />}
              size={size}
              variant={variant}
            >
              {options?.find((item) => item.value === internalValue)?.label || internalValue || (
                <span className="text-muted">{placeholder}</span>
              )}
            </HeadlessUI.Listbox.Button>
            <HeadlessUI.Listbox.Options className="bg-component border-muted flex flex-col overflow-hidden rounded border p-1 shadow">
              {options?.map((item) => (
                <HeadlessUI.Listbox.Option as={React.Fragment} key={item.value} value={item.value}>
                  {({ selected }) => (
                    <div className={cn("hover:bg-muted cursor-pointer rounded p-2 pr-8", selected && "bg-primary/20")}>
                      {item.label || item.value}
                    </div>
                  )}
                </HeadlessUI.Listbox.Option>
              ))}
            </HeadlessUI.Listbox.Options>
          </Float>
        )}
      </HeadlessUI.Listbox>
    )
  }
)

Select.displayName = "Select"
