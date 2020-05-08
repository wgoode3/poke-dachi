import React, { useState } from 'react';
import 'nes.css/css/nes.css';
import Mon from './Models/Mon';
import getRandomInt from './Models/GetRandomInt';


function getOpponent(hero) {
  let roll = getRandomInt(2);
  let oppLvl = getRandomInt(hero.lvl+1, hero.lvl-3);
  let opp;
  if(roll === 2) {
    opp = new Mon("Bulbasaur", 20, 10, 10, 1, "grass");
  } else if(roll === 1) {
    opp = new Mon("Charmander", 20, 10, 10, 1, "fire");
  } else {
    opp = new Mon("Squirtle", 20, 10, 10, 1, "water");
  }
  while(oppLvl > 1) {
    opp.levelUp();
    console.log(opp);
    oppLvl--;
  }
  return opp;
}


function App() {

  const [hasChosen, setHasChosen] = useState(false);
  const [selection, setSelection] = useState("Bulbasaur");
  const [hero, setHero] = useState({});
  const [enemy, setEnemy] = useState({});
  const [inEncounter, setInEncounter] = useState(false);
  const [onDef, setOnDef] = useState(false);

  const choose = (e) => {
    setHasChosen(true);
    let mon1 = new Mon("default");
    if(selection === "Bulbasaur") {
      mon1 = new Mon("Bulbasaur", 50, 20, 20, 5, "grass", 0, 100);
    } else if(selection === "Charmander") {
      mon1 = new Mon("Charmander", 40, 25, 20, 5, "fire", 0, 100);
    } else {
      mon1 = new Mon("Squirtle", 40, 20, 25, 5, "water", 0, 100);
    }
    setHero(mon1);
  }

  const getEncounter = e => {
    setInEncounter(true);
    let o = getOpponent(hero);
    setEnemy(o);
    let h = {...hero};
    h.msg = `You encountered a Level ${o.lvl} ${o.name}!`;
    setHero(h);
  }

  const run = e => {
    setInEncounter(false);
    let h = {...hero};
    h.msg = `You bravely ran away!`;
    setHero(h);
  }

  const attack = e => {
    let h = new Mon().recover(hero);
    let o = new Mon().recover(enemy);
    h.attack(o);
    if(o.currHp < 1) {
      h.msg = `You have defeated the enemy ${o.name}!`;
      setHero(h);
      setEnemy(o);
      setInEncounter(false);
    } else {
      setHero(h);
      setEnemy(o);
      setOnDef(true);
    }
  }

  const getAttacked = e => {
    let h = new Mon().recover(hero);
    let o = new Mon().recover(enemy);
    o.attack(h);
    if(h.currHp < 1) {
      alert("Sorry you have lost");
      setInEncounter(false);
      setOnDef(false);
      setHasChosen(false);
    }
    h.msg = o.msg;
    setHero(h);
    setEnemy(o);
    setOnDef(false);
  }

  return (
    <div className="container">
      <div className="main nes-container is-rounded">
        {
          !hasChosen ?
          <div>
            <h1 style={{textAlign: "center"}}>Choose your starter!</h1><br />
            <div className="space-evenly">
              <i className="nes-bulbasaur" onClick={ e => setSelection("Bulbasaur") }></i>
              <i className="nes-charmander" onClick={ e => setSelection("Charmander") }></i>
              <i className="nes-squirtle" onClick={ e => setSelection("Squirtle") }></i>
            </div><br />
            <div className="space-evenly">
              <label onClick={ e => setSelection("Bulbasaur") }>
                {
                  selection === "Bulbasaur" ?
                  <input type="radio" class="nes-radio" name="answer" checked /> :
                  <input type="radio" class="nes-radio" name="answer" />
                }
                <span>Bulbasaur</span>
              </label>
              <label onClick={ e => setSelection("Charmander") }>
                {
                  selection === "Charmander" ?
                  <input type="radio" class="nes-radio" name="answer" checked /> :
                  <input type="radio" class="nes-radio" name="answer" />
                }
                <span>Charmander</span>
              </label>
              <label onClick={ e => setSelection("Squirtle") }>
                {
                  selection === "Squirtle" ?
                  <input type="radio" class="nes-radio" name="answer" checked /> :
                  <input type="radio" class="nes-radio" name="answer" />
                }
                <span>Squirtle</span>
              </label>
            </div>
            <br /><br />
            <button className="btn-center nes-btn" onClick={ choose }>Choose</button>
          </div> :
          <div>

            <h3>{hero.msg}</h3>
            <br /><br />
            <div className="space-evenly">
              <div className="mon">
                <i className={hero.sprite + " hero"} />
                <br /><br />
                <p>Level: {hero.lvl}</p>
                <p>HP: {hero.currHp}</p>
              </div>
              <div className="mon">
                {!inEncounter ? 
                  <button className="nes-btn" onClick={ getEncounter }>Next</button> : 
                  <>
                    <i className={enemy.sprite} />
                    <br /><br />
                    <p>Level: {enemy.lvl}</p>
                    <p>HP: {enemy.currHp}</p>
                  </>
                }
              </div>
            </div>
            <br /><br />
            {
              inEncounter && !onDef ?
              <div className="space-evenly">
                <button className="nes-btn is-error" onClick={ attack }>Attack</button>
                <button className="nes-btn is-primary" onClick={ run }>Run</button>
              </div>:
              ""
            }
            {
              inEncounter && onDef ?
              <div className="space-evenly"><button className="nes-btn" onClick={ getAttacked }>Next</button></div> :
              ""
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;