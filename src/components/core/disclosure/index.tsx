"use client"

import * as HeadlessUI from "@headlessui/react"
import { cn } from "@utils/style"
import React, { HTMLAttributes, ReactNode } from "react"
import { HiChevronDown } from "react-icons/hi"

interface DisclosureItem {
  label: ReactNode
  content?: ReactNode
  defaultOpen?: boolean
}

export interface DisclosureProps extends HTMLAttributes<HTMLDivElement> {
  items?: Array<DisclosureItem>
}

export const Disclosure = React.forwardRef<HTMLDivElement, DisclosureProps>(({ items, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("bg-component flex flex-col gap-1 rounded p-1", className)}>
      {items?.map((item, index) => (
        <HeadlessUI.Disclosure as={React.Fragment} {...props} key={item.label.toString() + index}>
          {({ open }) => (
            <React.Fragment>
              <HeadlessUI.Disclosure.Button className={cn("relative rounded p-2 pr-8 text-left")}>
                {item.label}
                <HiChevronDown className={cn("absolute right-2 top-3 transition-all", open && "rotate-180")} />
              </HeadlessUI.Disclosure.Button>
              <HeadlessUI.Transition appear show={open}>
                <HeadlessUI.Transition.Child
                  as={React.Fragment}
                  enter="ease-in duration-100"
                  enterFrom="opacity-0"
                  enterTo="translate-y-0"
                  leave="ease-out duration-100"
                  leaveFrom="translate-y-0"
                  leaveTo="opacity-0"
                >
                  <HeadlessUI.Disclosure.Panel className="p-2">{item.content}</HeadlessUI.Disclosure.Panel>
                </HeadlessUI.Transition.Child>
              </HeadlessUI.Transition>
            </React.Fragment>
          )}
        </HeadlessUI.Disclosure>
      ))}
    </div>
  )
})

Disclosure.displayName = "Disclosure"
