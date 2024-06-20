import {useState, createContext} from 'react';
import "../../css/creatureCreator/index.css";
import Creature from "./creature";
import CustomForm from "./customForm";
import AutoForm from './autoForm';
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
            }
        ],
        perception: 13,
        senses: [
            {
                type: "darkvision"
            },
            {
                type: "echolocation",
                precision: "precise",
                distance: 30
            },
            {
                type: "scent",
                precision: "imprecise",
                distance: 60
            }
        ],
        languages: [{language: "common"}],
        skills: [
            {
                name: "intimidation",
                value: 9,
                scale: "low"
            },
            {
                name: "medicine",
                value: 13,
                scale: "auto"
            },
            {
                name: "plague lore",
                value: 13,
                scale: "high"
            },
            {
                name: "religion",
                value: 13,
                scale: "auto"
            }
        ],
        abilities: {
            str: {
                number: 0, 
                scale: "low"
            },
            dex: {
                number: 1, 
                scale: "moderate"
            },
            con: {
                number: 4, 
                scale: "high"
            },
            int: {
                number: 2, 
                scale: "moderate"
            },
            wis: {
                number: 4, 
                scale: "high"
            },
            cha: {
                number: 2, 
                scale: "moderate"
            }
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
        defenses: {
            ac: {
                number: 20, 
                scale: "high"
            },
            fort: {
                number: 13, 
                scale: "medium"
            },
            ref: {
                number: 8, 
                scale: "low"
            },
            will: {
                number: 13, 
                scale: "medium"
            },
            hp: {
                number: 73, 
                scale: "medium"
            },
            weaknesses: [
                {
                    type: "cold iron",
                    amount: 5
                }
            ],
            resistances: [],
            immunities: []
        },
        speed: [
            {
                type: "land", 
                speed: 25
            }
        ],
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
        miscAbilities: [
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

    function listUniqueId(list) {
        list.forEach(e => {
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
    uniqueID("senses");
    uniqueID("miscAbilities");
    listUniqueId(creature.defenses.weaknesses);
    listUniqueId(creature.defenses.resistances);

    creature.weapons.forEach(f => {
        listUniqueId(f.traits);
    })

    return (<div class="creatureCreator">
        <CreatureContext.Provider value={{creature, setCreature}}>
            <AutoForm creature={creature} />
            <hr />
            <CustomForm creature={creature} />
            <hr />
            <Creature creature={creature} />
        </CreatureContext.Provider>
    </div>);
}