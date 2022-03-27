import React, {useEffect, useState} from 'react'

import * as S from './styles'

const GameCard = ({ game, selectedGames, selectGame }) => {

  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if(selectedGames.some((item)=> item.id === game.id)){
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [selectedGames, game])

  return (
    <S.Card onClick={() => selectGame(game)}>
      <S.Image src={game.img} selected={selected}/>
    </S.Card>
  )
}
export default GameCard