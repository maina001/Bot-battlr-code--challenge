import React from "react";
import "./botsstyle.css"

export default function Botcollection ({bots, onSelect}){
    // console.log(bots)
    // const [selectedBot,setSelectedBot] =useState(null)

    return (
        <div className="bot-collection d-flex flex-wrap">
        {bots.map(bot => (
          <div key={bot.id} className="bot-card card m-1" onClick={()=> onSelect(bot) }>
            <img className="card-img-top" src={bot.avatar_url} alt={bot.name} />
            <div className="card-body">
              <h2 className="card-title">{bot.name}</h2>
              <p className="card-text">Health: {bot.health}</p>
              <p className="card-text">Damage: {bot.damage}</p>
              <p className="card-text">Armor: {bot.armor}</p>
              <p className="card-text">Class: {bot.bot_class}</p>
            </div>
          </div>
        ))}
      </div>
    )
}