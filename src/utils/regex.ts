type RegexName = 'alpha' | 'int' | 'float' | 'url' | 'currency' | 'specialSymbols'

export const Regex: Record<RegexName, RegExp> = {
  alpha: RegExp(/^[A-Z]+$/i),
  int: RegExp(/^\d+$/),
  float: RegExp(/^[+-]?\d+(\.\d+)?$/),
  url: RegExp(
    /^http(s)?:\/\/((\d+\.\d+\.\d+\.\d+)|(([\w-]+\.)+([a-z,A-Z][\w-]*)))(:[1-9][0-9]*)?(\/([\w-.\/:%+@&=]+[\w- .\/?:%+@&=]*)?)?(#(.*))?$/
  ),
  currency: RegExp(`^\\d*(?:\\\\[.])?\\d*$`),
  specialSymbols: RegExp(/[.*+?^${}()|[\]\\]/g),
}
