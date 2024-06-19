import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddTag() {
    var tags = ["aberration", "aeon", "air", "angel", "animal", "archon", "astral", "azata"];
    var tagOptions = tags.map(e => <option value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        addTag(e.target.value);
    }

    function addTag(text) {
        if (!creature.tags.some(e => e.text === text)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                tags: prevCreature.tags.concat({
                    text: text,
                    color: "red",
                    id: v4()
                })
            }));
        }

        switch(text) {
            case "aberration":
                addSense("darkvision");
                addLanguage("aklo");
                break;
            case "aeon":
                addTag("monitor");
                addLanguage("utopian");
                break;
            case "air":
                addLanguage("sussuran");
                addSpeed("fly");
                break;
            case "angel":
                addTag("celestial");
                addTag("holy");
                addSpeed("fly");
                break;
            case "animal":
                deleteLanguages();
                changeAbility("int", "terrible");
                break;
            case "archon":
                addTag("celestial");
                addTag("holy");
                break;
            case "astral":
                addSense("darkvision");
                break;
            case "azata":
                addTag("celestial");
                addTag("holy");
                addWeakness("cold iron");
                break;
            case "beast":
                changeAbility("int", "terrible");
                break;
            case "celestial":
                addTag("holy");
                addSense("darkvision");
                addLanguage("empyrean");
                addWeakness("unholy");
                addOther("holy strikes", "all your strikes have the trait holy");
                addOther("saves vs magic", "you have a +1 status bonus to all saves vs. magic");
                break;
            default:
                break;
        }
    }

    function addSense(sense) {
        if (!creature.senses.some(e => e.type === sense)) {
            var senseObject;
            if (sense === "motion sense") {
                senseObject = {
                    type: sense,
                    precision: "precise",
                    distance: 60,
                    id: v4()
                }
            } else if (sense === "lifesense") {
                senseObject = {
                    type: sense,
                    distance: 60,
                    id: v4()
                }
            } else {
                senseObject = {
                    type: sense,
                    id: v4()
                };
            }
            setCreature(prevCreature => ({
                ...prevCreature,
                senses: prevCreature.senses.concat(senseObject)
            }));
        }
    }
    
    function addLanguage(language) {
        if (!creature.languages.some(e => e.language === language)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                languages: prevCreature.languages.concat({
                    language: language,
                    id: v4()
                })
            }));
        }
    }

    function addSpeed(type) {
        if (!creature.speed.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                speed: prevCreature.speed.concat({
                    type: type,
                    speed: 30,
                    id: v4()
                })
            }));
        }
    }

    function deleteLanguages() {
        setCreature(prevCreature => ({
            ...prevCreature,
            languages: []
        }));
    }

    function changeAbility(name, scale) {
        setCreature(prevCreature => ({
            ...prevCreature,
            abilities: {
                ...prevCreature.abilities,
                [name]: {
                    ...prevCreature.abilities[name],
                    scale: scale
                }
            }
        }));
    }

    function addWeakness(type) {
        if (!creature.defenses.weaknesses.some(e => e.type === type)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                defenses: {
                    ...prevCreature.defenses,
                    weaknesses: prevCreature.defenses.weaknesses.concat({
                        type: type,
                        amount: 5,
                        id: v4()
                    })
                }
            }));
        }
    }

    function addOther(name, description) {
        if (!creature.other.some(e => e.name === name)) {
            setCreature(prevCreature => ({
                ...prevCreature,
                other: prevCreature.other.concat({
                    name: name,
                    description: description,
                    id: v4()
                })
            }));
        }
    }

    return (
        <select class="red" value="add tag" onChange={handleChange}>
            <option value="add tag">ADD TAG</option>
            {tagOptions}
        </select>
    );
}

