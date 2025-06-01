import { DisplaySutta } from "./DisplaySutta/DisplaySutta"
import { SearchAndTag } from "./SearchAndTag/SearchAndTag"
import { TopBar } from "./TopBar"

export const RightComponents = () => {
  return (
    <div className="grid grid-rows-[12%_20%_48%] h-full">
      {/* Top Bar */}
      <div className="p-4 ">
        <TopBar/>
      </div>

      {/* Search and Tag Section */}
      <div className="p-4 ">
        <SearchAndTag/>
      </div>

      {/* Display Sutta Section */}
      <div className="p-4 ">
        <DisplaySutta/>
      </div>
    </div>
  )
}