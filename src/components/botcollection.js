import React,{useEffect, useState} from "react";

const BotCollection =({enListBot}) => {
    const [availableBots, setAvailableBots] = useState([]);

    useEffect(() =>{
        fetch('http://127.0.0.1:3000/bots')
          .then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setAvailableBots(data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    }, []);
    const handleEnlistment = (bot) => {
        enListBot(bot);
    };
    return (
        <div>
            <h2>Available Bots</h2>
            <div className="bot-collection">
                {availableBots.map(bot =>(
                    <div key={bot.id} className="bot-profile">
                        <h3>{bot.name}</h3>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Class:{bot.bot_class}</p>
                        <p>Catchphrase:{bot.catchphrase}</p>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <button onClick={() => handleEnlistment(bot)}>Enlist</button>
                    </div>
                     ))} 
             </div>
   </div>
    );
}

export default BotCollection;