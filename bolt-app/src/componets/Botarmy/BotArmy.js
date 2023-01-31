mport React from "react";
import "./armystyle.css"

export default function BotArmy({bot}){
    return (

        <div className="bot-army">
        {bot.map(bot => (
            <div className="card-body" key={bot.id}>
              <img className="" src={bot.avatar_url} alt={bot.name} />
              <h2 className="card-title">{bot.name}</h2>
              <p className="card-text">Health: {bot.health}</p>
              <p className="card-text">Damage: {bot.damage}</p>
              <p className="card-text">Armor: {bot.armor}</p>
              <p className="card-text" >Class: {bot.bot_class}</p>
            </div>
          ))}
        </div>
    )
}