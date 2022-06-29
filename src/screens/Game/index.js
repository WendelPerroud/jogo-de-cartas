import { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import { getCards, shuffleDeck } from "../../services/axiosClient";
import { styles } from "./styles";
import { verificarPontos, verificarVitoria } from "../../components/jogo"

const Game = ({ route }) => {
  const { deckId } = route.params;
  const [cards, setCards] = useState(null);
  const [baralho, setBaralho] = useState(null);
  const [pontos, setPontos] = useState(0);
  const [mensagem, setMensagem] = useState("testando");
  const [desabilitaBtn, setDesabilitaBtn] = useState(false);
  
  const get = async () => {
    const deck = await getCards(deckId, 2);
    setCards(deck.cards);
    setBaralho(deck.remaining)
  };

  useEffect (()=> {
    if(cards == null) return
      const verificar = [...cards];
      verificar.sort((a,b)=>{
        if (a.value === 'ACE') return 1;
        if (a !== 'ACE') return -1;
        return 0
      })
      setPontos(verificarPontos(verificar, 0))
  }, [cards]);

  useEffect(() => {
    get();
  }, []);

  useEffect(() => {
    setMensagem(verificarVitoria(pontos))
    if(pontos >= 21 ){
      setDesabilitaBtn(true)
    }
  }, [pontos]);

  const comprarCarta = async() =>{
      const draw = await getCards(deckId, 1);
      setCards( prevCards => [...cards , ...draw.cards]);
      setBaralho(draw.remaining)
      
  }

  const tentarNovamente = async() =>{
    setCards(null)
    setBaralho(null)
    setDesabilitaBtn(false)
    await shuffleDeck(deckId)
    get() 
 }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O jogo do 21</Text>
    <View style={styles.hand}>
      {cards && cards.map((card , index) =>
       <Image key={index} source={{uri: card.image}} 
       style={styles.carta} />)}
    </View>
    <View style={styles.pontos}>
    <Text style={styles.pontos} >Pontuação</Text>
    <Text style={styles.pontos} >{pontos}</Text>
    </View>
    <Text style={styles.mensagem}> {mensagem} </Text>
    <Text >Cartas no baralho: {baralho}</Text>
    <Button title="Comprar carta" disabled={desabilitaBtn} onPress={comprarCarta}/>
    <Text />
    <Button title="Tentar Novamente" onPress={tentarNovamente}/>
    </View>
  );
};

export default Game;
