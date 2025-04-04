import { LockIcon } from "lucide-react"

export default function NdaNotice() {
  return (
    <div className="my-10 px-5 py-4 border-l-2 border-gray-300 dark:border-gray-600 bg-transparent">
      <div className="flex items-center gap-3">
        <LockIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Due to NDA restrictions, I can't display all designs and details from this project. If you're interested in
          learning more, feel free to{" "}
          <a href="/#contact" className="text-black dark:text-white hover:underline">
            contact me
          </a>
          .
        </p>
      </div>
    </div>
  )
}

