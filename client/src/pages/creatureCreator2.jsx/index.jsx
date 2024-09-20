import { useState } from "react";
import Form, { parseForm } from "./form";
import inputToPrimary from "./logic/inputToPrimary";
import primaryToSecondary from "./logic/primaryToSecondary";
import secondaryToComplete from "./logic/secondaryToComplete";
import completeToValues from "./logic/completeToValues";
import Questions from "./questions/questions";
import Creature from "./creature";

export default function CreatureCreator2() {
    var [creatureInput, setCreatureInput] = useState({});
    var [inputType, setInputType] = useState("form");
    
    function handleSubmit(e) {
		e.preventDefault();
        var rawData = new FormData(e.target);
        var input = parseForm(rawData);
        parseData(input);
	}

    function handleChange(e) {
        setInputType(inputType === "form" ? "buttons" : "form");
    }

    function parseData(partialInput) {
        var input = {
            ...blankInput(),
            ...creatureInput.input,
            ...partialInput
        }

        console.log(creatureInput.input);
        console.log(partialInput);
        console.log(input);

        var primary = inputToPrimary(input);
        var secondary = primaryToSecondary(primary);
        var complete = secondaryToComplete(secondary);
        var values = completeToValues(complete);
        setCreatureInput({
            input: input,
            primary: primary,
            secondary: secondary,
            complete: complete,
            values: values
        })
    }

    return (
        <div>
            <h1>Creature Creator</h1>
            <p>Fill out the questions to create your creature. If you are unsure of an answer, leave it blank</p>
            <button onClick={handleChange} >Switch Form Type</ button>
            <hr />
            {inputType==="form" ? <Form handleSubmit={handleSubmit} /> : <Questions parseData={parseData} />}
            <hr />
            <p>Input</p>
            {JSON.stringify(creatureInput.input)}
            <hr />
            <p>Primary</p>
            {JSON.stringify(creatureInput.primary)}
            <hr />
            <p>Secondary</p>
            {JSON.stringify(creatureInput.secondary)}
            <hr />
            <p>Complete</p>
            {JSON.stringify(creatureInput.complete)}
            <hr />
            <p>Values</p>
            {JSON.stringify(creatureInput.values)}
            <hr />
            {creatureInput.values && <Creature creature={creatureInput.values} />}
        </div>
    );
}

export function blankInput() {
    return {
        name: "",
        level: 0,
        archetype: "",
        primaryAttribute: "",
        primarySkill: "",
        secondarySkills: [],
        traits: [],
        size: "",
        adjustments: [],
        weaknesses: [],
        immunities: [],
        resistances: [],
        item: "none",
        other: {},
        spellTradition: "",
        spells: [],
        attacks: [],
        abilities: []
    }
}