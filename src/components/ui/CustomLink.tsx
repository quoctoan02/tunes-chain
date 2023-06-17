import { cn } from '@utils/style'
import { Tooltip, TooltipProps } from 'antd'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import type { ElementType, FC, HTMLAttributes, ReactNode } from 'react'

interface LinkProps extends NextLinkProps, HTMLAttributes<HTMLAnchorElement> {
  as?: 'a'
  disabled?: boolean
  comingSoon?: boolean
  blank?: boolean
  tooltip?: Omit<TooltipProps, 'children'>
  children?: ReactNode
  href: string
}

const CustomLink: FC<LinkProps> = ({
  as,
  tooltip,
  children,
  disabled = false,
  className,
  comingSoon = false,
  blank = false,
  href = '',
  ...props
}) => {
  const Component = blank || href.startsWith('#') ? 'a' : (as as ElementType) || (NextLink as ElementType)

  const blankProps = blank ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  const disabledProps = disabled ? { onClick: (e: any) => e.preventDefault() } : {}
  const classNameProps = cn(disabled ? 'cursor-not-allowed opacity-50' : '', className)
  const tooltipProps = comingSoon ? { title: <p className="">Coming Soon</p>, ...tooltip } : tooltip

  if (!children) return null

  if (tooltip || comingSoon) {
    return (
      <Tooltip placement="bottom" {...tooltipProps}>
        <Component {...props} className={classNameProps} {...blankProps} {...disabledProps} href={href}>
          {children}
        </Component>
      </Tooltip>
    )
  }

  return (
    <Component {...props} className={classNameProps} {...blankProps} {...disabledProps} href={href}>
      {children}
    </Component>
  )
}

export default CustomLink
