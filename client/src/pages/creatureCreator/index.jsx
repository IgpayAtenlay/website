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
        perception: {
            modifier: 13,
            scale: "auto"
        },
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
                modifier: 9,
                scale: "low"
            },
            {
                name: "medicine",
                modifier: 13,
                scale: "auto"
            },
            {
                name: "plague lore",
                modifier: 13,
                scale: "high"
            },
            {
                name: "religion",
                modifier: 13,
                scale: "auto"
            }
        ],
        abilities: {
            str: {
                modifier: 0, 
                scale: "low"
            },
            dex: {
                modifier: 1, 
                scale: "moderate"
            },
            con: {
                modifier: 4, 
                scale: "high"
            },
            int: {
                modifier: 2, 
                scale: "moderate"
            },
            wis: {
                modifier: 4, 
                scale: "high"
            },
            cha: {
                modifier: 2, 
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
                modifier: 20, 
                scale: "high"
            },
            fort: {
                modifier: 13, 
                scale: "medium"
            },
            ref: {
                modifier: 8, 
                scale: "low"
            },
            will: {
                modifier: 13, 
                scale: "medium"
            },
            hp: {
                modifier: 73, 
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
                modifier: 25
            }
        ],
        weapons: [
            {
                name: "staff",
                range: "melee",
                modifier: 9,
                traits: [{name: "two-hand d8"}],
                damageDice: "1d4",
                damageType: "bludgeoning"
            },
            {
                name: "crossbow",
                range: "ranged",
                modifier: 10,
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

    var [formToggle, setFormToggle] = useState(true);
    function handleChange() {
        setFormToggle(!formToggle);
    }

    return (<div class="creatureCreator">
        <CreatureContext.Provider value={{creature, setCreature}}>
            <button onClick={handleChange}>{formToggle ? "Custom Form" : "Automatic Form"}</button>
            {formToggle ? <AutoForm creature={creature} /> : <CustomForm creature={creature} />}
            <hr />
            <Creature creature={creature} />
        </CreatureContext.Provider>
    </div>);
}