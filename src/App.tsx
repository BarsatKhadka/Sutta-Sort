import './App.css'
import { LeftComponents } from './LeftComponents/LeftComponents'
import { RightComponents } from './RightComponents/RightComponents'

function App() {
  return (
    <div className="grid grid-cols-[30%_70%] h-screen">
      <div className="p-4">
        <LeftComponents/>
      </div>
      <div className="p-4">
        <RightComponents/>
      </div>
    </div>
  )
}

export default App
