import { useState } from 'react'
import './App.css'
import FetchScreen from './Screens/FetchScreen/FetchScreen'
import ShowScreen from './Screens/showScreen/ShowScreen';

function App() {

  const [screenType, setScreenType] = useState('fetch');
  return (
    <>
      <div className='changeScreenButtons'>
          <button onClick={() => {
            setScreenType('fetch');
          }}>Send JSON Screen</button>
          <button onClick={() => {
            setScreenType('show');
          }}>Fetch Screen</button>
      </div>
      {
        screenType == 'fetch' ?  <FetchScreen></FetchScreen>: <ShowScreen></ShowScreen>
      }
    </>
  )
}

export default App
