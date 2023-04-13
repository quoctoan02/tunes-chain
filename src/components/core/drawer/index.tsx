"use client"

import * as HeadlessUI from "@headlessui/react"
import { cn } from "@utils/style"
import React from "react"
import { HiX } from "react-icons/hi"

export interface DrawerProps {
  open?: boolean
  onClose?(): void
  closable?: boolean
  children?: React.ReactNode
  title?: React.ReactNode
  trigger?: React.ReactElement
  width?: number
  className?: string
  clickInsideToClose?: boolean
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ open, onClose, closable = true, children, title, trigger, width = 350, className, clickInsideToClose }, ref) => {
    const [show, setShow] = React.useState(!!open)

    const handleClose = () => {
      if (trigger) {
        setShow(false)
      } else {
        if (onClose) {
          onClose && onClose()
          setShow(false)
        }
      }
    }

    const Trigger =
      trigger &&
      React.cloneElement(trigger, {
        onClick: () => {
          setShow(true)
          const { props } = trigger
          props.onClick && props.onClick()
        },
        ...trigger.props,
      })

    React.useEffect(() => {
      setShow(!!open)
    }, [open])
    return (
      <React.Fragment>
        {Trigger}
        <HeadlessUI.Transition appear show={show} as={React.Fragment}>
          <HeadlessUI.Dialog as="div" ref={ref} open={open} onClose={closable ? handleClose : () => {}}>
            <HeadlessUI.Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur" />
            </HeadlessUI.Transition.Child>

            <HeadlessUI.Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <HeadlessUI.Dialog.Panel
                className={cn(
                  "fixed bottom-0 right-0 top-0 z-50",
                  "bg-component border-muted w-full cursor-auto overflow-hidden border-l p-6 text-left align-middle shadow transition-all"
                )}
                style={{
                  maxWidth: width + "px",
                }}
              >
                {title && (
                  <HeadlessUI.Dialog.Title as="h3" className="mb-2 text-lg font-medium">
                    {title}
                  </HeadlessUI.Dialog.Title>
                )}
                {closable && <HiX role="button" className="absolute right-6 top-6" onClick={handleClose} />}
                <div className={cn("scrollbar-none h-full overflow-y-auto", className)}>{children}</div>
              </HeadlessUI.Dialog.Panel>
            </HeadlessUI.Transition.Child>
          </HeadlessUI.Dialog>
        </HeadlessUI.Transition>
      </React.Fragment>
    )
  }
)

Drawer.displayName = "Drawer"
