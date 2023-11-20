import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const YourBotArmy = ({botArmy, releaseBot, dischargeBot}) => {

    const handleRelease = (botId) => {
        releaseBot(botId);
    };

    const handleDischarge = (botId) => {
        fetch(`http://127.0.0.1:3000/bots/${botId}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            },
        })
            .then (response =>{
                if (response.ok) {
                    dischargeBot(botId);
                }else {
                    throw new Error('Failed to delete bot from backend');
                }
            } )
            .catch(error => {
                console.error('Error deleting bot:',error);
           
            });
     };

     return (
        <div>
            <h2>Your Bot Army</h2>
            <div className="your-bot-army">
                {botArmy.map(bot => (
                    <div key={bot.id} className="bot-profile">
                        <h3>{bot.name}</h3> 

                        <button onClick={() => handleRelease(bot.id)}>Release</button> 
                        <button type="button" class="btn btn-danger" onClick={() =>handleDischarge(bot.id)}>X</button>
                    </div>  
                    ))} 
             </div>
         </div>
     );
};

export default YourBotArmy;