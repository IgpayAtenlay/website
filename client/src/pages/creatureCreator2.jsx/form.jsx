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
                <Select name="primaryAttribute" options={attributes} />
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
            spells<br />
            <label>Attack One</label>
                <input name="attackOneName" />
                <Select name="attackOneType" options={["melee", "agile", "ranged"]} /> <br />
            <label>Attack Two</label>
                <input name="attackTwoName" />
                <Select name="attackTwoType" options={["melee", "agile", "ranged"]} /> <br />
            abilities<br />
            <input type="submit" />
        </form>
    );
}

export function parseData(formData) {
    var dataObject = Object.fromEntries(formData.entries());

    return {
        name: dataObject.name,
        level: parseInt(dataObject.level),
        archetype: dataObject.archetype,
        primaryAttribute: dataObject.primaryAttribute,
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
                name: "Roar",
                actions: "reaction",
                trigger: "An ally is reduced to 0 HP",
                effect: "The bear takes the demoralize action without taking the penalty due to not sharing a language"
            },
            {
                name: "Rush",
                actions: 2,
                effect: "The bear strides twice and makes a jaw attack at the end of it's movement"
            }
        ]
    }
}