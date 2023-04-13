import { ButtonProps, Button as InternalButton } from "./button"
import { ButtonAsync } from "./button-async"
import { ButtonGroup, ButtonGroupProps } from "./button-group"

interface Button extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
  Async: typeof ButtonAsync
  Group: typeof ButtonGroup
}
const Button = InternalButton as Button

export { Button }
export type { ButtonProps, ButtonGroupProps }

Button.Async = ButtonAsync
Button.Group = ButtonGroup
