import { useState } from 'react'
import { toast } from 'react-toastify'

type CopiedValue = string | null
type CopyFn = (text: string, message?: string) => Promise<boolean> // Return success

const useCopyToClipboard = (): { copiedText: CopiedValue; copy: CopyFn } => {
  const [copiedText, setCopiedText] = useState<CopiedValue>(null)

  const copy: CopyFn = async (text, message?: '') => {
    if (!navigator?.clipboard) {
      toast.warning('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)

      toast.success(message || 'Copy to clipboard successfully')

      return true
    } catch (error) {
      console.error(error)
      toast.error('Copy to clipboard failed')
      setCopiedText(null)
      return false
    }
  }

  return { copiedText, copy }
}

export default useCopyToClipboard
