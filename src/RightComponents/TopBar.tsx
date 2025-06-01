import SuttaSortLogo from "../assets/SuttaSortLogo.png"

export const TopBar = () => {
  return (
    <div className="flex flex-col h-full">

      <div className="flex items-center">
        <img 
          src={SuttaSortLogo}
          alt="Sutta Sort Logo" 
          className="w-10 h-10" 
        />
        <h1 className="text-2xl font-bold ml-4">SuttaSort</h1>
      </div>
        <p className="text-sm text-gray-600 ml-[56px]">
        A searchable gateway to the themes of the Early Buddhist texts.
        </p>

    </div>
  )
}