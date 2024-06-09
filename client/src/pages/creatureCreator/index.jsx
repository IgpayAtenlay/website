import "../../css/creatureCreator/index.css";
import Creature from "./creature";

var creature = {
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
    languages: ["common"],
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
            traits: ["two-hand d8"],
            damageDice: "1d4",
            damageType: "bludgeoning"
        },
        {
            name: "crossbow",
            range: "ranged",
            onhit: 10,
            traits: ["range increment 120 feet", "reload 1"],
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
}

export default function CreatureCreator() {
    return (<div class="creatureCreator">
        <Creature creature={creature}/>
    </div>);
}