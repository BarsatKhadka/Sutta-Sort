import { TagExplorer } from './TagExplorer/TagExplorer'
import { About } from './About/About'

export const LeftComponents = () => {
  return (
    <div className="flex flex-col space-y-4 lg:h-full">
      <div className="p-2 sm:p-4 flex-1">
        <TagExplorer />
      </div>
      <div className="p-2 sm:p-4">
        <About />
      </div>
    </div>
  )
}