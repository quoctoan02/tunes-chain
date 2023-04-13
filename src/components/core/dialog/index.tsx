"use client"

import * as HeadlessUI from "@headlessui/react"
import { cn } from "@utils/style"
import React from "react"
import { HiX } from "react-icons/hi"

export interface DialogProps {
  open?: boolean
  onClose?(): void
  closable?: boolean
  children?: React.ReactNode
  title?: React.ReactNode
  trigger?: React.ReactElement
  width?: number
  center?: boolean
  className?: string
}

export const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ open, onClose, closable = true, children, title, trigger, width = 350, center, className }, ref) => {
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
      })

    React.useEffect(() => {
      setShow(!!open)
    }, [open])

    return (
      <React.Fragment>
        {Trigger}
        <HeadlessUI.Transition appear show={show} as={React.Fragment}>
          <HeadlessUI.Dialog as="div" ref={ref} onClose={closable ? handleClose : () => {}}>
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

            <div
              className={cn(
                "fixed inset-0 z-50 overflow-y-auto",
                "scrollbar scrollbar-track-inherit scrollbar-thumb-inherit scrollbar-w-1 scrollbar-thumb-rounded"
              )}
            >
              <div className="flex min-h-full p-6 text-center">
                <HeadlessUI.Transition.Child
                  as={React.Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-300"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <HeadlessUI.Dialog.Panel
                    className={cn(
                      "bg-component border-muted m-auto w-full cursor-auto overflow-hidden rounded border p-6 text-left align-middle shadow transition-all",
                      center ? "m-auto" : "mx-auto mt-52"
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
                    <div className={className}>{children}</div>
                  </HeadlessUI.Dialog.Panel>
                </HeadlessUI.Transition.Child>
              </div>
            </div>
          </HeadlessUI.Dialog>
        </HeadlessUI.Transition>
      </React.Fragment>
    )
  }
)

Dialog.displayName = "Dialog"
