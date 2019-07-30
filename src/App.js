import React, {useState} from 'react';
import './App.css';

function OWRando() {
  let [Hero, setHero] = useState("? ? ?")
  const Damage = ["Ashe", "Bastion", "Doomfist", "Genji", "Hanzo", "Junkrat", "McCree", "Mei", "Pharah", "Reaper", "Soldier: 76", "Sombra", 
    "Symmetra", "Torbjorn", "Tracer", "Widowmaker"]
  const Tank = ["D.Va", "Orisa", "Reinhardt", "Roadhog", "Winston", "Wrecking Ball", "Zarya"]
  const Support = ["Ana", "Baptiste", "Don't Play Brigitte", "Lúcio", "Mercy", "Moira", "Zenyatta"]
const Heroes = Damage.concat(Tank.concat(Support))

  const DamageStyle = {
    fontSize: "20px",
    backgroundColor: "#E2A2FE",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  }
  const TankStyle = {
    fontSize: "20px",
    backgroundColor: "#BBAFFD",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  }
  const SupportStyle = {
    fontSize: "20px",
    backgroundColor: "#A2C5FE",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  } 
   const HeroesStyle = {
    fontSize: "20px",
    backgroundColor: "#A9CBE8",
    padding: "15px",
    color: "#e7e7e7",
    borderRadius: "12px",
    margin: "10px"
  }

  const DoDamage = () => {
    setHero(Damage[Math.floor(Math.random() * Damage.length)])
  }
  const DoTank = () => {
    setHero(Tank[Math.floor(Math.random() * Tank.length)])
  }
  const DoSupport = () => {
    setHero(Support[Math.floor(Math.random() * Support.length)])
  }
  const DoHeroes = () => {
    setHero(Heroes[Math.floor(Math.random() * Heroes.length)])
  }
  return (
    <div className="OWRando">
      <header className="App-header">
        <h1>Click a class to select a random hero!</h1>
        <div class = "buttons">
          <button style = {DamageStyle} onClick={DoDamage} block>DAMAGE</button>
          <button style = {TankStyle} onClick={DoTank} >TANK</button>
          <button style = {SupportStyle} onClick={DoSupport}>SUPPORT</button>
        </div>
        <button style = {HeroesStyle} onClick={DoHeroes}>ALL HEROES</button>
        <h2>You are using: {Hero}</h2>
      </header>
    </div>
  );
}



export default OWRando;
