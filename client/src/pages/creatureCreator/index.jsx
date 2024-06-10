import {useState, createContext, useContext} from 'react';
import "../../css/creatureCreator/index.css";
import Creature from "./creature/creature";
import CreatureForm from "./form/creatureForm";
import {v4} from "uuid";

export var CreatureContext = createContext(null);

export default function CreatureCreator() {
    var [creature, setCreature] = useState({
        name: "plague doctor",
        type: "creature",
        level: 5,
        tags: [
            {
                text: "n", 
                color: "orange"
            },
            {
                text: "medium",
                color: "green"
            },
            {
                text: "human",
                color: "red"
            },
            {
                text: "humanoid",
                color: "red"
            }],
        perception: 13,
        languages: [{language: "common"}],
        skills: [
            {
                name: "intimidation",
                value: 9
            },
            {
                name: "medicine",
                value: 13
            },
            {
                name: "plague lore",
                value: 13
            },
            {
                name: "religion",
                value: 13
            }
        ],
        abilities: {
            str: 0,
            dex: 1,
            con: 4,
            int: 2,
            wis: 4,
            cha: 2
        },
        items: [
            {
                name: "crossbow",
                amount: "10 bolts"
            },
            {
                name: "healer's tools",
            },
            {
                name: "minor potion of healing",
                amount: 4,
                magical: true
            },
            {
                name: "staff"
            },
            {
                name: "studded leather"
            }],
        defences: {
            ac: 20,
            fort: 13,
            ref: 8,
            will: 13,
            hp: 73
        },
        speed: 25,
        weapons: [
            {
                name: "staff",
                range: "melee",
                onhit: 9,
                traits: [{name: "two-hand d8"}],
                damageDice: "1d4",
                damageType: "bludgeoning"
            },
            {
                name: "crossbow",
                range: "ranged",
                onhit: 10,
                traits: [{name: "range increment 120 feet"}, {name: "reload 1"}],
                damageDice: "1d8",
                damageType: "piercing"
            }
        ],
        other: [
            {
                name: "Healing Hands",
                description: "When the plague doctor casts heal, they roll d10s instead of d8s."
            }
        ]
    });

    function uniqueID(list) {
        creature[list].forEach(e => {
            if (!e.id) {
                e.id = v4();
            }
        });
    }

    uniqueID("tags");
    uniqueID("languages");
    uniqueID("skills");
    uniqueID("items");
    uniqueID("weapons");

    creature.weapons.forEach(f => {
        f.traits.forEach(e => {
            if (!e.id) {
                e.id = v4();
            }
        });
    })

    return (<div class="creatureCreator">
        <CreatureContext.Provider value={{creature, setCreature}}>
            <CreatureForm creature={creature}/>
            <Creature creature={creature}/>
        </CreatureContext.Provider>
    </div>);
}