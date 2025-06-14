import SuttaSortLogo from "../assets/SuttaSortLogo.png"

export const TopBar = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center">
        <img
          src={SuttaSortLogo}
          alt="Sutta Sort Logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
        />
        <h1 className="text-xl sm:text-2xl font-bold ml-3 sm:ml-4">SuttaSort</h1>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 ml-11 sm:ml-[56px] mt-1">
        A searchable gateway to the themes of the Early Buddhist texts.
      </p>
    </div>
  )
}