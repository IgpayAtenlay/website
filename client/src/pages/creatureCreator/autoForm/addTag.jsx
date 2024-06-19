import {useContext} from 'react';
import {CreatureContext} from "../index";
import {v4} from "uuid";

export default function AddTag() {
    var tags = ["aberration", "aeon", "air", "angel", "animal"];
    var tagOptions = tags.map(e => <option value={e}>{e.toUpperCase()}</option>);

    var {creature, setCreature} = useContext(CreatureContext);

    function handleChange(e) {
        addTag(e.target.value);
        switch(e.target.value) {
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

    return (
        <select class="red" value="add tag" onChange={handleChange}>
            <option value="add tag">ADD TAG</option>
            {tagOptions}
        </select>
    );
}

