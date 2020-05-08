import getRandomInt from './GetRandomInt';
import isSuperEffective from './Types';

class Mon {

    constructor(name="default", hp=20, atk=10, def=10, lvl=1, type="normal", xp=0, cash=100) {
        this.name = name;
        this.hp = hp;
        this.currHp = hp;
        this.atk = atk;
        this.def = def;
        this.lvl = lvl;
        this.type= type;
        this.xp = xp;
        this.cash = cash;
        this.msg = "Your very own pokemon journey is about to begin!"
        this.sprite = `nes-${name.toLowerCase()}`;
    }

    recover( entity ) {
        this.name = entity.name;
        this.hp = entity.hp;
        this.currHp = entity.currHp;
        this.atk = entity.atk;
        this.def = entity.def;
        this.lvl = entity.lvl;
        this.type = entity.type;
        this.xp = entity.xp;
        this.cash = entity.cash;
        this.msg = entity.msg;
        this.sprite = entity.sprite;
        return this;
    }

    levelUp(){
        let hpbuff = getRandomInt(5,1);
        let atkbuff = getRandomInt(3,1);
        let defbuff = getRandomInt(3,1);
        this.hp += hpbuff;
        this.atk += atkbuff;
        this.def += defbuff;
        this.lvl++;
        this.xp = 0;
        this.msg = `${this.name} has levelled up and gained ${hpbuff} hp, ${atkbuff} atk, and ${defbuff} def!`;
        this.currHp = this.hp;
    }

    attack(opponent) {
        let roll = getRandomInt(20, 1);
        let dmg = 0;
        let mult = 1;
        this.msg = "";
        if(roll === 20) {
            // critical hit 1.5 times damage
            mult = 1.5;
            this.msg += "Critital hit! ";
        }  
        if(this.lvl > opponent.lvl) {
            roll += 5;
        }
        if( isSuperEffective(this.type, opponent.type) === 2) {
            this.msg += "It's super effective! "
            mult *= 2;
        }

        if(roll > 7) {
            // hit
            dmg = Math.floor(mult * this.atk - (0.3*opponent.def));
            this.msg += `${opponent.name} takes ${dmg} damage!`;
        } else {
            // miss
            this.msg = "Miss!";
        }
        opponent.currHp -= dmg;
    }

    getHealed() {
    }


}

export default Mon;