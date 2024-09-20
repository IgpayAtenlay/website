import Select from "../../components/select";
import Checkboxes from "./checkboxes";
import Traits from "./traits";
import { damageTypes } from "./variables";
import { attributes, skills, sizes } from "./variables";

export default function Form(props) {
    
    return (
        <form method="POST" onSubmit={props.handleSubmit} aria-label="creature creator 2">
            <label>Name</label>
                <input name="name" />
                <br />
            <label>Level</label>
                <input type="number" name="level" />
                <br />
            <label>Archetype</label>
                <Select name= "archetype" options={[
                    "brute", 
                    "class", 
                    "magical striker", 
                    "skill paragon",
                    "skirmisher",
                    "sniper",
                    "soldier",
                    "spellcaster"
                ]} />
                <br />
            <label>Primary Attribute</label>
                <Select name="primaryAttribute" options={Object.keys(attributes)} />
                <br />
            <label>Primary Skill</label>
                <Select name="primarySkill" options={Object.keys(skills)} />
                <br />
            <label>Secondary Skill</label>
                <Select name="secondSkill" options={Object.keys(skills)} />
                <br />
            <label>Tertiary Skill</label>
                <Select name="thirdSkill" options={Object.keys(skills)} />
                <br />
            <Traits />
            <label>Size</label>
                <Select name="size" options={sizes} />
                <br />
            adjustments<br />
            <Checkboxes name="weaknesses" list={damageTypes} />
            <Checkboxes name="resistances" list={damageTypes} />
            <Checkboxes name="immunities" list={damageTypes} />
            <label>Item</label>
                <input name="item" />
                <br />
            other<br />
            <label>Spell Tradition</label>
                <Select name="spellTradition" options={["none", "arcane", "divine", "primal", "occult"]} />
                <br />
            <label>Attack One</label>
                <input name="attackOneName" />
                <Select name="attackOneType" options={["melee", "agile", "ranged"]} /> <br />
            <label>Attack Two</label>
                <input name="attackTwoName" />
                <Select name="attackTwoType" options={["melee", "agile", "ranged"]} /> <br />
            Ability
                <Select name="abilityAction" options= {["none", "one action", "two actions", "three actions", "free action", "reaction"]} />
                <label>Name</label>
                <input name="abilityName" />
                <label>Trigger</label>
                <input name="abilityTrigger" />
                <label>Effect</label>
                <input name="abilityEffect" /> <br />
            <input type="submit" />
        </form>
    );
}

export function parseForm(formData) {
    var dataObject = Object.fromEntries(formData.entries());

    return {
        name: dataObject.name,
        level: dataObject.level ? parseInt(dataObject.level) : 0,
        archetype: dataObject.archetype,
        primaryAttribute: {
            strength: "str",
            dexterity: "dex",
            constitution: "con",
            wisdom: "wis",
            intelligence: "int",
            charisma: "cha"
        }[dataObject.primaryAttribute],
        primarySkill: dataObject.primarySkill,
        secondarySkills: [dataObject.secondSkill, dataObject.thirdSkill],
        traits: formData.getAll('traits'),
        size: dataObject.size,
        adjustments: [],
        weaknesses: formData.getAll('weaknesses'),
        immunities: formData.getAll('immunities'),
        resistances: formData.getAll('resistances'),
        item: dataObject.item ? dataObject.item : "none",
        other: {},
        spellTradition: dataObject.spellTradition,
        spells: [],
        attacks: [
            {
                name: dataObject.attackOneName,
                type: dataObject.attackOneType
            },
            {
                name: dataObject.attackTwoName,
                type: dataObject.attackTwoType
            }
        ],
        abilities: [
            {
                name: dataObject.abilityName,
                actions: dataObject.abilityAction,
                trigger: dataObject.abilityTrigger,
                effect: dataObject.abilityEffect
            }
        ]
    }
}