"use client"

import { Float, FloatProps } from "@headlessui-float/react"
import { cn } from "@utils/style"
import React from "react"
import { HiChevronRight } from "react-icons/hi"

export interface DropdownItem {
  label: React.ReactNode
  icon?: React.ReactNode
  key?: any
  children?: Array<DropdownItem>
}

export interface DropdownProps extends Omit<FloatProps, "children"> {
  menu?: Array<DropdownItem>
  children?: React.ReactElement
  onSelect?(value?: any): void
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  menu,
  onSelect,
  children,
  portal = true,
  shift = 10,
  arrow = 0,
  flip = 10,
  offset = 8,
  placement = "bottom",
  className,
  ...props
}) => {
  const [show, setShow] = React.useState<boolean>(false)

  const triggerProps: React.HTMLAttributes<HTMLDivElement> = {
    onMouseEnter: () => setShow(true),
    onFocus: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onBlur: () => setShow(false),
    onClickCapture: () => setShow((prev) => !prev),
  }

  const Trigger =
    typeof children === "string" ? (
      <span {...triggerProps}>{children}</span>
    ) : (
      React.cloneElement(children, {
        // ...triggerProps,
        ...children.props,
      })
    )
  return (
    <div {...triggerProps} className={cn("h-fit w-fit", className)}>
      <Float
        portal={portal}
        shift={shift}
        arrow={arrow}
        flip={flip}
        offset={offset}
        placement={placement}
        show={show}
        enter="ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        {...props}
      >
        {Trigger}
        <div className="border-muted rounded border">
          <Float.Arrow className="bg-component border-muted absolute h-3 w-3 rotate-45 border" />
          <div className="bg-component relative flex flex-col rounded p-1 shadow">
            {menu?.map((item, index) =>
              item.children?.length ? (
                <Dropdown menu={item.children} placement="right" offset={10} key={item.label.toString() + index}>
                  <span className="hover:bg-muted relative inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded p-2">
                    <span className="inline-flex items-center gap-2">
                      {item.icon} {item.label}
                    </span>
                    <HiChevronRight />
                  </span>
                </Dropdown>
              ) : (
                <div key={item.label.toString() + item.key + index}>
                  <span
                    className={
                      "hover:bg-muted relative inline-flex w-full cursor-pointer items-center gap-2 rounded p-2"
                    }
                    onClick={() => onSelect && onSelect(item.key)}
                  >
                    {item.icon} {item.label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </Float>
    </div>
  )
}

Dropdown.displayName = "Dropdown"
