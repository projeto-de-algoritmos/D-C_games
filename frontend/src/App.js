import React, {useEffect, useState} from 'react'
import GameCard from './components/GameCard';
import api from './service/api'
import ReasultModal from './components/ResultModal';

import * as S from './styles'

const App = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedGames, setSelectedGames] = useState([]);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState('None');
  const [description, setDescription] = useState('None');

  const selectGame = (game) => {
    if(selectedGames.some((item)=> item.id === game.id)){
      const result = selectedGames.filter((item) => game.id !== item.id);
      setSelectedGames(result);

    } else {
      setSelectedGames([...selectedGames, game])
    }
      
  }

  const getGames = async () => {
    setLoading(true);
    await api.get('/games')
    .then((response) => {
      setGames(response.data.games);
      setLoading(false);

    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  const getRecomendation = async () => {
    if (selectedGames.length > 0){
      const selectedGamesId = selectedGames.map((n) => {
        return n['id']
      })

      await api.post('/recomendation', selectedGamesId)
      .then((response) => {
        setImage(response.data.img);
        setDescription(response.data.desc);
        setModal(true)
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      alert('Selecione algum jogo');
    }
  }

  useEffect(() => {
    getGames();
  }, [])
  
  return (
    <S.Wrapper>
          {modal && <ReasultModal 
        visible={modal}
        setVisible={setModal}
        description={description}
        image={image}
      />}
      <S.Header>
        <h1>DC Games</h1>
        <h3>Selecione os jogos que você gosta para receber a sua recomendação</h3>
      </S.Header>
      <S.PainelContainer>
        <S.Button onClick={() => getRecomendation()}>Gerar</S.Button>
      </S.PainelContainer>
      {loading? <h1>Loading</h1>
      :
      <S.GamesContainer>
        {games.map((game) => 
          <GameCard 
            game={game}
            key={game.id}
            selectGame={selectGame}
            selectedGames={selectedGames}
          />)}
      </S.GamesContainer>}
    </S.Wrapper>
  );
}

export default App;
