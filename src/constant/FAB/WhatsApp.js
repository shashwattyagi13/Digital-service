import Image from "next/image"
import image from "../Images/image"

const WhatsApp = () => {
  return (
    <>
    <a className="fixed bottom-1/2 -right-10 py-2 px-3 rounded-lg bg-[#29A71A] text-white z-20 drop-shadow-lg font-semibold flex items-center gap-x-1 -rotate-90" href="https://wa.me/9917680000">
     <Image src={image.whatsapp} height={25} width={25} alt="whats app"/>
     <p>What&apos;s App</p>
    </a>
    </>
  )
}

export default WhatsApp