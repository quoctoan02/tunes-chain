"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import * as HeadlessUI from "@headlessui/react"
import React from "react"
import { HiChevronRight } from "react-icons/hi"

export interface MenuItem {
  label: React.ReactNode
  icon?: React.ReactNode
  key?: any
  children?: Array<MenuItem>
}

export interface MenuProps extends Omit<FloatProps, "children"> {
  menu?: Array<MenuItem>
  children?: React.ReactElement
  onSelect?(value?: any): void
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(
  (
    { menu, children, portal = true, shift = 10, flip = 10, placement = "bottom", offset = 8, onSelect, ...props },
    ref
  ) => {
    return (
      <HeadlessUI.Menu ref={ref}>
        <Float
          portal={portal}
          shift={shift}
          flip={flip}
          placement={placement}
          offset={offset}
          enter="ease-out duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          {...props}
        >
          <HeadlessUI.Menu.Button>{children}</HeadlessUI.Menu.Button>
          <HeadlessUI.Menu.Items className="bg-component border-muted flex flex-col rounded border p-1 shadow">
            {menu?.map((item, index) =>
              item.children?.length ? (
                <Menu menu={item.children} placement="right" offset={10} key={item.label.toString() + index}>
                  <span className="hover:bg-muted relative inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2">
                    <span className="inline-flex items-center gap-2">
                      {item.icon} {item.label}
                    </span>
                    <HiChevronRight />
                  </span>
                </Menu>
              ) : (
                <HeadlessUI.Menu.Item key={item.label.toString() + item.key + index}>
                  <span
                    className={"hover:bg-muted relative inline-flex cursor-pointer items-center gap-2 rounded p-2"}
                    onClick={() => onSelect && onSelect(item.key)}
                  >
                    {item.icon} {item.label}
                  </span>
                </HeadlessUI.Menu.Item>
              )
            )}
          </HeadlessUI.Menu.Items>
        </Float>
      </HeadlessUI.Menu>
    )
  }
)

Menu.displayName = "Menu"
