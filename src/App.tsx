import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTempo from 'Components/CardTempo';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <CardTempo 
        avatarImgSrcUrl="/face.png"
        ticketStatus="Won"
        userName="Timonthy Lucas"
        stake={10.00}
        totalOdds={18.31}
        potWinnings={274.65}
        betName="MULTI BET"
        bets={[
          "Sheffeld Wednesday order Derby Country",
          "Celtic Glasgow",
          "Celtic Glasgow",
          "Both teams to score"
        ]}
      />
      <CardTempo 
        avatarImgSrcUrl="/face.png"
        ticketStatus="Won"
        userName="Timonthy Lucas"
        stake={10.00}
        totalOdds={18.31}
        potWinnings={274.65}
        betName="MULTI BET"
        bets={[
          "Sheffeld Wednesday order Derby Country",
          "Celtic Glasgow",
          "Celtic Glasgow",
          "Both teams to score"
        ]}
      />
      <CardTempo 
        avatarImgSrcUrl="/face.png"
        ticketStatus="Won"
        userName="Timonthy Lucas"
        stake={10.00}
        totalOdds={18.31}
        potWinnings={274.65}
        betName="MULTI BET"
        bets={[
          "Sheffeld Wednesday order Derby Country",
          "Celtic Glasgow",
          "Celtic Glasgow",
          "Both teams to score"
        ]}
      />
    </div>

  );
}

export default App;
