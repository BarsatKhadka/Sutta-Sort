import { TagExplorer } from './TagExplorer/TagExplorer'
import { About } from './About/About'

export const LeftComponents = () => {
  return (
    <div className="grid grid-rows-[65%_25%] h-full">
      <div className="p-4">
        <TagExplorer />
      </div>
      <div className="p-4">
        <About />
      </div>
    </div>
  )
}