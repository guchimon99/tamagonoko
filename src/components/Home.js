import React, { useCallback } from 'react'

const experiencePointToState = (experiencePoint) => {
  if (experiencePoint < 10) return 'egg'
  if (experiencePoint < 20) return 'baby'
  if (experiencePoint < 40) return 'child'
  return 'adult'
}

const monsterToEmoji = (monster) => {
  if (!monster) return '⬜'

  if (monster.state === 'egg') return '🥚'
  if (monster.state === 'baby') return '🐣'
  if (monster.state === 'child') return '🐥'

  switch (monster.gene) {
    case 'A':
      return '🦩'
    case 'B':
      return '🦉'
    case 'C':
      return '🦆'
    case 'D':
      return '🐓'
    default:
      return '🗿'
  }
}

const Monster = ({ monster }) => {
  return <div style={{ fontSize: '6rem' }}>{monsterToEmoji(monster)}</div>
}

const Home = ({ monster, coin, setMonster }) => {
  const pet = useCallback(() => {
    const experiencePoint = monster.experiencePoint + 1
    setMonster({
      ...monster,
      state: experiencePointToState(experiencePoint),
      experiencePoint
    })
  }, [monster])

  return (
    <section>
      <h1>🏠 おうち</h1>

      <h2>財布</h2>
      <div>コイン: {coin}</div>

      <h2>持ち物</h2>
      <div>特になし</div>

      <h2>モンスター</h2>
      <div onClick={pet}>
        <Monster monster={monster} />
        <div>
          {monster ? Array.from({ length: monster.experiencePoint }).fill(null).map(() => '.').join('') : ''}
        </div>
      </div>

    </section>
  )
}

export default Home
