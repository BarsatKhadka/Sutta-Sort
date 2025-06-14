import { DisplaySutta } from "./DisplaySutta/DisplaySutta"
import { SearchAndTag } from "./SearchAndTag/SearchAndTag"
import { TopBar } from "./TopBar"

export const RightComponents = () => {
  return (
    <div className="flex flex-col space-y-4 lg:grid lg:grid-rows-[12%_20%_48%] lg:h-full lg:space-y-0">
      {/* Top Bar */}
      <div className="p-2 sm:p-4">
        <TopBar/>
      </div>
      {/* Search and Tag Section */}
      <div className="p-2 sm:p-4">
        <SearchAndTag/>
      </div>
      {/* Display Sutta Section */}
      <div className="p-2 sm:p-4 flex-1">
        <DisplaySutta/>
      </div>
    </div>
  )
}