import React, { useCallback } from 'react'

const Shop = ({ setCoin, coin }) => {
  const work = useCallback(() => setCoin(coin + 20), [coin])

  return (
    <section>
      <h1>🏙 職場</h1>
      <button onClick={work}>働く</button>
    </section>
  )
}

export default Shop
