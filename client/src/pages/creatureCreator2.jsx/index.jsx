import { useState } from "react";
import Form, { parseData } from "./form";
import inputToPrimary from "./logic/inputToPrimary";
import primaryToSecondary from "./logic/primaryToSecondary";
import secondaryToComplete from "./logic/secondaryToComplete";
import completeToValues from "./logic/completeToValues";

export default function CreatureCreator2() {
    var [creatureInput, setCreatureInput] = useState({});
    
    function handleSubmit(e) {
		e.preventDefault();
        var rawData = new FormData(e.target);
        var input = parseData(rawData);
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
            <Form handleSubmit={handleSubmit} />
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
        </div>
    );
}