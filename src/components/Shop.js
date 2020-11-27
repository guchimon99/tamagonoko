import React, { useCallback } from 'react'

const createEgg = (gene) => {
  return {
    experiencePoint: 0,
    parameters: {
      a: 0,
      b: 0,
      c: 0,
      d: 0
    },
    gene,
    state: 'egg'
  }
}

const Shop = ({ coin, setCoin, setMonster }) => {
  const buyEgg = useCallback((eggType, price) => {
    if (coin < price) return
    setCoin(coin - price)

    switch (eggType) {
      case 'cheep':
        setMonster(createEgg('D'))
        break
      case 'normal':
        setMonster(createEgg('C'))
        break
      case 'expensive':
        setMonster(createEgg('B'))
        break
      case 'super-expensive':
        setMonster(createEgg('A'))
        break
    }
  }, [coin])

  return (
    <section>
      <h1>🏬 お店</h1>
      <h2>🐣 卵</h2>
      <ul>
        <li>
          安いたまご 100コイン<br/>
          <button onClick={() => buyEgg('cheep', 100)} disabled={coin < 100}>
            {coin >= 100 ? '買う' : '買えない'}
          </button>
        </li>
        <li>
          普通のたまご 500コイン<br/>
          <button onClick={() => buyEgg('normal', 500)} disabled={coin < 500}>
            {coin >= 500 ? '買う' : '買えない'}
          </button>
        </li>
        <li>
          良いたまご 1000コイン<br/>
          <button onClick={() => buyEgg('expensive', 1000)} disabled={coin < 1000}>
            {coin >= 1000 ? '買う' : '買えない'}
          </button>
        </li>
        <li>
          めっちゃ良いたまご 3000コイン<br/>
          <button onClick={() => buyEgg('super-expensive', 3000)} disabled={coin < 3000}>
            {coin >= 3000 ? '買う' : '買えない'}
          </button>
        </li>
      </ul>
    </section>
  )
}

export default Shop
