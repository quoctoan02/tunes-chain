import { HiOutlineX } from "react-icons/hi"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const SwalPopper = withReactContent(Swal)

export const Popper = SwalPopper.mixin({
  showCloseButton: true,
  hideClass: {
    popup: "opacity-0 pointer-events-none hidden scale-95",
    backdrop: "pointer-events-none",
  },
  showClass: {
    popup: "opacity-100 scale-100 duration-200",
    backdrop: "pointer-events-auto backdrop-blur bg-black/80",
  },
  closeButtonHtml: <HiOutlineX />,
})
