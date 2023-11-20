import React, { useState } from 'react';
import BotCollection from './BotCollection';
import YourBotsArmy from './YourBotsArmy';


const App = () => {
  const [botArmy, setBotArmy] = useState([]);
  const [availableBots, setAvailableBots] = useState([]);

  const enlistBot = (bot) => {
    if (!botArmy.some(b => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBot = (botId) => {
    const updatedArmy = botArmy.filter(b => b.id !== botId);
    setBotArmy(updatedArmy);
  };

  const dischargeBot = (botId) => {
   
    const updatedArmy = botArmy.filter(b => b.id !== botId);
    setBotArmy(updatedArmy);

     const updatedAvailableBots = availableBots.filter(b => b.id !== botId);
    setAvailableBots(updatedAvailableBots);
  };



  return (
    <div className="app">
      <h1>Bot Management App</h1>
      <div className="app-content">
        <div className="section">
          <YourBotsArmy
            botArmy={botArmy}
            releaseBot={releaseBot}
            dischargeBot={dischargeBot}
          />
        </div>
        <div className="section"><BotCollection enlistBot={enlistBot} /> </div>
      </div>
    </div>

  );
}

export default App;
