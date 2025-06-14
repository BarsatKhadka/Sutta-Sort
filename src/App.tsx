
import './App.css'
import { LeftComponents } from './LeftComponents/LeftComponents'
import { RightComponents } from './RightComponents/RightComponents'

function App() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[30%_70%] lg:h-screen">
      <div className="p-4">
        <LeftComponents/>
      </div>
      <div className="p-4">
        <RightComponents/>
      </div>
    </div>
  )
}

export default App;