import React, { useState } from 'react'
import Shop from './Shop'
import WorkPlace from './WorkPlace'
import Home from './Home'

const App = () => {
  const [coin, setCoin] = useState(0)
  const [monster, setMonster] = useState(null)

  return (
    <>
      <div>Moonoster</div>
      <Home {...{ coin, monster, setMonster }} />
      <WorkPlace {...{ coin, setCoin }} />
      <Shop {...{ coin, setCoin, setMonster }} />
    </>
  )
}

export default App
