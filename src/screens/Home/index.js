import React, { useEffect, useState } from "react";
import { View, Text, Button, ImageBackground , Alert} from "react-native";
import { getDeckId, shuffleDeck } from "../../services/axiosClient";
import { styles } from "./styles";
import bgImg from "../../images/AAAA.webp";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [idDeck, setIdDeck] = useState(null);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      const id = await getDeckId();
      setIdDeck(id);
      setLoading(false);
    };
    get();
  }, []);

  const inciarPartida = async () => {
    navigation.navigate("Game", {
      deckId: idDeck,
    });
    shuffleDeck(idDeck);

  };

  const regras = () => {
    Alert.alert(
      "regras", //title
      "Seu objetivo é fazer 21 pontos. \n" +
      "Cada carta possui um valor em pontos sendo: \n" +
      "As catas numerdas (2-10) valem seus numeros em pontos. \n" +
      "REI(K), RAINHA(Q) e VALETE(J) valem 10 pontos cada. \n" +
      "ÁS pode valer 1 ou 11 pontos, valendo o que for mais conveniente para formar 21 pontos."
    )
    
  };

  return (
    <ImageBackground
      source={bgImg}
      style={styles.container}
      imageStyle={{ resizeMode: "cover",  }}
    >
      <Text style={styles.title}>Jogo de Cartas</Text>
      <View style={styles.btnPosition}>
      <Button title="REGRAS" onPress={regras} />
      <Text />
        <Button title="Iniciar Partida de 21" onPress={inciarPartida} />
      </View>
    </ImageBackground>
  );
};

export default Home;
