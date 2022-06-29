import { useState } from "react";

const verificarCarta = (carta, pontos) => {
  if (carta === "JACK" || carta === "QUEEN" || carta === "KING") {
    return pontos + 10;
  } else if (carta === "ACE") {
    return pontos + 11 <= 21 ? pontos + 11 : pontos + 1;
  } else {
    return pontos + parseInt(carta);
  }
};

export const verificarPontos = (cartas, pontos) => {
  let valor = pontos;
  cartas.map((carta) => {
    valor = verificarCarta(carta.value, valor);
  });
  return valor;
};

export const verificarVitoria = (pontos) => {
  let msg = "iniciando"
  let valor = pontos
  
  if (valor === 21) {
    msg = "Parabéns você ganhou!!!"
     }
  if(valor <= 20 ) {
    msg = "Ainda há chances de ganhar..."
     } 
  if(valor > 21){
    msg = "Você perdeu."
     } 
  return msg
  
  
};
