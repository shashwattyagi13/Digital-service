import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const Breadcrumbs = ({name}) => {
  return (
    <div className="bg-slate-50 relative overflow-hidden">
    <div className="py-16 mx-auto max-w-7xl p-6 lg:px-8 flex items-center justify-between">
    <h1 className="text-xl md:text-2xl font-extrabold">{name}</h1>

    <div className="flex items-center text-sm md:text-base">
    <Link href="/" className="breadcrumbs-btn text-indigo-700">Home</Link>
    <div className="h-4 w-4 text-gray-400"><ChevronRightIcon/></div>
    <p className="breadcrumbs-btn text-gray-400">{name}</p>
    </div>
    </div>
    </div>
  )
}

export default Breadcrumbs