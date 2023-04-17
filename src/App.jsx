import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Modal from './components/Modal'
import {useState, createContext } from 'react'

export const ContextBox = createContext()

function App() {
  const [box, setBox] = useState([])

  return (
    <div className="App">
      <ContextBox.Provider value={[box, setBox]}>
        <RouterProvider
          router={router}
        />
      </ContextBox.Provider>
    </div>
  )
}

export default App
